export default [
    { path: '/payment', component: () => import('@/views/Payment/Payment.vue') },
    { path: '/invoice', component: () => import('@/views/Payment/Invoice.vue') },
    { path: '/history', component: () => import('@/views/Payment/History.vue') },
]