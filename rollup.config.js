import babel from '@rollup/plugin-babel';
import { resolve } from 'path'
import { config } from 'dotenv';

config();

export default {
  input: 'src/index.js',
  output: {
    file: resolve(__dirname, './dist/picturesToChannels.js'),
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};