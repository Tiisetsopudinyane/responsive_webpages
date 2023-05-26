import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from "./data.json";

export default defineConfig({
  build: {
    rollupOptions: {
      input : {
        main: 'index.html',
        one: 'one.html',
      }
    },
  },
  base: '/vite-hbs/',
  plugins: [handlebars({
      context : {
        data
      }
  })]
})




