import { createRouter, createWebHistory} from "vue-router";
import auth from './auth';
import outlet from "./outlet";
import payment from "./payment";

export default createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/', component: () => import('@/views/Landing.vue')},
        ...auth,
        ...outlet,
        ...payment
    ]
});