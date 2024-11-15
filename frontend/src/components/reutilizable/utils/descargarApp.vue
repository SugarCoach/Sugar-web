<template>
	<a href=""><img src="../../../../public/contenido/boton-descargar.webp" alt="Descargar Google Play" :width="props.size"></a>
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
