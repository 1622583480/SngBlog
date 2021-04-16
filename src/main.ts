import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store"
import "./common/css/common.scss"
import "animate.css"
import local from "./common/lang"
// 入口文件local 语言配置项
const vm = createApp(App)
vm.use(router)
vm.use(local)
vm.use(store)
// vm.use(ElementPlus, {
//     i18n: languageList.global.t
// })
// vm.use(languageList)
vm.mount('#app')
