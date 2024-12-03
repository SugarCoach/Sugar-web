<template>
    <q-page class="">
        <main class="m-0">
            <h1 class="text-center mb-5">Contactanos</h1>
            <formulario class="form m-auto m-0 " />
        </main>
    </q-page>
</template>

<script setup>
import formulario from '../components/reutilizable/design/formulario.vue';
import { useHead } from "@vueuse/head";
name: 'contacto';
components: [formulario];
useHead({
	// Can be static or computed
	title:
		"SugarCoach - Contacto: Comunicate con el equipo de SugarCoach",
	link: [
		{
			rel: "canonical",
			href: "https://sugar.coach/contacto",
		},
	],
	meta: [
		{
			name: `description`,
			content:
				"Contactate con el equipo de SugarCoach, resuelve tus dudas, envia propuestas, pide ayuda",
		},
		{
			name: `keywords`,
			content:
				"Contacto, Dudas, Enviar propuestas, Ayuda, Soporte",
		},
	],
});
</script>

<style scoped lang="scss">
main {
    margin-bottom: 150px !important;
    margin-top: 100px !important;
}
</style>
