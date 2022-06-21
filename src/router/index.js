import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Gifts from '../views/Gifts.vue'
import Wishlist from '../views/Wishlist.vue'
import Recovery from '../views/Recovery.vue'
import DrawSuccess from '../views/DrawSuccess.vue'
import DrawError from '../views/DrawError.vue'
import Results from '../views/Results.vue'
import Cookies from '../views/Cookies.vue'
import Privacy from '../views/Privacy.vue'

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
        path: '/sorteo-finalizado',
        name: 'DrawSuccess',
        component: DrawSuccess
    },
    {
        path: '/resultado/:id',
        name: 'Results',
        component: Results
    },
    {
        path: '/cookies',
        name: 'Cookies',
        component: Cookies
    },
    {
        path: '/privacidad',
        name: 'Privacy',
        component: Privacy
    },
    {
        path: '/error',
        name: 'DrawError',
        component: DrawError
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