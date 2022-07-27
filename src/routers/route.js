import { createRouter, createWebHistory} from "vue-router";
import auth from './auth';
import outlet from "./outlet";
import payment from "./payment";
import { useAuthStore } from "../store/auth-store";



const routes = [
    {path : '/', component: () => import('@/views/Landing.vue')},
    ...auth,
    ...outlet,
    ...payment
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {

    const authStore = useAuthStore();
    const requireAuth = to.matched.some(record => record.meta.requireAuth);
    const visitor = to.matched.some(record => record.meta.visitor);

    if(requireAuth && !authStore.getToken) {
        next('login')
    } else if (visitor && authStore.getToken ){
        next(from);
    } else {
        next();
    }
})

export default router
