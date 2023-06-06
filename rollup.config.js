const terser = require('@rollup/plugin-terser');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
    input: 'dist/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'index'
    },
    plugins: [terser(), resolve()]
};