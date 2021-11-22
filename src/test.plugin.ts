import { App } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const plugins = {
  install: (app: App) => {
    app.config.globalProperties.$echo = () => {
      console.log('a plugin')
    }
    app.component('hello-world', HelloWorld)
    app.provide('test', { message: 'from plguin'})
  }
  
}

export default plugins
