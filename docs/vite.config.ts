import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: '/sheep-ui',
  plugins: [vueJsx()]
})
