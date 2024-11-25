<template>
    <q-page class="">
        <main>
            <heroCircle heading1="Empresas" heading2="Recibe más ayuda para combatir la diabetes"
                over-text="Invierte en SugarCoach" color="#00C8DC" button-text="Patrocinanos" button_url="#planes-empresas"
                img_url="../../../contenido/nenes-usando-app.jpg" img_alt="Foto de niño viendo sus datos en SugarCoach"/>
            <ImgsYtextos title="Beneficios" :imagenesYtextos="imagenesYTextos" color="#00C8DC">
				<iconEdificio color="white" size="23px"/>
			</ImgsYtextos>
            <PlanesEmpresas :paquetes="paquetes" color="#00C8DC"/>
            <faqs :preguntas="preguntas"/>
            <Contactanos/>
        </main>
    </q-page>
</template>

<script setup>
import heroCircle from "@/components/reutilizable/ui/heroCircle.vue";
import corona from "@/components/reutilizable/icons/_corona.vue";
import ImgsYtextos from "@/components/reutilizable/ui/imgsYtextos.vue";
import PlanesEmpresas from "@/components/empresas/PlanesEmpresas.vue";
import faqs from "@/components/reutilizable/ui/preguntasFrecuentes.vue";
import Contactanos from "@/components/home/Contactanos.vue";
import iconEdificio from "@/components/reutilizable/icons/_edificio.vue";
// import { useHead } from "@vueuse/head";
// import { defineAsyncComponent } from "vue";
name: "Empresas";
components: [heroCircle, iconEdificio, ImgsYtextos, PlanesEmpresas, faqs, Contactanos];
// useHead({
// 	// Can be static or computed
// 	title:
// 		"SugarCoach - Premium: Accede a más beneficios y funciones por un precio asequible",
// 	link: [
// 		{
// 			rel: "canonical",
// 			href: "https://sugar.coach/premium",
// 		},
// 	],
// 	meta: [
// 		{
// 			name: `description`,
// 			content:
// 				"Mejora tu experiencia con Sugar Coach adquiriendo la versión premium. Accede a beneficios exclusivos para un control aún más efectivo de la diabetes infantil. Descubre todas las funciones y suscríbete hoy.",
// 		},
// 		{
// 			name: `keywords`,
// 			content:
// 				"Versión premium, Beneficios exclusivos, Mejora en el control de la diabetes, Suscripción paga, Becado, Patrocina",
// 		},
// 	],
// });
const imagenesYTextos = [
	{
		img_url: 'contenido/8-NiñosconSC.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Distribuir licencias Premium',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 0
	},
	{
		img_url: 'contenido/objetivos.png',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Lista de sponsors',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 1
	},
	{
		img_url: 'contenido/integrantes/6.Team.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Verse en articulos y notas',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: '',
		cta_url: '',
		id: 2
	},
	{
		img_url: 'contenido/integrantes/11.Team.jpg',
		img_alt: 'Equipo de SugarCoach trabajando',
		title: 'Apoyar a SugarCoach',
		texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
		cta: 'Ver los paquetes',
		cta_url: '#planes-empresas',
		id: 3
	},
];
const paquetes = [
	{
		title: 'Basico',
		price: '$25',
		btnText: 'Comprar',
        btnUrl: 'https://fundrazr.com/campaigns/e2TMf2/pay',
		beneficios: ['lorem', 'ipsum', 'dolor', 'sit amet', 'consectetur adipis', 'sed do eiusmod tempor incid'],
		mensual: false,
		id: 0,
	},
	{
		title: 'Premium',
		price: '$250',
		btnText: 'Comprar',
        btnUrl: 'https://fundrazr.com/campaigns/e2TMf2/pay',
		beneficios: ['lorem', 'ipsum', 'dolor', 'sit amet', 'consectetur adipis', 'sed do eiusmod tempor incid'],
		mensual: false,
		id: 1,
	},
    {
		title: 'Socios',
		price: 'Contactanos',
		btnText: 'Contactar',
        btnUrl: 'modal',
		beneficios: ['lorem', 'ipsum', 'dolor', 'sit amet', 'consectetur adipis', 'sed do eiusmod tempor incid'],
		mensual: false,
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