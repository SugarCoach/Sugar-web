<template>
	<q-page class="">
		<main>
			<heroCircle heading1="Premium" heading2="Recibe más ayuda para combatir la diabetes" color="#FFB800"
				over-text="Mejora tu salud con Premium" button-text="Obtén Premium" button_url="#planes-premium"
				img_url="../../../contenido/7-Niños-con-SC.webp" img_alt="Foto de niño ganando puntos en SugarCoach"/>
			<imgsYtextos title="Beneficios" :imagenesYtextos="imagenesYTextos" color="#FFB800">
				<iconTrofeo color="white" size="23px"/>
			</imgsYtextos>
			<planes :paquetesUsuarios="paquetes" />
			<premios />
			<faqs :preguntas="preguntas"/>
			<contactanos />
		</main>
	</q-page>
</template>

<script setup>
import heroCircle from "@/components/reutilizable/ui/heroCircle.vue"
import { useHead } from "@vueuse/head";
import imgsYtextos from "@/components/reutilizable/ui/imgsYtextos.vue";
import planes from "@/components/premium/Planes.vue";
import premios from "@/components/premium/Premios.vue";
import contactanos from "@/components/home/Contactanos.vue";
import faqs from "@/components/reutilizable/ui/preguntasFrecuentes.vue";
import iconTrofeo from "@/components/reutilizable/icons/_trofeo.vue";
// import { defineAsyncComponent } from "vue";
name: "Premium";
components: [heroCircle, iconTrofeo, imgsYtextos, planes, premios, faqs, contactanos];
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
		img_url: 'contenido/niños-con-app.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Parenting',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 0
	},
	{
		img_url: '../../contenido/telemedicina_edit.png',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Telemedicina',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 1
	},
	{
		img_url: '../../contenido/alertas_geolocalizacion_edit.png',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Alertas de emergencia',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 2
	},
	{
		img_url: 'cards',
		img_alt: ['Gift card de Fornite', 'Gift card de Minicraft', 'Gift card de Xbox'],
		title: '¡Canjea tus puntos!',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: 'Premios',
		cta_url: '#premios',
		id: 3
	},
];

const paquetes = [
	{
		title: 'Becado',
		price: 'Free',
		texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
		btnText: 'Obtenlo gratis',
		beneficios: ['Licencia Premium', 'Parenting', 'Telemedicina', 'Alertas con geolocalización'],
		mensual: false,
		id: 0,
	},
	{
		title: 'Clasico',
		price: '$2.99',
		texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
		btnText: 'Pasate a premium',
		beneficios: ['Apoyar a SugarCoach', 'Licencia Premium', 'Parenting', 'Telemedicina', 'Alertas con geolocalización','Canjear puntos por premios', 'Serán los primeros en usar la conexión automática con dispositivos, Glucómetros, CMG, Bombas, etc'],
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
