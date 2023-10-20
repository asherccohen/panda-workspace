import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  cwd: __dirname,
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    '../../libs/design-system/src/**/*.tsx',
    '../../libs/themes/src/**/*.tsx',
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
