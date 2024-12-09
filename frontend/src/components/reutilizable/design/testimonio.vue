<template>
    <article
        class="testimonio p-4 pt-5 d-flex flex-column align-items-center justify-content-between gap-4 rounded-3 border border-2 border-white"
        :class="props.size"
    >
        <header class="text-center flex-fill d-flex flex-column justify-content-center">
            <h3 class="m-0 mb-3">{{ props.user }}</h3>
            <p class="fw-medium m-0">"{{ props.opinion }}"</p>
        </header>

        <div class="d-flex gap-3 pb-4 m-auto mb-0">
            <iconStar v-for="index in 5" :key="index" size="30px"  :fill="index <= props.stars ? 'yellow' : 'transparent'" />
        </div>
    </article>
</template>

<script setup>
    import iconStar from '../icons/_star.vue'

    name: 'testimonio'
    components: [iconStar]
    const props = defineProps({
        user: {
            type: String,
            required: true
        },
        opinion: {
            type: String,
            required: true
        },
        stars: {
            type: Number,
            required: true
        },
    })
</script>

<style scoped lang="scss">
    .testimonio {
        background: linear-gradient(30deg, #ffffff 0%, #de98fff3 64%);
        aspect-ratio: 6/5;
        height: fit-content;
        box-shadow: 1px 6px 25px -5px rgba(0, 0, 0, 0.3);
        min-width: 230px;
        max-width: 400px;
        width: 50%;
        z-index: 40;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: rgb(0, 0, 0); 
        h3 {
            font-size: 1.7rem;
            text-shadow: 0 0 10px white;
        }
        p {
            font-size: 1rem;
            text-shadow: 0 0 10px #ffffff;
        }
    }
</style>
