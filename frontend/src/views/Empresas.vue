<template>
    <q-page class="">
        <main>
            <heroCircle heading1="Empresas" heading2="Recibe más ayuda para combatir la diabetes"
                over-text="Invierte en SugarCoach" color="#00C8DC" button-text="Patrocinanos"
                img_url="../../../contenido/nenes-usando-app.jpg" img_alt="Foto de niño viendo sus datos en SugarCoach">
                <corona color="#00C8DC" />
            </heroCircle>
        </main>
    </q-page>
</template>

<script setup>
import heroCircle from "@/components/reutilizable/ui/heroCircle.vue";
import corona from "@/components/reutilizable/icons/_corona.vue";
// import { useHead } from "@vueuse/head";
// import { defineAsyncComponent } from "vue";
name: "Empresas";
components: [heroCircle, corona];
// useHead({
// 	// Can be static or computed
// 	title:
// 		"SugarCoach - Premium: Accede a más beneficios y funciones por un precio asequible",
// 	link: [
// 		{
// 			rel: "canonical",
// 			href: "https://sugar.coach/premium",
// 		},
// 	],
// 	meta: [
// 		{
// 			name: `description`,
// 			content:
// 				"Mejora tu experiencia con Sugar Coach adquiriendo la versión premium. Accede a beneficios exclusivos para un control aún más efectivo de la diabetes infantil. Descubre todas las funciones y suscríbete hoy.",
// 		},
// 		{
// 			name: `keywords`,
// 			content:
// 				"Versión premium, Beneficios exclusivos, Mejora en el control de la diabetes, Suscripción paga, Becado, Patrocina",
// 		},
// 	],
// });
</script>

<style scoped lang="scss"></style>