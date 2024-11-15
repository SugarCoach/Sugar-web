<template>
    <div class="d-flex flex-column justify-content-between align-items-center integrante p-3 text-center rounded-5 shadow-lg">
        <img :src="props.img_url" :alt="props.img_alt" class="rounded-circle mt-2">
        <div class="d-flex flex-column gap-0 mb-2">
            <span class="nombre fw-bold">{{ props.nombre }}</span>
            <span class="rol fw-light">{{ props.rol }}</span>
        </div>

    </div>
</template>

<script setup>
name: 'integrante';
const props = defineProps({
    img_url: {
        type: String,
        required: true,
    },
    img_alt: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    }
});
</script>

<style scoped lang="scss">
.integrante{
    width: 195px;
    height: 265px;
    background-color: #696AF5;
    .nombre{
        font-size: 16px;
        color: #1C1C1C;
    }
    .rol{
        font-size: 15px;
        color: #90E5FF;
    }
    img{
        width: 80%;
        object-fit: cover;
        object-position: center;
    }
}
</style>