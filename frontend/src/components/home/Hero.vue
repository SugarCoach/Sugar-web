<template>
    <div class="hero text-white space-left position-relative">
        <div class="position-absolute w-100 h-100 top-0 start-0 filtro"></div>
        <div class="d-flex flex-column gap-2 mb-5 h-50 justify-content-end header">
            <h1>Heading</h1>
            <h2>Subheading</h2>
        </div>
        <div class="d-flex justify-content-start w-25 align-items-center">
            <descargar></descargar>
        </div>
    </div>
</template>

<script setup>
import descargar from "../reutilizable/descargarApp.vue"
name: 'Hero';
components: [
    descargar
]
</script>

<style scoped>
.hero {
    background-image: url("../../../public/contenido/1-Niños-con-SC.webp");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    height: calc(100vh - (80.141px + 1.6250rem));
    align-content: center;
}
.filtro {
    background: linear-gradient(0deg ,rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0)), 0%, 100%;
}
.header{
    text-shadow: 0 0 10px black;
}
</style>