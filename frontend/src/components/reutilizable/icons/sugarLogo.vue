<template>
    <img
        src="/contenido/sugar-logo.webp"
        :width="w"
        :height="h"
        alt="Logo de SugarCoach"
        loading="lazy"
        decoding="async"
    />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: Number,
        default: 50
    }
})

const w = computed(() => props.size)
const h = computed(() => Math.round(w.value * 175 / 131))
</script>