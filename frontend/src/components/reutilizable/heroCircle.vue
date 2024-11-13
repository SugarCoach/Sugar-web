<template>
    <div class="hero-circle d-flex justify-content-end gap-3 gap-sm-0 justify-content-sm-between flex-column-reverse flex-sm-row">
        <div class="hero-text d-flex flex-column align-self-start align-self-sm-center">
            <span class="over-text fw-medium">
                <slot></slot> {{ props.overText }}
            </span>
            <h1 class="fw-bold" :style="`color: ${props.color};`">{{ props.heading1 }}</h1>
            <h2 class="fw-normal">{{ props.heading2 }}</h2>
            <ctaBtn :url="props.button_url" :color="props.color">
                <slot></slot> {{ buttonText }}
            </ctaBtn>
        </div>
        <img class="align-self-center align-self-sm-start" :src="props.img_url" :alt="props.img_alt">
    </div>

</template>

<script setup>
import ctaBtn from './ctaBtn.vue';

name: 'heroCircle';
components: [ctaBtn]
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
@import "../../assets/main.scss";

.hero-circle {
    height: 60vh;
    overflow: hidden;

    img {
        width: 42%;
        aspect-ratio: 8/7;
        min-height: 80%;
        max-height: 100%;
        object-fit: cover;
        object-position: right;
        border-bottom-left-radius: 90%;
    }

    .hero-text {
        margin-left: calc($space-hero + 10px);

        // margin-bottom: 10vh;
        h1 {
            line-height: 85%;
        }

        h2,
        .over-text {
            font-size: 1.05rem;
        }
    }
}

@media only screen and (max-width: 575px) {
    .hero-circle {
        img {
            width: 100%;
            aspect-ratio: 5/1;
            min-height: 10%;
            border-bottom-left-radius: 120%;
            border-bottom-right-radius: 120%;
        }
    }

}
</style>