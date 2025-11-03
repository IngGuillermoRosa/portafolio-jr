
import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import HtmlCssPurgePlugin from 'vite-plugin-purgecss';
import HandlebarsPlugin from 'vite-plugin-handlebars';
import { resolve } from "path";

export default defineConfig({
  appType: "mpa",
  build: {
    minify: true
  },
  plugins: [
    HandlebarsPlugin({
      partialDirectory: resolve(__dirname, 'src', 'partials')
    }),
    ViteMinifyPlugin(),
    HtmlCssPurgePlugin()
  ]
});
