<template>
    <a
        href="https://play.google.com/store/apps/details?id=com.sugarcoachpremium&hl=es_AR"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
        src="/contenido/boton-descargar.webp"
        alt="Descargar Google Play"
        :width="w"
        :height="h"
        loading="lazy"
        decoding="async"
        />
    </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: Number,
        default: 150
    }
})

const w = computed(() => props.size)
const h = computed(() => Math.round((props.size * 191) / 646))
</script>

<style scoped lang="scss">
a {
    z-index: 80;
}
</style>
