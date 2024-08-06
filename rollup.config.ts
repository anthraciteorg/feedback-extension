import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import template from 'rollup-plugin-html-literals';

const config: RollupOptions = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js'
    },
    external: ['/script.js'],
    plugins: [
        replace({
            preventAssignment: true,
            'Reflect.decorate': 'undefined',
            // Rewrite to reference SillyTavern import
            'from \'silly\'': 'from \'/script.js\'',
            delimiters: ['', '']
        }),
        resolve(),
        template({
            options: {
                minifyOptions: {
                    minifyCSS: false,
                    collapseWhitespace: false
                }
            }
        }),
        typescript(),
        terser({
            ecma: 2020,
            module: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            },
        })
    ]
};

export default config;