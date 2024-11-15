<template>
	<q-page class="">
		<main>
			<heroCircle heading1="Premium" heading2="Recibe más ayuda para combatir la diabetes"
				over-text="Mejora tu salud con Premium" button-text="Obtén Premium"
				img_url="../../../contenido/7-Niños-con-SC.webp" img_alt="Foto de niño ganando puntos en SugarCoach">
				<corona />
			</heroCircle>
			<imgsYtextos title="Beneficios" :imagenesYtextos="imagenesYTextos" />
			<planes :paquetes-usuarios="paquetes" />
			<premios />
			<faqs :preguntas="preguntas"/>
			<contactanos />
		</main>
	</q-page>
</template>

<script setup>
import heroCircle from "@/components/reutilizable/ui/heroCircle.vue"
import corona from "@/components/reutilizable/icons/_corona.vue";
import { useHead } from "@vueuse/head";
import imgsYtextos from "@/components/reutilizable/ui/imgsYtextos.vue";
import planes from "@/components/premium/Planes.vue";
import premios from "@/components/premium/Premios.vue";
import contactanos from "@/components/home/Contactanos.vue";
import faqs from "@/components/reutilizable/ui/preguntasFrecuentes.vue";
// import { defineAsyncComponent } from "vue";
name: "Premium";
components: [heroCircle, corona, imgsYtextos, planes, premios, faqs, contactanos];
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
const imagenesYTextos = [
	{
		img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'El Equipazo',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 0
	},
	{
		img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'El Equipo',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 1
	},
	{
		img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'El Equipo',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 2
	},
	{
		img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'El Equipo',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: 'Premios',
		cta_url: '/#premios',
		id: 3
	},
];

const paquetes = [
	{
		title: 'Becado',
		price: 'Free',
		texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
		btnText: 'Obtenlo gratis',
		beneficios: ['lorem', 'ipsum', 'dolor', 'sit amet', 'consectetur adipis', 'sed do eiusmod tempor incid'],
		mensual: false,
		id: 0,
	},
	{
		title: 'Clasico',
		price: '$2.99',
		texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
		btnText: 'Pasate a premium',
		beneficios: ['lorem', 'ipsum', 'dolor', 'sit amet', 'consectetur adipis', 'sed do eiusmod tempor incid'],
		mensual: true,
		id: 1,
	}
];
const preguntas = [
	{
		pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
		respuesta: 'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
		identificador: "One",
		id: 0
	},
	{
		pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
		respuesta: 'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
		identificado: "Two",
		id: 1
	},
	{
		pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
		respuesta: 'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
		identificador: "Three",
		id: 2
	},
	{
		pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
		respuesta: 'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
		identificador: "Four",
		id: 3
	}
]
</script>

<style scoped lang="scss"></style>
