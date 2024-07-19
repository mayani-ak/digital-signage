import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Content from './components/Content.vue';

const routes = [
    {
    path: '/',
    name: 'home',
    component: Home,
    },
    {
    path: '/register',
    name: 'register',
    component: Register,
    },
    {
    path: '/login',
    name: 'login',
    component: Login,
    },
    {
    path: '/content',
    name: 'content',
    component: Content,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;