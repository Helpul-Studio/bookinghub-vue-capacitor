export default [
    { path: '/history', 
    component: () => import('@/views/Payment/History.vue'),
    meta: {
        requireAuth: true
    }  
},
]