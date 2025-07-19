import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: [
      'dist/*',
      'coverage/*',
      '**/*.d.ts',
      '/src/public/',
      '/src/types/',
    ],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: [
      'dist/*',
      'coverage/*',
      '**/*.d.ts',
      '/src/public/',
      '/src/types/',
    ],
    plugins: { '@stylistic': stylistic },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'max-len': ['error', { code: 80, ignoreUrls: true }],
      'linebreak-style': ['error', 'unix'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'block-spacing': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
    },
  },
  tseslint.configs.recommended,
]);
