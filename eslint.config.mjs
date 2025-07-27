// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: [
      'dist/*',
      'coverage/*',
      '**/*.d.ts',
      'src/public/*',
    ],
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
);
