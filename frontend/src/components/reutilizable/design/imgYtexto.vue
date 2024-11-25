<template>
    <div class="contenedor-imgytextos d-flex align-items-center w-100 justify-content-center  gap-4 gap-sm-3 gap-md-5 flex-wrap"
        :class="props.direction === 'right' ? 'flex-row-reverse' : ''">
        <img class="" v-if="props.imagen != 'cards'" :src="props.imagen" :alt="imagen_alt">
        <div v-else class="cards position-relative d-flex justify-content-center pb-5">
            <img class="fornite" src="../../../../public/contenido/tarjeta-fornite.webp" alt="">
            <img class="minecraft" src="../../../../public/contenido/minecraft_card.png" alt="">
            <img class="xbox" src="../../../../public/contenido/xbox_card.png" alt="">
        </div>
        <div class="text d-flex flex-column align-self-start justify-content-start align-items-start">
            <h3 class="mt-0 mt-sm-4">{{ props.title }}</h3>
            <p class="mb-1">
                {{ props.texto }}
            </p>
            <ctaBtn v-if="props.cta" :url="props.cta_url" :color="props.color"><slot></slot>{{ props.cta }}</ctaBtn>
        </div>

    </div>

</template>

<script setup>
import ctaBtn from '../utils/ctaBtn.vue';
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
    },
    color: {
        type: String,
        default: 'blue'
    }

});
const textColor = `color: ${props.color};`;
</script>

<style scoped lang="scss">
    img,
    .text, .cards {
        width: 45%;
        min-width: 250px;

        p {
            max-width: 400px;
        }
    }
    .cards{
        filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.15));
        img{
            min-width: 100px;
            width: 40%;
            top: 0;
            bottom: 0;
            position: absolute;
            &.fornite{
                left: 15%;
                transform: rotate(-35deg);
            }
            &.minecraft{
                position: relative;
            }
            &.xbox{
                right: 15%;
                transform: rotate(35deg);
            }
        }
    }


@media only screen and (max-width: 575px) {

    img,
    .text, .cards  {
        width: 75%;
    }
}
</style>