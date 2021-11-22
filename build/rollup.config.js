import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
export default {
  input: 'src/App.vue',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    vue(),
    css({ output: 'bundle.css' })
  ]
}