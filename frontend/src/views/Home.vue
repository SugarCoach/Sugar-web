<template>
	<q-page>
		<main>
			<hero></hero>
			<nuestra_app></nuestra_app>
		</main>
	</q-page>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import Hero from "@/components/home/Hero.vue";
import Nuestra_app from "@/components/home/NuestraApp.vue";
// import { defineAsyncComponent } from "vue";

// const Nuestra_app = defineAsyncComponent(() =>
// 	import("../components/home/Nuestra_app.vue")
// );

name: "Home";
components: {
	Hero, Nuestra_app
};
useHead({
	// Can be static or computed
	title: "SugarCoach: La app que te ayuda a cuidar de tu hijo con diabetes",
	link: [
		{
			rel: "canonical",
			href: "https://sugar.coach",
		},
	],
	meta: [
		{
			name: `description`,
			content:
				"Descubre Sugar Coach, la aplicación gamificada que ayuda a niños con diabetes a controlar sus valores de salud. Descarga la app gratis, explora nuestras redes sociales, contacta con nosotros y mucho más.",
		},
		{
			name: `keywords`,
			content:
				"SugarCoach, aplicación, Diabetes infantil, Control de glucosa, App gamificada, Descarga gratuita, Versión premium, redes sociales, mysugr, social diabetes",
		},
	],
});
</script>
