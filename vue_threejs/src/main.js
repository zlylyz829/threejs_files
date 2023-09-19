import './assets/main.css'
import router from './router/index'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

// app.use(router).mount('#app');
createApp(App).use(router).mount('#app');
