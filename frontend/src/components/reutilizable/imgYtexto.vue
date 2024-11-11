<template>
    <div class="d-flex align-items-center w-100 justify-content-center gap-3" :class="props.direction === 'right' ? 'flex-row-reverse' : ''">
        <img class="p-2" :src="props.imagen" :alt="imagen_alt">
        <div class="text d-flex flex-column align-self-start gap-1 justify-content-start align-items-start">
            <h3 class="mt-4">{{ props.title }}</h3>
            <p class="">
                {{ props.texto }}
            </p>
            <ctaBtn v-if="props.cta" :url="props.cta_url">{{ props.cta }}</ctaBtn>
        </div>
        
    </div>

</template>

<script setup>
import ctaBtn from './ctaBtn.vue';
name: 'imgYtexto';
components: [ ctaBtn ]
const props = defineProps({
    direction: {
        type: String,
        default: 'left'
    },
    title: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    imagen_alt: {
        type: String,
        required: true
    },
    cta: {
        type: String,
    },
    cta_url: {
        type: String,
    }

});
const textColor = `color: ${props.color};`;
</script>

<style scoped lang="scss">
img, .text{
    width: 40%;
    min-width: 160px;
}
</style>