<template>
    <div class="hero text-white position-relative">
        <img
            class="hero-bg"
            :src="props.img"
            :alt="props.title"
            width="1600"
            height="1067"
            loading="eager"
            decoding="async"
        />
        <div class="d-flex flex-column gap-2 mb-5 h-50 justify-content-end header position-relative" :class="`text-${props.justify}`">
            <h1>{{ props.title }}</h1>
            <h2 class="mb-0">{{ props.subheading }}</h2>
        </div>
        <div class="position-absolute w-100 h-100 top-0 start-0 filtro" :class="props.filtro"></div>

        <div class="ctas d-flex w-25 align-items-center w-100" :class="`justify-content-${props.justify}`">
            <descargar size="200px" v-if="props.cta" class="descargar"></descargar>
            <slot class="slot"></slot>
        </div>
    </div>
</template>

<script setup>
    import descargar from '../utils/descargarApp.vue'
    defineOptions({ name: 'Hero' })
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
        },
        filtro: {
            type: String
        }
    })    
</script>

<style scoped lang="scss">
    @import '../../../assets/main.scss';
    .hero {
        padding: 0 $space_hero 0 $space_hero;        
        width: 100%;
        height: calc(100vh - (80.141px + 1.625rem));
        align-content: center;
    }

    .hero-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .filtro {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.562) 0%, rgba(255, 255, 255, 0)), 80%;
        z-index: 50;
        &.oscuro {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
        }
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

    @media only screen and (width <= 768px) {
        .hero {
            padding: 0 5vw 0 5vw;
            height: 60vh;
        }
    }
</style>
