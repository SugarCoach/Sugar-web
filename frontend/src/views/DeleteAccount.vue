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
		
		axios.post('https://sugar.coach/submit', data).then(response => {
			console.log("Recurso creado con éxito:", response.data);
		}).catch(error => {
			console.error("Error al crear el recurso: ", error);
		});
	// 	// fetch('/', {
	// 	// 	method: 'POST',
	// 	// 	headers: {
	// 	// 		'Content-Type': 'application/json'
	// 	// 	},
	// 	// 	body: JSON.stringify(data)
	// 	// })
	// 	// 	.then(response => response.json())
	// 	// 	.then(data => console.log(data))
	// 	// 	.catch(error => console.error(error));
	});
})

</script>

<style>
.form_delete {
	width: 340px;
	height: auto;
	background: #e6e6e6;
	border-radius: 8px;
	box-shadow: 0 0 40px -10px #000;
	margin: calc(50vh - 220px) auto;
	padding: 20px 30px;
	max-width: calc(100vw - 40px);
	font-family: 'Montserrat', sans-serif;
	position: relative
}

.form_delete h2 {
	margin: 10px 0;
	padding-bottom: 10px;
	width: 180px;
	color: #78788c;
	border-bottom: 3px solid #78788c
}

.form_delete input {
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	background: none;
	outline: none;
	resize: none;
	border: 0;
	font-family: 'Montserrat', sans-serif;
	transition: all .3s;
	border-bottom: 2px solid #bebed2
}

.form_delete button {
	padding: 8px 12px;
	margin: 8px 0 0;
	font-family: 'Montserrat', sans-serif;
	border: 2px solid #78788c;
	background: 0;
	color: #5a5a6e;
	cursor: pointer;
	transition: all .3s;
}

.form_delete button:hover {
	background: #78788c;
	color: #fff
}

.info {
	position: absolute;
	bottom: -15px;
	right: -20px;
	background: #50505a;
	color: #fff;
	width: 320px;
	padding: 16px 4px 16px 0;
	border-radius: 6px;
	font-size: 13px;
	box-shadow: 10px 10px 40px -14px #000
}

.info span {
	margin: 0 5px 0 15px;
}
</style>