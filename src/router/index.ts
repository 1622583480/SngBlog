//现在创建router的方式与vue2.x的版本已经很不同了
import { createRouter, createWebHistory } from 'vue-router';
import Home from "../view/home.vue"
import About from "../view/about.vue"

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(), //替代之前的mode，是必须的
    routes
});
export default router;