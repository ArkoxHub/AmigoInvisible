import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Gifts from '../views/Gifts.vue'
import Wishlist from '../views/Wishlist.vue'
import Recovery from '../views/Recovery.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/regalos-amigo-invisible',
        name: 'Gifts',
        component: Gifts
    },
    {
        path: '/lista-de-deseos',
        name: 'Wishlist',
        component: Wishlist
    },
    {
        path: '/recuperacion-sorteo',
        name: 'Recovery',
        component: Recovery
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFound,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;