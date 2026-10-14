const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the actual transpiled component with isolated hooks and element refs.
// No network, browser analytics or enquiry submission is used.
function navigation() {
  const hooks = [];
  let cursor = 0;
  let focusCalls = 0;
  const react = {
    useState(initial) {
      const index = cursor++;
      if (!(index in hooks)) hooks[index] = initial;
      return [hooks[index], value => {
        hooks[index] = typeof value === 'function' ? value(hooks[index]) : value;
      }];
    },
    useRef(initial) {
      const index = cursor++;
      if (!(index in hooks)) hooks[index] = { current: initial };
      return hooks[index];
    }
  };
  const element = (type, props) => ({ type, props });
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync('app/Navigation.tsx', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX }
  }).outputText;
  vm.runInNewContext(code, { exports, require(name) {
    if (name === 'react') return react;
    if (name === 'react/jsx-runtime') return { jsx: element, jsxs: element };
    if (name === 'next/link' || name === 'next/image') return { default: name };
    throw new Error(`Unexpected dependency: ${name}`);
  } });
  function all(node) {
    if (!node || typeof node !== 'object') return [];
    if (Array.isArray(node)) return node.flatMap(all);
    return [node, ...all(node.props?.children)];
  }
  function render() {
    cursor = 0;
    const root = exports.default();
    const nodes = all(root);
    const toggle = nodes.find(node => node.type === 'button');
    if (toggle.props.ref) toggle.props.ref.current = { focus() { focusCalls++; } };
    return { root, toggle, mobile: nodes.find(node => node.props?.id === 'mobile-navigation') };
  }
  return { render, focusCalls: () => focusCalls };
}

test('Escape dismisses expanded navigation, updates its label and restores toggle focus', () => {
  const nav = navigation();
  nav.render().toggle.props.onClick();
  const open = nav.render();
  assert.equal(open.toggle.props['aria-expanded'], true);
  assert.match(open.mobile.props.className, /\bopen\b/);
  let prevented = 0;
  open.root.props.onKeyDown({ key: 'Escape', preventDefault() { prevented++; } });
  const closed = nav.render();
  assert.equal(closed.toggle.props['aria-expanded'], false);
  assert.equal(closed.toggle.props['aria-label'], 'Open navigation menu');
  assert.doesNotMatch(closed.mobile.props.className, /\bopen\b/);
  assert.equal(prevented, 1);
  assert.equal(nav.focusCalls(), 1);
});

test('closed navigation does not intercept Escape or move focus', () => {
  const nav = navigation();
  let prevented = 0;
  nav.render().root.props.onKeyDown({ key: 'Escape', preventDefault() { prevented++; } });
  assert.equal(prevented, 0);
  assert.equal(nav.focusCalls(), 0);
});

test('other keys leave the expanded disclosure and native keyboard behaviour alone', () => {
  const nav = navigation();
  nav.render().toggle.props.onClick();
  for (const key of ['Tab', 'Enter', 'ArrowDown', 'a']) {
    nav.render().root.props.onKeyDown({ key, preventDefault() { assert.fail('unrelated key intercepted'); } });
    assert.equal(nav.render().toggle.props['aria-expanded'], true);
  }
  assert.equal(nav.focusCalls(), 0);
});

test('existing mobile link selection still closes without forced focus', () => {
  const nav = navigation();
  nav.render().toggle.props.onClick();
  const mobile = nav.render().mobile;
  const firstLink = mobile.props.children.flat().find(node => node.type === 'a');
  assert.equal(firstLink.props.href, '/plastic-surgeon-singapore');
  firstLink.props.onClick();
  assert.equal(nav.render().toggle.props['aria-expanded'], false);
  assert.equal(nav.focusCalls(), 0);
});

test('reduced-motion scrolling override follows the default smooth-scroll declaration', () => {
  const css = fs.readFileSync('app/globals.css', 'utf8');
  const smooth = css.indexOf('html{scroll-behavior:smooth}');
  const reduced = css.search(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{\s*html\s*\{\s*scroll-behavior:\s*auto\s*;?\s*\}/);
  assert.ok(smooth >= 0, 'default scrolling pattern changed; re-evaluate the guard');
  assert.ok(reduced > smooth, 'reduced-motion preference must override smooth anchor scrolling');
});
