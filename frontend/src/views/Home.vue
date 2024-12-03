<template>
    <q-page>
        <main>
            <hero img="contenido/1-Niños-con-SC.jpg" title="SugarCoach" :subheading="$t('home.hero.h2')" :cta="true" />
            <nuestraApp />
            <textLink class="py-5 mt-5 mb-1" :text="$t('home.descargarApp')">
                <descargarApp />
            </textLink>
            <mejorarExperiencia />
            <sectionPremium />
            <comunidad />
            <testimonios />
            <nuestrasNovedades />
            <contact />
        </main>
    </q-page>
</template>

<script setup>
    import { useHead } from '@vueuse/head'
    import { defineAsyncComponent } from 'vue'
    import hero from '../components/reutilizable/ui/hero.vue'
    import nuestraApp from '../components/home/NuestraApp.vue'
    const textLink = defineAsyncComponent(() => import('../components/reutilizable/utils/textYLink.vue'))
    const descargarApp = defineAsyncComponent(() => import('../components/reutilizable/utils/descargarApp.vue'))
    const mejorarExperiencia = defineAsyncComponent(() => import('../components/home/MejorarExperiencia.vue'))
    const sectionPremium = defineAsyncComponent(() => import('../components/home/sectionPremium.vue'))
    const comunidad = defineAsyncComponent(() => import('../components/home/Comunidad.vue'))
    const nuestrasNovedades = defineAsyncComponent(() => import('../components/home/NuestrasNovedades.vue'))
    const testimonios = defineAsyncComponent(() => import('../components/home/Testimonios.vue'))
    const contact = defineAsyncComponent(() => import('../components/home/Contactanos.vue'))

    name: 'Home'
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
