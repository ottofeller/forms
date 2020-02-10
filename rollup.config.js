import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// eslint-disable-next-line import/no-default-export
export default {
  external: ['formik', 'react', 'react-dom'],
  input: 'index.tsx',
  output: {
    file: pkg.main,
    format: 'cjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      formik: 'Formik'
    },
  },
  plugins: [
    commonjs({
      include: ['node_modules/**'],

      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/scheduler/index.js': ['LowPriority', 'unstable_runWithPriority'],
      }
    }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true,
    }),
  ],
};