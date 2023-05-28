import data from "./data.json" assert {type:'json'};
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input : {
        main: 'index.html',
        one: 'index-bootstrap.html',
        two: 'index-materialize.html',
      }
    },
  },
  base : '/responsive_webpages/',
  plugins: [handlebars({
    context : {
      data  
  }
})],
})