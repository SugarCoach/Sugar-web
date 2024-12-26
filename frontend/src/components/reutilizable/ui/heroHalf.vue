<template>
    <div class="hero text-white position-relative d-flex flex-wrap flex-md-nowrap">
        <!-- <div class="d-flex flex-column gap-2 mb-5 h-50 justify-content-end header position-relative" :class="`text-${props.justify}`">
            <h1>{{ props.title }}</h1>
            <h2 class="mb-0">{{ props.subheading }}</h2>
        </div>
        <div class="position-absolute w-100 h-100 top-0 start-0 filtro"></div>

        <div class="ctas d-flex justify-content-start w-25 align-items-center">
            <descargar size="200px" v-if="props.cta" class="descargar"></descargar> <slot class="slot"></slot>
        </div> -->
        <div class="flex-fill contenedor-texto px-5 d-flex flex-column gap-3 justify-content-center justify-content-sm-end pb-5 position-relative">
            <div class="filtro position-absolute w-100 h-100 d-block d-md-none start-0 bottom-0"></div>
            <div class="">
                <h1 class="mb-2">{{ props.title }}</h1>
                <h2 class="mb-0">{{ props.subheading }}</h2>
            </div>
            <p v-html="props.texto">
            </p>
            <slot class="cta-btn"></slot>
        </div>
        <div class="position-relative contenedor-img flex-fill">
            <div class="filtro position-absolute w-100 h-100"></div>
            <img :src="props.imagen" :alt="props.imgAlt" class="w-100 h-100" />
        </div>
    </div>
</template>

<script setup>
    import descargar from '../utils/descargarApp.vue'
    import ctaBtn from '../utils/ctaBtn.vue'
    import iconEdificio from '../icons/_edificio.vue';
    import { onMounted } from 'vue'
    name: 'Hero'
    components: [descargar]
    const props = defineProps({
        imagen: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        subheading: {
            type: String
        },
        texto: {
            type: String
        },
        cta: {
            type: Boolean,
            default: false
        }
    })
    onMounted(() => {
        const hero = document.querySelector('.hero')
        hero.style.backgroundImage = `url(${props.img})`
    })
    const r = document.querySelector(':root')
    r.style.setProperty('--bg-text', `url('${props.imagen}')`)
</script>

<style scoped lang="scss">
    @import '../../../assets/main.scss';
    :root {
        --bg-text: url('../../../../contenido/nenes-usando-app.jpg');
    }
    .hero {
        width: 100%;
        height: calc(100vh - (80.141px + 1.625rem));
        min-height: fit-content;
        align-content: center;
        .contenedor-texto {
            min-width: 500px;
            width: 50%;
            min-height: fit-content;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
            background-image: url('../../../../contenido/fondo_hero.png');
            h2 {
                font-size: calc(1.2vw + 0.9rem) !important;
            }
            h1 {
                font-size: calc(2.5vw + 2rem) !important;
            }
        }
        .contenedor-img {
            width: 45%;
            img {
                object-fit: cover;
                object-position: center;
            }
        }
    }
    .filtro {
        background: rgba(5, 0, 19, 0.2);;
        z-index: 50;
    }

    .ctas {
        z-index: 100;
    }
    @media screen and (max-width: 767px) {
        .hero{
            .contenedor-img {
                display: none;
                
            }
            .filtro{
                background: rgba(5, 0, 19, 0.5);
            }
            .contenedor-texto {
                height: 100%;
                min-width: unset;
                background-image:var(--bg-text);
                background-size: cover;
                background-attachment: fixed;
                background-position: center;
                h1, h2, p{
                    z-index: 102;
                    position: relative;
                }
            }
        }
    }
</style>
