import App from "./App.vue";
import router from "./Router.js";
import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap.bundle.min.js";
import axiosInstance from './plugins/axios';
import { createHead } from "@vueuse/head";
// Importa la función createApp desde el módulo 'vue'
import { createApp } from "vue";
//import { createGtm } from 'vue-gtm'
const head = createHead();
const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;
app.use(head);
app.use(router);
app.mount("#app");