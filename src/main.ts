import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router) // 使用 router
app.mount('#app') // 掛載到 #app
