import './assets/main.css'

import { createApp } from 'vue'

import { router } from './router'
import App from './App.vue'

import { createPinia } from "pinia";
import { useStore } from './store/store';


const pinia = createPinia();
const app = createApp(App)

app.use(pinia)

const { get_nav_routes } = useStore();
await get_nav_routes();


app.use(router)
app.mount('#app')
