import { createStore, createLogger } from 'vuex'

// vuex4开启全新创建方式 createStore来决定是否构建一个vuex实例 
// createLogger是vuex中内置监听插件 
// 通过当前是否是生产环境来决定是否开启测试
// 这里同时使用了 vux模块化处理

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger({})] : []
const store = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}
export default createStore({
    plugins,
    ...store,
})
