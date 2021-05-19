import { createApp } from "vue"
import router from "@/router"
export default async function (App: ReturnType<typeof createApp>): Promise<Error | any> {
    // return new Promise((resolve, reject) => {
    App.use(router)
    try {

    } catch (error) {
        return new Error(`${error}use组件失败`)
    }
    // })
}