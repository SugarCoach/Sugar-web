<template>
	<a href="https://play.google.com/store/apps/details?id=com.sugarcoachpremium&hl=es_AR"><img src="../../../../public/contenido/boton-descargar.webp" alt="Descargar Google Play" :width="props.size"></a>
</template>

<script setup>
name: "descargarApp";
const props = defineProps({
    size: {
        type: String,
        default: "150px"
    },
});
</script>

<style scoped lang="scss">
a{
	z-index: 80;
}
</style>
