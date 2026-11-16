'use client';

import { preload } from 'react-dom';

export default function HeadingFontPreload() {
  preload('/fonts/space-grotesk/latin.woff2', {
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  });

  return null;
}
