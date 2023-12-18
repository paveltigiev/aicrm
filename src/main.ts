import { createApp } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('./views/LandingPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '???'
})
app.mount('#app')