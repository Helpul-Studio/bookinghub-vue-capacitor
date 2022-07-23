export default [
    { path: '/date', component: () => import('@/views/outlet/Date.vue') },
    { path: '/outlets', component: () => import('@/views/outlet/Outlet.vue') },
    { path: '/detail/outlet', component: () => import('@/views/outlet/Detail.vue') },

]