<template>
	<q-page class="">
		<div class="layout d-flex flex-column">
			<div class="filtro pb-1" style="padding-top: 60px; flex: 1;">
				<form id="form" class="form form_delete bg-dark-subtle bg-gradient">
					<h2>
						DELETE YOUR ACCOUNT
					</h2>
					<input type="text" name="username" placeholder="Your username" required />
					<input type="email" name="email" placeholder="Your email" required />
					<button type="submit" class="mb-5">
						Send Message
					</button>
					<div class="info" style="">
						<span class="fa fa-envelope-o "></span>Contact us: admin.team@sugar.coach
					</div>
				</form>
				<a id="trick" href="" class="opacity-0">mail</a>
			</div>
		</div>





		
		<a href="https://play.google.com/store/apps/details?id=com.sugarcoachpremium&hl=es_AR&gl=US&pli=1"></a>
		<img src="../../public/contenido/boton-descargar.webp" alt="Descargar SugarCoach">
	</q-page>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
name: 'Delete Account'
// Define a route for sending emails
onMounted(() => {
	const $form = document.querySelector("#form");
	$form.addEventListener("submit", event => {
		event.preventDefault();
		const formdata = new FormData($form);
		const data = Object.fromEntries(formdata);
		console.log(`formdata:\n${JSON.stringify(data)}`);

		axios.post('https://sugar.coach/apisubmit', data).then(response => {
			console.log("Recurso creado con éxito:", response.data);
		}).catch(error => {
			console.error("Error al crear el recurso: ", error);
		});
	});
})
</script>

<style lang="scss">

</style>