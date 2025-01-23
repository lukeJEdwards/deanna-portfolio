import './assets/main.css'

import { createApp } from 'vue'

import { router } from './router'
import App from './App.vue'

import MasonryWall from "@yeger/vue-masonry-wall";
import { createPinia } from "pinia";
import { useStore } from './store/store';


const pinia = createPinia();
const app = createApp(App)

app.use(pinia)

const { load } = useStore()
await load()


app.use(router)

app.use(MasonryWall)
app.mount('#app')
