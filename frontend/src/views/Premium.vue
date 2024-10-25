<template>
	<q-page id="premium" class="">
		<main></main>
	</q-page>
</template>

<script setup>
import { useHead } from "@vueuse/head";
// import { defineAsyncComponent } from "vue";
name: "Premium";
components: {
};
useHead({
	// Can be static or computed
	title:
		"SugarCoach - Premium: Accede a más beneficios y funciones por un precio asequible",
	link: [
		{
			rel: "canonical",
			href: "https://sugar.coach/premium",
		},
	],
	meta: [
		{
			name: `description`,
			content:
				"Mejora tu experiencia con Sugar Coach adquiriendo la versión premium. Accede a beneficios exclusivos para un control aún más efectivo de la diabetes infantil. Descubre todas las funciones y suscríbete hoy.",
		},
		{
			name: `keywords`,
			content:
				"Versión premium, Beneficios exclusivos, Mejora en el control de la diabetes, Suscripción paga, Becado, Patrocina",
		},
	],
});
</script>

<style scoped lang="scss">
</style>
