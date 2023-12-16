import { createApp } from 'vue'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router);

app.use(vue3GoogleLogin, {
  clientId: '???'
})

app.mount('#app')