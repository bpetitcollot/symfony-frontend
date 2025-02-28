import { dirname, resolve} from 'node:path'
import { fileURLToPath} from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig
({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/hello.js'),
      name: 'Hello',
      fileName: 'hello',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react()],
})
