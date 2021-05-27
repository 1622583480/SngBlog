import { createApp } from "vue"
import router from "@/router"
import store from "@/store"
import 'animate.css'
import '@/global.less'
import '@vant/touch-emulator';
import "default-passive-events";
import { Button, Overlay } from "vant"
export default async function (App: ReturnType<typeof createApp>): Promise<Error | any | Boolean> {
    try {
        App.use(store)
        App.use(router)
        App.use(Overlay)
        App.use(Button)
        const iconfont = import.meta.globEager('../assets/font_img/*/iconfont.css')
        const model = import.meta.glob("./model/*.ts")
        Object.keys(model).forEach(async e => {
            const PlugIn = await model[e]()
            App.use(PlugIn.default)
        })
    } catch (error) {
        return new Error(`${error}use组件失败`)
    }
}