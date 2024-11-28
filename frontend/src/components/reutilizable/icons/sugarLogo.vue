<template>
    <img src="../../../../contenido/sugar-logo.webp" :width="props.size" alt="Logo de SugarCoach">
</template>

<script setup>
name: "sugarLogo";
const props = defineProps({
    size: {
        type: String,
        default: "50px"
    }
});
</script>