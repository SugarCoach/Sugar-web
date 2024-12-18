<template>
    <div class="hero text-white position-relative">
        <div class="d-flex flex-column gap-2 mb-5 h-50 justify-content-end header position-relative" :class="`text-${props.justify}`">
            <h1>{{ props.title }}</h1>
            <h2 class="mb-0">{{ props.subheading }}</h2>
        </div>
        <div class="position-absolute w-100 h-100 top-0 start-0 filtro"></div>

        <div class="ctas d-flex justify-content-start w-25 align-items-center">
            <descargar size="200px" v-if="props.cta" class="descargar"></descargar> <slot class="slot"></slot>
        </div>
    </div>
</template>

<script setup>
    import descargar from '../utils/descargarApp.vue'
    import { onMounted } from 'vue'
    name: 'Hero'
    components: [descargar]
    const props = defineProps({
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subheading: {
            type: String
        },
        justify: {
            type: String,
            default: 'start'
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
</script>

<style scoped lang="scss">
    @import '../../../assets/main.scss';
    .hero {
        padding: 0 $space_hero 0 $space_hero;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        width: 100%;
        height: calc(100vh - (80.141px + 1.625rem));
        align-content: center;
    }

    .filtro {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.562) 0%, rgba(255, 255, 255, 0)), 80%;
        z-index: 50;
    }

    .header {
        text-shadow: 0 0 10px black;
        z-index: 100;

        h2 {
            font-size: calc(1.2vw + 1rem);
        }
        h1 {
            font-size: calc(2.5vw + 3rem);
        }
    }
    .ctas {
        z-index: 100;
    }
    @media only screen and (768px <= width <= 992px) {
        .hero {
            padding: 0 6.5vw 0 6.5vw;
        }
    }

    @media only screen and (576px <= width <= 768px) {
        .hero {
            padding: 0 5vw 0 5vw;
        }
    }
</style>
