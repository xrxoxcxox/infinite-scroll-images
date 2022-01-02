import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'es',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      commonjs(),
      resolve(),
      typescript({
        declarationDir: 'dist',
        exclude: ['src/**/*.stories.tsx'],
      }),
      peerDepsExternal(),
      terser(),
    ],
  },
]
