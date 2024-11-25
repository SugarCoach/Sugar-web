<template>
    <article
        class="testimonio d-flex flex-column align-items-center justify-content-between gap-2 rounded-3 border border-2 border-white" :class="props.size">
        <header class="text-center d-flex flex-column justify-content-center flex-fill">
            <h3 class="m-0">{{ props.user }}</h3>
            <p class="fw-light m-0">"{{ props.opinion }}"</p>
        </header>

        <div class="d-flex gap-3 h-25">
            <iconStar v-for="index in 5" :key="index" :size="props.size == 'lg' ? '30px' : '20px'" :fill="index <= stars ? true : false" />
        </div>
    </article>
</template>

<script setup>
import iconStar from '../icons/_star.vue';

name: 'testimonio';
components: [iconStar]
const props = defineProps({
    user: {
        type: String,
        required: true,
    },
    opinion: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        default: "lg",
    }

});
</script>

<style scoped lang="scss">
$lg: 40%;
$md: 20%;

.testimonio {
    background: linear-gradient(30deg, #ffffff 0%, #b23abbf3 64%);

    aspect-ratio: 6/5;
    box-shadow: 1px 6px 25px -5px rgba(0, 0, 0, 0.3);
    &.lg{
        min-width: 230px;
        max-width: 350px;
        width: $lg;
        z-index: 40;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        h3{
            font-size: 1.2rem;
        }
        p{
            font-size: 1.7rem;
        }
    }
    &.md{
        min-width: 200px;
        max-width: 250px;
        width: $md;
        z-index: 30;

        position: absolute;
        h3{
            font-size: 1rem;
        }
        p{
            font-size: 1.3rem;
        }
    }
}
</style>