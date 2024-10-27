import App from "./App.vue";
import router from "./Router.js";
import "@/assets/main.scss"
import "bootstrap/dist/js/bootstrap.js"
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