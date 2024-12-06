<template>
    <div class="d-flex flex-column align-items-center gap-2 fuerte">
        <slot></slot>
        <div class="d-flex flex-column align-items-center">
            <h3>{{ props.title }}</h3>
            <p class="w-75" v-html="purifyHTML(props.texto)"></p>
        </div>
    </div>
</template>

<script setup>
import DOMPurify from 'dompurify'
    name: 'descargarApp'
    const purifyHTML = dirtyHTML => {
        return DOMPurify.sanitize(dirtyHTML)
    }
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        }
    })
</script>

<style scoped lang="scss">
    .fuerte {
        flex: 1;
        max-width: 400px;
        min-width: 230px;
    }
</style>
