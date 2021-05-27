import { createApp } from 'vue'
import App from './App.vue'
import core from './core'
const vm = createApp(App)
core(vm)
vm.mount('#app')

