<template>
    <div
        class="contenedor-imgytextos d-flex align-items-center w-100 justify-content-center gap-4 gap-sm-3 gap-md-5 flex-wrap contenedor-imgtexto p-5 rounded-4"
        :style="`background-color:${bgColor}; box-shadow: 3px 5px 10px -5px ${boxShadowColor};`"
        :class="props.direction === 'right' ? 'flex-row-reverse' : ''"
    >
        <img loading="lazy" class="" v-if="props.imagen != 'cards'" :src="props.imagen" :alt="imagen_alt" />
        <div v-else class="cards position-relative d-flex justify-content-center pb-5">
            <img loading="lazy" class="fornite" src="../../../../public/contenido/tarjeta-fornite.webp" alt="" />
            <img loading="lazy" class="roblox" src="../../../../public/contenido/roblox-card.png" alt="" />
            <img loading="lazy" class="xbox p-2" src="../../../../public/contenido/xbox_card.png" alt="" />
        </div>
        <div class="text d-flex flex-column align-self-start justify-content-start align-items-start">
            <h3 class="mt-0 mt-sm-4">{{ props.title }}</h3>
            <p class="mb-1" v-html="purifyHTML(props.texto)"></p>
            <ctaBtn v-if="props.cta" :url="props.cta_url" :color="props.color"><slot></slot>{{ props.cta }}</ctaBtn>
        </div>
    </div>
</template>

<script setup>
    import DOMPurify from 'dompurify'
    import ctaBtn from '../utils/ctaBtn.vue'
    name: 'imgYtexto'
    const purifyHTML = dirtyHTML => {
        return DOMPurify.sanitize(dirtyHTML)
    }
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
            type: String
        },
        cta_url: {
            type: String
        },
        color: {
            type: String,
            default: 'blue'
        },
        bgColor: {
            type: String
        }
    })
    const textColor = `color: ${props.color};`
    console.log("bgColor",props.bgColor)
    if (props.bgColor == '#f8f8f8') {
        console.log('bgColor es igual a #f8f8f8')
    }
    const boxShadowColor = props.bgColor == '#f8f8f8' ? 'rgba(0, 0, 0, 0.25)' : '#00cadca6'
    console.log("boxShadowColor",boxShadowColor)
</script>

<style scoped lang="scss">
    .contenedor-imgtexto {
        background-color: #f8f8f8;
        // box-shadow: 3px 5px 10px -5px #00cadca6!important;
    }
    img,
    .cards {
        width: 45%;
        min-width: 260px;
    }
    .text {
        width: 49%;
        min-width: 300px;
        h3 {
            font-size: 2rem;
        }
        p {
            font-size: 1.3rem;
        }
    }
    .cards {
        filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.15));
        img {
            min-width: 100px;
            width: 40%;
            top: 0;
            bottom: 0;
            position: absolute;
            &.fornite {
                left: 15%;
                transform: rotate(-35deg);
            }
            &.roblox {
                position: relative;
            }
            &.xbox {
                right: 15%;
                transform: rotate(35deg);
            }
        }
    }
    @media only screen and (max-width: 991px) {
        .text {
            h3 {
                font-size: 1.8rem;
            }
            p {
                font-size: 1.1rem;
            }
        }
    }
    @media only screen and (max-width: 804px) {
        img,
        .text,
        .cards {
            width: 85%;
        }
    }
</style>
