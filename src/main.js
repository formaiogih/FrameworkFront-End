import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '../routes';

// Criar a instância do roteador
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Criar a instância do aplicativo Vue
const app = createApp(App);

// Usar o roteador
app.use(router);

// Montar o aplicativo
app.mount('#app');