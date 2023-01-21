module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // need to fix issues first
    'plugin:prettier/recommended',
    'plugin:react-native-a11y/all'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Require prettier issues to be fixed
    'prettier/prettier': ['error'],

    // allow single expression fragments to reconcile JSX with TypeScript
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // only allow one component per file, add exceptions when using multiple components is appropriate
    'react/no-multi-comp': ['warn', { "ignoreStateless": true }],

    // compare to the root package.json instead of the nearest
    // "import/no-extraneous-dependencies": ["error", {"packageDir": './'}],

    // allow specific common dangles used by other systems
    "no-underscore-dangle": ["error", {"allow": ["__typename"]}],

    // Establish a unique, stable order for imports,
    // so we never have to think about organizing them,
    // with separation between internal and external modules
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal', 'unknown'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      },
    ],

    // defaultProps has been deprecated for React components
    // the correct way to handle these is now defaultArguments
    'react/require-default-props': ['error', { "functions": "defaultArguments" }],

    /* Void is correctly used to identify promises that we are not awaiting */
    'no-void': ["error", { "allowAsStatement": true }],

    /* Allow component creation in props for Native Base conventions */
    "react/no-unstable-nested-components": [
      "error",
      { "allowAsProps": true }
    ]
  },
  "overrides": [
    {
      // enable this rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ]
};
