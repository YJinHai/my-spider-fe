import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/blog/list.vue')
        }
    ]
});

export default router;
