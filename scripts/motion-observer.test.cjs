const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Run the actual effect with isolated DOM/API doubles, not a simulated browser.
function fixture(options = {}) {
  function element(id, initial = []) {
    const names = new Set(initial);
    const styles = new Map();
    return {
      id, names, styles,
      classList: {
        add(...values) { values.forEach(value => names.add(value)); },
        remove(...values) { values.forEach(value => names.delete(value)); },
        contains(value) { return names.has(value); },
        toggle(value, force) {
          const next = force === undefined ? !names.has(value) : force;
          if (next) names.add(value); else names.delete(value);
          return next;
        }
      },
      style: {
        setProperty(key, value, priority = '') { styles.set(key, { value, priority }); },
        removeProperty(key) { styles.delete(key); },
        getPropertyValue(key) { return styles.get(key)?.value || ''; },
        getPropertyPriority(key) { return styles.get(key)?.priority || ''; }
      },
      matches() { return id === 'about' || id === 'contact'; },
      querySelectorAll() { return this.cards || []; }
    };
  }
  const body = element('body', ['original-body']);
  const sections = options.empty ? [] : [element('about', ['segmented-section']), element('contact', ['segmented-section'])];
  const cards = options.empty ? [] : [element('card-a', ['focus-card']), element('card-b', ['compliance']), element('card-c', ['blog-card'])];
  sections.forEach((section, index) => { section.cards = index === 0 ? cards.slice(0, 2) : cards.slice(2); });
  if (cards[1]) cards[1].style.setProperty('--motion-delay', '25ms', 'important');
  const snapshot = () => JSON.stringify([body, ...sections, ...cards].map(el => ({ names: [...el.names].sort(), styles: [...el.styles] })));
  const initial = snapshot();
  const observers = [], frames = [];
  let effect, observeCalls = 0;
  class Observer {
    constructor(callback, config) {
      if (observers.length + 1 === options.throwConstructor) throw new Error('constructor failed');
      Object.assign(this, { callback, config, observed: [], unobserved: [], disconnected: 0 });
      observers.push(this);
    }
    observe(target) {
      assert.equal(body.names.has('motion-js'), false, 'mask must activate only after registration');
      if (++observeCalls === options.throwObserve) throw new Error('observe failed');
      this.observed.push(target);
    }
    unobserve(target) { this.unobserved.push(target); }
    disconnect() { this.disconnected++; }
  }
  const exports = {};
  const context = {
    exports,
    require(name) {
      if (name === 'react') return { useEffect(callback) { effect = callback; } };
      throw new Error(`Unexpected dependency: ${name}`);
    },
    window: options.noMatchMedia ? {} : { matchMedia: () => ({ matches: !!options.reduced }) },
    document: { body, querySelectorAll: selector => selector === '.segmented-section' ? sections : cards },
    IntersectionObserver: options.noObserver ? undefined : Observer,
    requestAnimationFrame: options.noFrame ? undefined : callback => { frames.push(callback); return frames.length; }
  };
  const code = ts.transpileModule(fs.readFileSync('app/MotionObserver.tsx', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX }
  }).outputText;
  vm.runInNewContext(code, context);
  exports.default();
  return { body, sections, cards, observers, frames, snapshot, initial, setup: () => effect() };
}

test('missing animation APIs and reduced motion leave the readable baseline untouched', () => {
  for (const options of [{ noObserver: true }, { noMatchMedia: true }, { noFrame: true }, { reduced: true }, { empty: true }]) {
    const f = fixture(options);
    assert.doesNotThrow(() => f.setup());
    assert.equal(f.snapshot(), f.initial);
    assert.equal(f.observers.length, 0);
  }
});

test('either observer constructor failing leaves no masking classes or leaked observer', () => {
  for (const throwConstructor of [1, 2]) {
    const f = fixture({ throwConstructor });
    assert.doesNotThrow(() => f.setup());
    assert.equal(f.snapshot(), f.initial);
    for (const observer of f.observers) assert.equal(observer.disconnected, 1);
  }
});

test('partial registration failure restores prior classes and custom delay', () => {
  const f = fixture({ throwObserve: 3 });
  assert.doesNotThrow(() => f.setup());
  assert.equal(f.snapshot(), f.initial);
  assert.equal(f.observers.length, 2);
  f.observers.forEach(observer => assert.equal(observer.disconnected, 1));
});

test('normal observers retain section toggles and one-shot card reveal', () => {
  const f = fixture();
  const cleanup = f.setup();
  assert.ok(f.body.names.has('motion-js'));
  assert.equal(f.observers[0].config.threshold, 0.18);
  assert.equal(f.observers[1].config.threshold, 0.12);
  assert.equal(f.cards[1].style.getPropertyValue('--motion-delay'), '80ms');
  f.observers[0].callback([{ target: f.sections[0], isIntersecting: true }]);
  assert.ok(f.sections[0].names.has('motion-in'));
  f.observers[0].callback([{ target: f.sections[0], isIntersecting: false }]);
  assert.equal(f.sections[0].names.has('motion-in'), false);
  f.observers[1].callback([{ target: f.cards[0], isIntersecting: false }], f.observers[1]);
  assert.equal(f.frames.length, 0);
  f.observers[1].callback([{ target: f.cards[0], isIntersecting: true }], f.observers[1]);
  assert.equal(f.frames.length, 1);
  f.frames.shift()();
  assert.ok(f.cards[0].names.has('motion-in'));
  assert.equal(f.observers[1].unobserved[0], f.cards[0]);
  cleanup();
  assert.equal(f.snapshot(), f.initial);
});

test('cleanup ignores queued frames and late observer callbacks', () => {
  const f = fixture();
  const cleanup = f.setup();
  f.observers[1].callback([{ target: f.cards[0], isIntersecting: true }], f.observers[1]);
  cleanup();
  f.frames.shift()();
  f.observers[0].callback([{ target: f.sections[0], isIntersecting: true }]);
  f.observers[1].callback([{ target: f.cards[1], isIntersecting: true }], f.observers[1]);
  assert.equal(f.frames.length, 0);
  assert.equal(f.snapshot(), f.initial);
});

test('setup-cleanup-setup cycle keeps one active pair and restores the baseline', () => {
  const f = fixture();
  f.setup()();
  const cleanup = f.setup();
  assert.equal(f.observers.length, 4);
  assert.ok(f.body.names.has('motion-js'));
  assert.equal(f.observers[0].disconnected, 1);
  assert.equal(f.observers[1].disconnected, 1);
  assert.equal(f.observers[2].disconnected, 0);
  assert.equal(f.observers[3].disconnected, 0);
  cleanup();
  assert.equal(f.snapshot(), f.initial);
});

test('focused motion cards receive the same readable state on desktop and mobile', () => {
  const css = fs.readFileSync('app/globals.css', 'utf8');
  const selectors = css.match(/\.motion-js \.motion-card\.motion-in,\s*\.motion-js \.motion-card:focus-within\s*\{[^}]+\}/g) || [];
  assert.equal(selectors.length, 2);
  assert.match(selectors[0], /opacity:1/);
  assert.match(selectors[0], /filter:blur\(0\)/);
  selectors.forEach(rule => assert.match(rule, /translateY\(0\).*rotateX\(0deg\).*rotateY\(0deg\).*scale\(1\)/));
});
