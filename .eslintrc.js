module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'eol-last': ['error', 'always'],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'warn'
    }
};
