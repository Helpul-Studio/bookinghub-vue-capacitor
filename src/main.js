import { createApp } from 'vue'
import router from './routers/route'
import App from './App.vue'
import './index.css'

const apps = createApp(App)
apps.use(router);
apps.mount('#app')