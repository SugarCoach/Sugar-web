<template>
    <main>
        <hero img="contenido/1-Niños-con-SC-edit.jpg" title="SugarCoach" :subheading="$t('home.hero.h2')" :cta="true" />
        <nuestraApp />
        <textLink class="py-5 mt-5 mb-1" :text="$t('home.descargarApp')">
            <descargarApp />
        </textLink>
        <mejorarExperiencia />
        <sectionPremium />
        <comunidad />
        <testimonios />
        <nuestrasNovedades />
        <contactanos />
        <!-- <CookieBanner /> -->
        <!-- @useCookies="cookiesAnswer" -->
    </main>
</template>

<script setup>
    import { useHead } from '@vueuse/head'
    import { defineAsyncComponent, hydrateOnIdle } from 'vue'
    import hero from '../components/reutilizable/ui/hero.vue'
    import nuestraApp from '../components/home/NuestraApp.vue'
    import CookieBanner from '../components/CookieBanner.vue'
    const textLink = defineAsyncComponent(() => import('../components/reutilizable/utils/textYLink.vue'))
    const descargarApp = defineAsyncComponent(() => import('../components/reutilizable/utils/descargarApp.vue'))
    const mejorarExperiencia = defineAsyncComponent(() => import('../components/home/MejorarExperiencia.vue'))
    const sectionPremium = defineAsyncComponent({
        loader: () => import('../components/home/sectionPremium.vue'),
        hydrate: hydrateOnIdle()
    })
    const comunidad = defineAsyncComponent(() => import('../components/home/Comunidad.vue'))
    const nuestrasNovedades = defineAsyncComponent(() => import('../components/home/NuestrasNovedades.vue'))
    const testimonios = defineAsyncComponent(() => import('../components/home/Testimonios.vue'))
    const contactanos = defineAsyncComponent(() => import('../components/home/Contactanos.vue'))

    name: 'Home'
    // const cookiesOn = ref(false)
    // const cookiesAnswer = (useCookies) => {
    //     if (useCookies){
    //         localStorage.setItem('cookiesDecided', true)
    //         localStorage.setItem('cookiesAccepted', true)
    //     }else{
    //         localStorage.setItem('cookiesDecided', true)
    //         localStorage.setItem('cookiesAccepted', false)
    //     }
    //     cookiesOn.value = useCookies
    // }
    useHead({
        // Can be static or computed
        title: 'SugarCoach: La app que te ayuda a cuidar de tu hijo con diabetes',
        link: [
            {
                rel: 'canonical',
                href: 'https://sugar.coach'
            }
        ],
        meta: [
            {
                name: `description`,
                content:
                    'Descubre Sugar Coach, la aplicación gamificada que ayuda a niños con diabetes a controlar sus valores de salud. Descarga la app gratis, explora nuestras redes sociales, contacta con nosotros y mucho más.'
            },
            {
                name: `keywords`,
                content:
                    'SugarCoach, aplicación, Diabetes infantil, Control de glucosa, App gamificada, Descarga gratuita, Versión premium, redes sociales, mysugr, social diabetes'
            }
        ]
    })
</script>
