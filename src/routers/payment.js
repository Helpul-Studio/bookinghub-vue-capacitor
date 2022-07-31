export default [
    { 
        path: '/history', 
        component: () => import('@/views/Payment/History.vue'),
        meta: {
            requireAuth: true
        }  
    },
    { 
        path: '/invoice', 
        component: () => import('@/views/Payment/Invoice.vue'),
        meta: {
            requireAuth: true
        }   
    },
]