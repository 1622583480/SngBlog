import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router";
import Home from "../views/Home/index.vue"
const routes: Array<RouteRecordRaw> = [{
  path: '/',
  name: "Home",
  component: Home,
}]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router