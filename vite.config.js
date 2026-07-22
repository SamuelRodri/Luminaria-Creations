import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

function staticNotFoundPage() {
  return {
    name: 'static-not-found-page',
    closeBundle() {
      const outputDirectory = resolve('dist')
      copyFileSync(
        resolve(outputDirectory, 'index.html'),
        resolve(outputDirectory, '404.html'),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), staticNotFoundPage()],
})
