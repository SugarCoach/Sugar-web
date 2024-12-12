<template>
    <sugarHeader v-if="!($route.path === '/isa' || $route.path == '/lab')"></sugarHeader>
    <router-view />
    <!--<div class="load d-flex justify-content-center align-items-center" style="width: 100%; height: 100vh;background: linear-gradient(180deg,rgb(83, 222, 230)15%,rgb(2, 20, 43) 100%);">
    <img src="../public/contenido/sugar-logo.png" alt="Logo girando"></div>-->
    <sugarFooter v-if="!($route.path === '/isa' || $route.path == '/lab')"></sugarFooter>3
</template>

<script setup>
    import sugarHeader from './components/sugarHeader.vue'
    import sugarFooter from './components/sugarFooter.vue'
    // import { defineAsyncComponent } from "vue";
    import { computed, reactive, ref } from 'vue'
    import { useHead } from '@vueuse/head'
    name: 'App'
    components: {
        sugarHeader, sugarFooter
    }
    const siteData = reactive({
        title: `SugarCoach`,
        description: `Descubre SugarCoach, la aplicación que transforma el control de la diabetes infantil en una experiencia gamificada. Supervisa de manera sencilla los niveles de glucosa, insulina y carbohidratos de tu hijo. Descarga la versión gratuita o mejora a la premium para acceder a beneficios exclusivos. Patrocina nuestra causa o canjea puntos por tarjetas de regalo. ¡Síguenos en redes sociales y sigamos cuidandonos!`,
        keywords: `Experiencia de juego para control de diabetes, Monitoreo de salud infantil, App de seguimiento de diabetes pediátrica, Registro de niveles de glucosa, SugarCoach, aplicación, Diabetes infantil, App gamificada, Descarga gratuita, Versión premium, Canjea puntos por premios`
    })
    useHead({
        title: computed(() => siteData.title),
        link: [
            {
                rel: 'canonical',
                href: 'https://sugar.coach'
            }
        ],
        meta: [
            {
                name: `description`,
                content: computed(() => siteData.description)
            },
            {
                name: `keywords`,
                content: computed(() => siteData.keywords)
            },
            {
                name: 'theme-color',
                content: '#317EFB'
            }
        ]
    })
</script>

<style lang="scss"></style>
