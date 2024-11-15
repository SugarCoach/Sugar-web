<template>
    <section class="container">
        <h2 class="text-center lone-h2">{{ props.title }}</h2>
        <div class="contenedor-textos d-flex flex-column">
            <imgYtexto v-for="item in props.imagenesYtextos" :key="item.id" :direction="item.id % 2 == 0 ? 'left' : 'right'"
                :imagen="item.img_url" :imagen_alt="item.img_alt" :title="item.title" :texto="item.texto"
                :cta="item.cta" :cta_url="item.cta_url" />
        </div>

    </section>
</template>

<script setup>
import imgYtexto from '../design/imgYtexto.vue';

name: 'nosotros';
components: [imgYtexto];
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    imagenesYtextos: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">
.contenedor-textos {
    gap: 75vh;
}
</style>
