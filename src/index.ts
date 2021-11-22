import { App } from 'vue'

import LText from './components/LText'

const compoennts = [
  LText
]

const install = (app: App) => {
  compoennts.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LText,
  install
}

export default {
  install
}