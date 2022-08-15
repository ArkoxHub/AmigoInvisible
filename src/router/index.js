import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Gifts from '../views/Gifts.vue'
import WishlistLogin from '../views/WishlistLogin.vue'
import WishlistDashboard from '../views/WishlistDashboard.vue'
import Recovery from '../views/Recovery.vue'
import DrawSuccess from '../views/DrawSuccess.vue'
import DrawError from '../views/DrawError.vue'
import Results from '../views/Results.vue'
import Privacy from '../views/Privacy.vue'
import Cookies from '../views/Cookies.vue'
import Info from '../views/Info.vue'

const routes = [
    {
        path: '/',
        name: 'Amigo invisible online. Generador aleatorio para el sorteo del amigo invisible vía email gratis. Regalos para el amigo invisible.',
        component: Home
    },
    {
        path: '/:catchAll(.*)',
        name: 'Página no encontrada',
        component: NotFound
    },
    {
        path: '/regalos-amigo-invisible',
        name: 'Regalos amigo invisible',
        component: Gifts
    },
    {
        path: '/lista-de-deseos',
        name: 'Lista de deseos amigo invisible',
        component: WishlistLogin
    }, ,
    {
        path: '/lista-de-deseos/:groupId/:participantId',
        name: 'Dashboard lista de deseos amigo invisible',
        component: WishlistDashboard
    },
    {
        path: '/recuperacion-sorteo',
        name: 'Recuperación sorteo amigo invisible',
        component: Recovery
    },
    {
        path: '/sorteo-finalizado',
        name: 'Sorteo amigo invisible finalizado con éxito',
        component: DrawSuccess
    },
    {
        path: '/amigo-invisible',
        name: 'Información amigo invisible',
        component: Info
    },
    {
        path: '/resultado/:id',
        name: 'Resultados amigo invisible',
        component: Results
    },
    {
        path: '/politica-cookies',
        name: 'Cookies',
        component: Cookies
    },
    {
        path: '/politica-privacidad',
        name: 'Privacy',
        component: Privacy
    },
    {
        path: '/error',
        name: 'Error',
        component: DrawError
    },

    {
        path: '/404/:resource',
        name: 'Recurso no encontrado',
        component: NotFound,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
})

export default router;