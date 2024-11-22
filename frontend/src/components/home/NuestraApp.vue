<template>
	<section id="nuestra_app" >
		<h2 class="text-center lone-h2">Nuestra App</h2>
		<div class="screens-container h-100 d-flex flex-column align-items-center">
			<funcionalidadApp v-for="pantalla in pantallas" :key="pantalla.id" :celu_url="pantalla.url" :texto="pantalla.texto" :title="pantalla.title" :direction="pantalla.id % 2 == 0 ? 'left' : 'right'" :last="pantalla.id == 4"/>
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
		title:'Una experiencia gamificada para el control de la diabetes tipo 1',
		texto: 'Cada persona define su perfil y su historia clínica así SugarCoach puede comunicarse con su equipo médico y ofrecerle un tratamiento personalizado de la diabetes. En cada comida, el usuario carga valores de glucemia, insulina y carbohidratos. Y lo más importante es que gana premios por cuidarse. SugarCoach se adapta a todos los tratamientos y dispositivos, incluso registra los perfiles de la Bomba Infusora de Insulina.',
		id: 1,
		
	},
	{
		url: "../../contenido/celu2.png",
		title: 'Aprendiendo a cuidarse con una aplicación para diabéticos',
		texto: 'Creamos una herramienta moderna, rápida y amigable diseñada desde el punto de vista del usuario real que permite al usuario crear hábitos saludables. Con explicaciones sencillas para llevar un control eficiente de la diabetes tipo 1 el usuario juega y recibe recompensas del mundo gaming.',
		id: 2,
		
	},
	{
		url: "../../contenido/celu3.png",
		title: 'Manteniendo informado al grupo familiar sobre la diabetes infantil',
		texto: 'Es muy común que la diabetes se presenta en niños desde corta edad. Por lo tanto, el control lo realizan los adultos responsables y pueden llevarlo varios integrantes de la familia. SugarCoach envía mensajes automáticos para alertar un episodio de hipoglucemia o hiperglucemia grave.',
		id: 3,
	},
	{
		url: "../../contenido/celu4.png",
		title: 'Con informes claros y útiles para el médico sobre la hemoglobina glicosilada (HbA1c)',
		texto: 'SugarCoach envía informes regulares al equipo médico para el seguimiento de la diabetes. Además cuenta con gráficos y estadísticas simples y útiles donde contrastar el desarrollo de la glucemia a lo largo del tiempo. Además permite la telemedicina.',
		id: 4,
	}

]
</script>

<style scoped>
.screens-container{
	gap: 90vh;
}
</style>
