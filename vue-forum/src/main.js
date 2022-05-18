import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from '@/components/Home.vue';

const routes = [{ path: '/', name: 'Home', component: Home }];

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

const forumApp = createApp(App);
forumApp.use(routers);
forumApp.mount('#app');
