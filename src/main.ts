import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './global.less'
import core from './core'
const vm = createApp(App)
core(vm)
vm.use(router)
vm.mount('#app')
