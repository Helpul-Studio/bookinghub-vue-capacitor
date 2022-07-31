export default [
    { 
    path: '/outlet', 
    component: () => import('@/views/outlet/Outlet.vue'),
    meta: {
        requireAuth: true
    }     
    },
]