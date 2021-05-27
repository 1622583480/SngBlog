import { ref } from "vue";
import { createApp } from 'vue'

export interface factor {
    "max-width"?: String
    "min-width"?: String
}
// type factorvalue = `${'min' & 'max'}-width`
// type arr  =
export interface Media {
    matches: Boolean
    medias: factor
    event?: MediaQueryListEvent | MediaQueryList
}
export interface option {
    Actionkey?: String
    LengthUnit?: String
}
// const arr = ["12","123"]
export default {
    install: (App: ReturnType<typeof createApp>, option: option = {
        Actionkey: "setMedia",
        LengthUnit: "max-width:644px"
    }) => {
        const vuex = App._context.provides.store
        const mqref = ref<MediaQueryList>(window.matchMedia(`(${option.LengthUnit})`));
        function spliceFactor(e: string): factor {
            let medias = e;
            medias = e.replace("(", "");
            medias = medias.replace(")", "");
            const media: string[] = medias.split(":");
            return {
                [media[0]]: media[1],
            };
        }
        const mqCall = function (e: MediaQueryListEvent | MediaQueryList): void {
            const media: Media = {
                matches: e.matches,
                medias: spliceFactor(e.media),
                event: e
            }
            vuex.dispatch(option.Actionkey, media);
        };
        mqref.value.addEventListener("change", mqCall,{passive: true});
        mqCall(mqref.value);
    }
}
