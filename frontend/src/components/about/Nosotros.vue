<template>
    <section class="container d-flex flex-column">
        <imgYtexto v-for="item in imagenesYTextos" :key="item.id" :direction="item.id % 2 == 0 ? 'left' : 'right'"
            :imagen="item.img_url" :imagen_alt="item.img_alt" :title="item.title" :texto="item.texto" :cta="item.cta"
            :cta_url="item.cta_url" />
    </section>
</template>

<script setup>
import imgYtexto from '../reutilizable/imgYtexto.vue';
name: 'nosotros';
components: [imgYtexto];
const imagenesYTextos = [
    {
        img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
        img_alt: 'Equipo de SugarCoach trabajando',
        title: 'El Equipo',
        texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
        cta: '',
        cta_url: '',
        id: 0
    },
    {
        img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
        img_alt: 'Equipo de SugarCoach trabajando',
        title: 'El Equipo',
        texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
        cta: 'Premios',
        cta_url: '/#premios',
        id: 1
    },
]
</script>

<style scoped lang="scss">
section{
    gap: 75vh;
}
</style>
