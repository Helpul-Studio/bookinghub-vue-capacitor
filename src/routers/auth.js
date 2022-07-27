export default [

    { 
        path: '/login', 
        component: () => import('@/views/auth/Login.vue'),
        meta: {
            visitor: true
        }
    },

    { 
        path: '/register', 
        component: () => import('@/views/auth/Register.vue'),    
        meta: {
            visitor: true
        } 
    },

    { 
        path: '/profile', 
        component: () => import('@/views/auth/Profile.vue'),
        meta: {
            requireAuth: true
        } 
    },
]