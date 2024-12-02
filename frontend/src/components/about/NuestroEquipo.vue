<template>
    <section class="container">
        <h2 class="mb-5 pb-5 text-center">{{ $t('sobreNosotros.equipo.h2') }}</h2>
        <div class="d-flex justify-content-center gap-5 flex-wrap">
            <integrante v-for="item in integrantes" :key="item.id" :nombre="item.nombre" :rol="$t('sobreNosotros.equipo.integrantes['+ item.id +']')" :img_url="item.img_url" :img_alt="item.img_alt"/>
        </div>
        
    </section>
</template>

<script setup>
import integrante from '../reutilizable/design/integrante.vue';

name: 'nosotros';
components: [ integrante ];
const integrantes = [
    {
        img_url: '../../contenido/integrantes/isabel-circle.webp',
        img_alt: 'Isabel Berizzo, SugarCoach Founder',
        nombre: 'Isabel Berizzo',
        id: 0
    },
    {
        img_url: '../../contenido/integrantes/veronica-circle.webp',
        img_alt: 'Veronica Avendaño, SugarCoach COO',
        nombre: 'Veronica Avendaño',
        id: 1
    },
    {
        img_url: '../../contenido/integrantes/karin-circle.jpg',
        img_alt: 'Karin Chmiel, SugarCoach Business development',
        nombre: 'Karin Chmiel',
        id: 2
    },

    {
        img_url: '../../contenido/integrantes/devora-circle.webp',
        img_alt: 'Debora Biain, SugarCoach RSE & Relaciones Públicas',
        nombre: 'Debora Biain',
        id: 3
    },
    {
        img_url: '../../contenido/integrantes/agustina-circle.jpg',
        img_alt: 'Agustina Olivo, SugarCoach CM & Content Manager',
        nombre: 'Agustina Olivo',
        id: 4
    },
]
</script>

<style scoped lang="scss">
</style>
