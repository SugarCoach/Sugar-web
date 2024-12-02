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
            <contacto />
        </main>
    </q-page>
</template>

<script setup>
    // import { useHead } from "@vueuse/head";
    import hero from '../components/reutilizable/ui/hero.vue'
    import nuestraApp from '../components/home/NuestraApp.vue'
    import textLink from '../components/reutilizable/utils/textYLink.vue'
    import mejorarExperiencia from '../components/home/MejorarExperiencia.vue'
    import sectionPremium from '../components/home/sectionPremium.vue'
    import descargarApp from '../components/reutilizable/utils/descargarApp.vue'
    import comunidad from '../components/home/Comunidad.vue'
    import nuestrasNovedades from '../components/home/NuestrasNovedades.vue'
    import testimonios from '../components/home/Testimonios.vue'
    import contacto from '../components/home/Contactanos.vue'
    import formulario from '../components/reutilizable/design/formulario.vue'
    // import { defineAsyncComponent } from "vue";

    // const Nuestra_app = defineAsyncComponent(() =>
    // 	import("../components/home/Nuestra_app.vue")
    // );

    name: 'Home'
    components: {
        hero, nuestraApp, textLink, mejorarExperiencia, sectionPremium, descargarApp, comunidad, testimonios, nuestrasNovedades, formulario, contacto
    }
    // useHead({
    // 	// Can be static or computed
    // 	title: "SugarCoach: La app que te ayuda a cuidar de tu hijo con diabetes",
    // 	link: [
    // 		{
    // 			rel: "canonical",
    // 			href: "https://sugar.coach",
    // 		},
    // 	],
    // 	meta: [
    // 		{
    // 			name: `description`,
    // 			content:
    // 				"Descubre Sugar Coach, la aplicación gamificada que ayuda a niños con diabetes a controlar sus valores de salud. Descarga la app gratis, explora nuestras redes sociales, contacta con nosotros y mucho más.",
    // 		},
    // 		{
    // 			name: `keywords`,
    // 			content:
    // 				"SugarCoach, aplicación, Diabetes infantil, Control de glucosa, App gamificada, Descarga gratuita, Versión premium, redes sociales, mysugr, social diabetes",
    // 		},
    // 	],
    // });
</script>
