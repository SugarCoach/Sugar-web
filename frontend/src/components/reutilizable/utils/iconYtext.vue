<template>
    <div class="d-flex flex-column gap-2 fuerte align-items-center" :class="`align-items-sm-${props.alignItems}`">
        <slot></slot>
        <div class="d-flex flex-column align-items-center" :class="`align-items-sm-${props.alignItems}`">
            <h3 v-if="props.title">{{ props.title }}</h3>
            <p class=" fw-medium text-center" :class="`text-sm-${props.alignItems}`"  v-html="purifyHTML(props.texto)"></p>
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
        max-width: 60vw;
        width: 28vw;
        // width: 28vw;
        min-width: 230px;
    }
</style>
