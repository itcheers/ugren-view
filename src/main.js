import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      // { path: '/', component: App },
      // { path: '/home', component: Home },
      // { path: '/login', component: Login },
    ]
  }
)

createApp(App).use(router).mount('#app')
