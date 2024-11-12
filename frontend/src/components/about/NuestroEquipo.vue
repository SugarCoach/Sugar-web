<template>
    <section class="container">
        <h2 class="mb-5 pb-5 text-center">Nuestro Equipo</h2>
        <div class="d-flex justify-content-center gap-5 flex-wrap">
            <integrante v-for="item in integrantes" :key="item.id" :nombre="item.nombre" :rol="item.rol" :img_url="item.img_url" :img_alt="item.img_alt"/>
        </div>
        
    </section>
</template>

<script setup>
import integrante from '../reutilizable/integrante.vue';

name: 'nosotros';
components: [ integrante ];
const integrantes = [
    {
        img_url: '../../contenido/integrantes/isabel-circle.webp',
        img_alt: 'Isabel Berizzo, SugarCoach Founder',
        nombre: 'Isabel Berizzo',
        rol: 'CEO & CTO FOUNDER',
        id: 0
    },
    {
        img_url: '../../contenido/integrantes/veronica-circle.webp',
        img_alt: 'Veronica Avendaño, SugarCoach COO',
        nombre: 'Veronica Avendaño',
        rol: 'COO',
        id: 1
    },
    {
        img_url: '../../contenido/integrantes/karin-circle.jpg',
        img_alt: 'Karin Chmiel, SugarCoach Business development',
        nombre: 'Karin Chmiel',
        rol: 'Business development',
        id: 2
    },

    {
        img_url: '../../contenido/integrantes/devora-circle.webp',
        img_alt: 'Debora Biain, SugarCoach RSE & Relaciones Públicas',
        nombre: 'Debora Biain',
        rol: 'RSE & Relaciones Públicas',
        id: 3
    },
    {
        img_url: '../../contenido/integrantes/agustina-circle.jpg',
        img_alt: 'Agustina Olivo, SugarCoach CM & Content Manager',
        nombre: 'Agustina Olivo',
        rol: 'CM & Content Manager',
        id: 4
    },
]
</script>

<style scoped lang="scss">
</style>
