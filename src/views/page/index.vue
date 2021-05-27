<template>
    <nav class="align-center SngBlog-main_nav">
        <div class="SngBlog-main_nav_left columns-center grow-1">
            <div>
                <h1 style="font-size:11vmin">SngBlog</h1>
                <div style="font-size:1vmin;text-align:start;width:100%;">一个正在努力的前端开发者</div>
            </div>
            <!-- <i class="iconfont icon-github"></i> -->
        </div>
        <div class="grow-1 end" v-if="!readonlyObject.matches">
            <img src="../../assets/img/Doge.gif" alt="Doge无了~" />
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getTest1 } from "@/api"
export default defineComponent({
    props: ['readonlyObject'],
    setup() {
        getTest1().then(res => {
            console.log(res, '返回值')
        })
        return {

        }
    }
})
</script>

<style lang="less" scoped>
.SngBlog-main_nav {
    padding: 20vmin 0;
    .SngBlog-main_nav_Left {
        text-align: center;
    }
}
</style>