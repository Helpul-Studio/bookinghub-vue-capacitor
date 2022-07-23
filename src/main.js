import { createApp } from 'vue'
import router from './routers/route'
import App from './App.vue'
import {createPinia} from 'pinia'
import './index.css'
import { SetupCalendar } from 'v-calendar';
import 'v-calendar/dist/style.css';


const apps = createApp(App)
apps.use(router);
apps.use(SetupCalendar, {});
apps.use(createPinia());
apps.mount('#app');