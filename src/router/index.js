import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'home',
        },
        {
            path: '/usual-example', name: 'usual-example', component: () => import('../views/UsualEx.vue'),
        },
    ]
})



export default router