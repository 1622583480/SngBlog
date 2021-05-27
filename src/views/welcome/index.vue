
<template>
    <div class="fixed">
        <div class="info" :class="Loading"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        const Loading = ref<string>('')
        const router = useRouter()
        onMounted(() => {
            setTimeout(() => {
                Loading.value = 'Load'
            }, 1000);
            setTimeout(() => {
                Loading.value = 'Load Loading'
            }, 2000);
            setTimeout(() => {
                Loading.value = 'Load Loading beforeEnd'
            }, 6000);
            setTimeout(() => {
                Loading.value = 'open'
            }, 6800);
            setTimeout(() => {
                Loading.value = 'open opening'
            }, 7100);
            setTimeout(() => {
                Loading.value = 'open opening openend'
            }, 9100);
            setTimeout(() => {
                router.replace('/Home')
            }, 9500)
        })
        return {
            Loading
        }
    },
})
</script>


<style lang="less" scoped>
.fixed {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #2b303b;
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
        position: absolute;
        transition: 0.8s all;
        width: 120vmax;
        height: 120vmax;
        border-radius: 50%;
        animation-fill-mode: forwards;
    }
    .Load {
        width: 10vmin;
        height: 10vmin;
        border-radius: 6px;
        background: #ffffff;
        box-shadow: 1px 1px 1px #cccccc;
    }
    .beforeEnd {
        background: #ffffff;
        width: 10vmin;
        height: 10vmin;
        // border-radius: 50%;
        animation-play-state: paused !important;
    }
    .End {
        width: 100vw;
        height: 100vh;
        background: #ffffff;
    }
    .Loading {
        animation: whirl 1.35s infinite;
    }
    .open {
        background: #ffffff;
        width: 10vmin;
        height: 10vmin;
        border-radius: 50%;
    }
    .opening {
        // transition: 1.2s all ;
        animation: openss 2s forwards;
        // cubic-bezier(.78,-1.09,.4,1.39)
    }
    .openend {
        background: #ffffff;
        width: 200vmax;
        height: 200vmax;
        border-radius: 50%;
    }
}
@keyframes whirl {
    50% {
        transform: rotate(-90deg) translateY(-50%);
    }
    from {
        transform: rotate(-90deg) translateY(0%);
    }
}
@keyframes openss {
    // to {
    //     transform: translateY(0vh);
    // }
    15% {
        transform: translateY(10vh);
    }
    35% {
        transform: translateY(-20vh);
    }
    70% {
        transform: translateY(46vh);
    }
    100% {
        transform: translateY(30vh);
    }
    // from {
    // }
}
</style>