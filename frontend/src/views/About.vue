<template>
    <q-page>
        <main>
            <hero justify="center" img="../../contenido/integrantes/integrantes-equipo.jpg" title="Sobre nosotros"
                subheading="Conoce nuestra historia" />
            <imgsYtextos title="Nosotros" :imagenesYtextos="imagenesYTextos" />
            <fuertes />
            <nuestroEquipo />
            <contacto />
        </main>
    </q-page>
</template>

<script setup>
import hero from "../components/reutilizable/ui/hero.vue";
import fuertes from "@/components/about/Fuertes.vue";
import nuestroEquipo from "@/components/about/NuestroEquipo.vue";
import contacto from "@/components/home/Contactanos.vue";
import imgsYtextos from "@/components/reutilizable/ui/imgsYtextos.vue";

name: 'About';
components: [hero, imgsYtextos, fuertes, nuestroEquipo, contacto];

const imagenesYTextos = [
    {
        img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
        img_alt: 'Equipo de SugarCoach trabajando',
        title: 'El Equipazo',
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
</style>