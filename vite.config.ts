import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/assets/styles/index.scss";
          @import "/src/assets/styles/_reset.css";
          @import "/src/assets/styles/_global.scss";
          @import "/src/assets/styles/_fonts.scss";
        `
      }
    }
  }
})
