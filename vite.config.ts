import { resolve } from 'path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

import postcss from './postcss.config'

// https://vitejs.dev/config/
const CONFIGS = defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['./src/**/*.ts', './src/**/*.tsx']
    })
  ],
  resolve: {
    alias: [
      { find: '@app', replacement: resolve(__dirname, 'src/app') },
      { find: '@data', replacement: resolve(__dirname, 'src/data') },
      { find: '@domain', replacement: resolve(__dirname, 'src/domain') }
    ]
  },
  css: { postcss }
})

export default CONFIGS