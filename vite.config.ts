/*
 * @Description: 
 * @Author: lqx
 * @Date: 2024-10-17 10:10:14
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import monacoEditorPlugin, { IMonacoEditorOpts } from 'vite-plugin-monaco-editor';
import dts from 'vite-plugin-dts'

function loadMonacoEditorPlugin(options: IMonacoEditorOpts) {
  return (monacoEditorPlugin as any)['default'](options)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), loadMonacoEditorPlugin({}), dts({ tsconfigPath: './tsconfig.app.json' })],
  build: {
    outDir: 'lib',
    lib: {
      name: 'react-code-editor',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: format => `index.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['react'],
      output: {
        format: 'esm',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        inlineDynamicImports: false,
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          console.log('chunk :', id);
        }
      }
    }
  },
  server: {
    port: 7744
  }
})
