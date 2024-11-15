<template>
	<q-page class="">
		<main>
			<form
				class="m-auto m-0 d-flex flex-column align-items-center p-4 rounded-5 position-relative">
				<h1 class="h3 text-center mb-3 fw-normal">BORRAR TU CUENTA</h1>
				<div class="d-flex flex-column gap-3 w-100 mb-4">
					<div v-for="item in inputs" :key="item.id" class="w-100">
						<label :for="item.for" class="mb-1 lead fw-normal">{{ item.label }}</label>
						<input class="form-control message rounded-4 border border-1 border-black border-opacity-50"
							:name="item.for" :type="item.type" :placeholder="item.placeholder">
					</div>
				</div>

				<button type="submit" class="mb-5 btn py-2 mt-3">Borrar cuenta</button>
				<div class="info position-absolute p-4 rounded-4 text-white" style="">
					<span class="">Contactanos: admin.team@sugar.coach</span>
				</div>
			</form>
		</main>

	</q-page>
</template>

<script setup>
// import { onMounted } from 'vue';
// import axios from 'axios';
name: 'deleteAccount'
// Define a route for sending emails

// onMounted(() => {
// 	const $form = document.querySelector("#form");
// 	$form.addEventListener("submit", event => {
// 		event.preventDefault();
// 		const formdata = new FormData($form);
// 		const data = Object.fromEntries(formdata);
// 		console.log(`formdata:\n${JSON.stringify(data)}`);

// 		axios.post('https://sugar.coach/apisubmit', data).then(response => {
// 			console.log("Recurso creado con éxito:", response.data);
// 		}).catch(error => {
// 			console.error("Error al crear el recurso: ", error);
// 		});
// 	});
// })

const inputs = [
	{
		type: 'text',
		label: 'Nombre de usuario',
		for: 'name',
		placeholder: 'Usuario',
		id: 0
	},
	{
		type: 'email',
		label: 'Email',
		for: 'email',
		placeholder: 'usuario@gmail.com',
		id: 1
	}
]
</script>

<style scoped lang="scss">
main {
	margin-top: 100px !important;
	margin-bottom: 100px !important;

	form {
		color: #444444;
		background-color: #F5F5F5;
		width: 380px;
		box-shadow:
			4px 4px 30px -5px rgba(0, 0, 0, 0.2),
			3px 3px 5px rgba(0, 0, 0, 0.05);

		input {
			height: 42px;
		}

		button {
			width: 190px;
			color: #FEE9E7;
			background-color: #444444;
			transition: .2s;
			&:hover{
				background-color: #616161;
				color: #FEE9E7;
			}
		}

		.info {
			box-shadow: -4px -4px 15px -9px rgba(0, 0, 0, 0.7);
			background-color: #A8A8A8;
			bottom: calc((-1)*(7px + 1.5rem));
			right: -40px;
		}
	}
}
</style>