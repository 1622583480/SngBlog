<template>
  <fold></fold>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { WOW } from "wowjs";
import fold from "./view/index.vue";
export default defineComponent({
  name: "App",
  components: {
    fold,
  },
  setup() {
    provide(
      "wow",
      new WOW({
        boxClass: "wow", //需要执行动画元素的Class
        animateClass: "animated", //animation.css动画的Class
        offset: 0, //距离可视区域多少开始执行动画
        mobile: true, //是否在移动设备执行动画
        live: true, //异步加载的内容是否有效
      })
    );
  },
});
</script>

<style lang="scss">
</style>