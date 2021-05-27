import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "views/Home/index.vue"
import welcome from "views/welcome/index.vue"
import page from "views/page/index.vue"
const routes: Array<RouteRecordRaw> = [{
  path: '/',
  name: "welcome",
  component: welcome,
},
{
  path: '/Home',
  name: "Home",
  component: Home,
  redirect: '/Home/page',
  children: [
    {
      path: "page",
      component: page,
    },
    {
      path: "project",
      component: () => import("views/project/index.vue"),
    },
    {
      path: "article",
      component: () => import("views/article/index.vue"),
    }
  ]
}]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router