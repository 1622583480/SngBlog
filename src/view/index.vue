<template>
  <main class="SngBlog_main">
    <Header></Header>
    <router-view class="SngBlog_view"></router-view>
    <Footer></Footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default defineComponent({
  name: "HelloWorld",
  setup: () => {
    return {};
  },
  components: {
    Header,
    Footer,
  },
});
</script>
<style lang="scss" scoped>
.SngBlog_main {
  display: flex;
  flex-direction: column;
}
.SngBlog_view {
  flex: 1;
}
</style>
