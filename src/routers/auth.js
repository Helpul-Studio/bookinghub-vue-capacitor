export default [
    { path: '/login', component: () => import('@/views/auth/Login.vue') },
    { path: '/register', component: () => import('@/views/auth/Register.vue') },
    { path: '/profile', component: () => import('@/views/auth/Profile.vue') },
]