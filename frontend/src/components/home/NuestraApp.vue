<template>
	<section id="nuestra_app" >
		<h2 class="text-center lone-h2">Nuestra App</h2>
		<div class="screens-container h-100 d-flex flex-column align-items-center">
			<funcionalidadApp v-for="pantalla in pantallas" :key="pantalla.id" :celu_url="pantalla.url" :direction="pantalla.id % 2 == 0 ? 'left' : 'right'" :last="pantalla.id == 4"/>
		</div>
		
	</section>

</template>

<script setup>
import funcionalidadApp from '../reutilizable/design/funcionalidadApp.vue';
name: "nuestraApp";
components: [
	funcionalidadApp
];

const pantallas = [
	{
		url: "../../contenido/celu1.png",
		id: 1
	},
	{
		url: "../../contenido/celu2.png",
		id: 2
	},
	{
		url: "../../contenido/celu3.png",
		id: 3
	},
	{
		url: "../../contenido/celu4.png",
		id: 4
	}

]
</script>

<style scoped>
.screens-container{
	gap: 90vh;
}
</style>
