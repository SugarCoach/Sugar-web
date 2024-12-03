import App from "./App.vue";
import router from "./Router.js";
import "./assets/main.scss"
import "bootstrap/dist/js/bootstrap.js"
import { createHead } from "@vueuse/head";  
import { createI18n } from 'vue-i18n';
import messages from './languagePreference';
// Importa la función createApp desde el módulo 'vue'
import { createApp } from "vue";

//import { createGtm } from 'vue-gtm'
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    messages: messages,
    fallbackformat: 'es',
    locale: navigator.language.startsWith('en') ? 'en' : 'es',
})
const head = createHead();
const app = createApp(App);
app.use(head);
app.use(router);
app.use(i18n)
app.mount("#app");