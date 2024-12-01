import './assets/main.css'

import { createApp } from 'vue'

import {router} from './router'
import App from './App.vue'

import MasonryWall from "@yeger/vue-masonry-wall";





const app = createApp(App)

app.use(MasonryWall)
app.use(router)

app.mount('#app')
