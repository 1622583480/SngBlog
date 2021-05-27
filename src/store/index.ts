import { createStore, StoreOptions } from "vuex"
import {
    Media,
} from "@/core/model/Media"
// export interface factor {
//     [propName: string]: String
// }
// export interface Media {
//     matches: Boolean,
//     medias: factor
// }
export interface storeUse {
    Media: Media
}

const storeData: StoreOptions<storeUse> = {
    state: {
        Media: {
            medias: {
                'max-width': '644px'
            },
            matches: false,
        }
    },
    mutations: {
        SETMEDIA(state, data: Media): void {
            state.Media = data
        }
    },
    actions: {
        setMedia({ commit }, data: Media): void {
            commit("SETMEDIA", data)
        }
    },
    getters: {
        Media: (state): Media => state.Media
    }
}
const store = createStore(storeData)

export default store