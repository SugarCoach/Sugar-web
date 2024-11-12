<template>
    <div class="d-flex align-items-center w-100 justify-content-center  gap-2 gap-sm-3 flex-wrap"
        :class="props.direction === 'right' ? 'flex-row-reverse' : ''">
        <img class="" :src="props.imagen" :alt="imagen_alt">
        <div class="text d-flex flex-column align-self-start justify-content-start align-items-start">
            <h3 class="mt-0 mt-sm-4">{{ props.title }}</h3>
            <p class="mb-1">
                {{ props.texto }}
            </p>
            <ctaBtn v-if="props.cta" :url="props.cta_url">{{ props.cta }}</ctaBtn>
        </div>

    </div>

</template>

<script setup>
import ctaBtn from './ctaBtn.vue';
name: 'imgYtexto';
components: [ctaBtn]
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
img,
.text {
    width: 45%;
    min-width: 250px;
    p{
        max-width: 400px;
    }
}

@media only screen and (max-width: 575px) {

    img,
    .text {
        width: 75%;
    }
}
</style>