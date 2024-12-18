<template>
    <div class="d-flex flex-column align-items-center gap-2 fuerte" :class="`align-items-${props.alignItems}`">
        <slot></slot>
        <div class="d-flex flex-column " :class="`align-items-${props.alignItems}`">
            <h3 v-if="props.title">{{ props.title }}</h3>
            <p class="w-75 fw-medium" :class="`text-${props.alignItems}`"  v-html="purifyHTML(props.texto)"></p>
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
        },
        alignItems: {
            type: String,
            default: "center"
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
