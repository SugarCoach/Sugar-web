<template>
	<section class="d-flex flex-column align-items-center">
		<funcionalidadApp v-for="pantalla in pantallas" :key="pantalla.id" :celu_url="pantalla.url"></funcionalidadApp>
	</section>

</template>

<script setup>
import funcionalidadApp from '../funcionalidadApp.vue';
name: "descargar";
components: [
	funcionalidadApp
];

const pantallas = [
	{
		url: "../../contenido/celu2.png",
		id: 0
	},
	{
		url: "../../contenido/celu2.png",
		id: 0
	},
	{
		url: "../../contenido/celu3.png",
		id: 0
	},
	{
		url: "../../contenido/celu4.png",
		id: 0
	}

]
</script>

<style scoped>
h1 {
	background-image: url("../../../public/contenido/celu1.png")
}
</style>
