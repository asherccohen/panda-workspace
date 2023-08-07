import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    '../../node_modules/@acme-org/design-system/src/**/*.tsx',
    '../../node_modules/@acme-org/themes/src/**/*.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  emitPackage: true,
  outdir: '@acme-org/themes/styled-system',
});
