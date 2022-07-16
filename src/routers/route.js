import { createRouter, createWebHistory} from "vue-router";
import auth from './auth';

export default createRouter({
    history: createWebHistory(),
    routes : [
        ...auth
    ]
});