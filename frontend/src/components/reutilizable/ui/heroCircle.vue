<template>
    <div
        class="hero-circle d-flex justify-content-end gap-3 gap-sm-0 justify-content-sm-between flex-column-reverse flex-sm-row">
        <div class="hero-text d-flex flex-column align-self-start align-self-sm-center">
            <span class="d-flex gap-1 over-text fw-medium align-items-center">
                <iconCorona v-if="props.heading1 === 'Premium'" :color="props.color" size="35px"/><iconEdificio v-else :color="props.color" size="35px"/>{{ props.overText }}
            </span>
            <h1 class="fw-bold mb-3" :style="`color: ${props.color};`">{{ props.heading1 }}</h1>
            <h2 class="fw-normal mb-4">{{ props.heading2 }}</h2>
            <ctaBtn :url="props.button_url" :color="props.color">
                <iconCorona v-if="props.heading1 === 'Premium'"  color="white" size="23px"/><iconEdificio v-else color="white" size="23px"/>{{ buttonText }}
            </ctaBtn>
        </div>
        <img class="align-self-center align-self-sm-start" :src="props.img_url" :alt="props.img_alt">
    </div>

</template>

<script setup>
import iconCorona from '../icons/_corona.vue';
import iconEdificio from '../icons/_edificio.vue';
import ctaBtn from '../utils/ctaBtn.vue';

name: 'heroCircle';
components: [ctaBtn, iconCorona, iconEdificio]
const props = defineProps({
    heading1: {
        type: String,
        required: true,
    },
    heading2: {
        type: String,
        required: true,
    },
    overText: {
        type: String,
        required: true,
    },
    buttonText: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#FFB800',
    },
    button_url: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    img_alt: {
        type: String,
        required: true,
    }
});
</script>

<style scoped lang="scss">
@import "../../../assets/main.scss";

.hero-circle {
    height: 80vh;
    overflow: hidden;

    img {
        width: 66%;
        aspect-ratio: 8/7;
        min-height: 80%;
        max-height: 100%;
        object-fit: cover;
        object-position: right;
        border-bottom-left-radius: 75%;
    }

    .hero-text {
        margin-left: calc($space-hero + 10px);
        min-width: max-content;

        // margin-bottom: 10vh;
        h1 {
            line-height: 85%;
            font-size: 5rem;
        }

        h2,
        .over-text {
            font-size: 1.25rem;
        }
    }
}

@media only screen and (max-width: 992px) {
    .hero-circle {
        img {
            width: 60%;
            border-bottom-left-radius: 85%;
        }
    }
}

@media only screen and (max-width: 768px) {
    .hero-circle {
        .hero-text {
            margin-left: calc(5vw + 10px);

            // margin-bottom: 10vh;
            h1 {
                font-size: 4rem;
            }

            h2,
            .over-text {
                font-size: 1.05rem;
            }
        }
    }
}

@media only screen and (max-width: 575px) {
    .hero-circle {
        img {
            width: 100%;
            aspect-ratio: 4/1;
            min-height: 20%;
            border-bottom-left-radius: 90%;
            border-bottom-right-radius: 90%;
        }

        .hero-text {
            min-width: unset;
        }
    }

}
</style>