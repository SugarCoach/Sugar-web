<template>
    <div class="hero text-white position-relative">
        <div class="d-flex flex-column gap-2 mb-5 h-50 justify-content-end header position-relative"
            :class="`text-${props.justify}`">
            <h1>{{ props.title }}</h1>
            <h2 class="mb-0">{{ props.subheading }}</h2>
        </div>
        <div class="position-absolute w-100 h-100 top-0 start-0 filtro"></div>

        <div class="d-flex justify-content-start w-25 align-items-center" v-if="props.cta">
            <descargar></descargar>
        </div>
    </div>
</template>

<script setup>
import descargar from "../utils/descargarApp.vue"
import { onMounted } from 'vue'
name: 'Hero';
components: [
    descargar
]
const props = defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    subheading: {
        type: String
    },
    justify: {
        type: String,
        default: 'start'
    },
    cta: {
        type: Boolean,
        default: false
    }
});
onMounted(() => {
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `url(${props.img})`;
})
</script>

<style scoped>

.hero {
    padding: 0 10vw 0 10vw;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    width: 100%;
    height: calc(100vh - (80.141px + 1.6250rem));
    align-content: center;
}

.filtro {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 0%, 100%;
    z-index: 50;
}

.header {
    text-shadow: 0 0 10px black;
    z-index: 100;

    h2 {
        font-size: 2rem !important;
    }
}


</style>