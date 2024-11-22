<template>
    <q-page>
        <main>
            <hero justify="center" img="../../contenido/integrantes/10.Team.jpg" title="Sobre nosotros"
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
        title: 'Somos un equipo',
        texto: 'Somos un equipo decidido a mejorar la calidad de vida de las familias de niños con diabetes tipo 1. SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel. Como muchos padres de niños con DT1, ella se dio cuenta que controlar la enfermedad era un trabajo exhaustivo y cambiaba la dinamica para toda la familia (diabetes 3). Por eso pensó en crear una aplicación que no solo resolviera su problema, sino que también pudiera ayudar a otras familias que vivían lo mismo.',
        cta: '',
        cta_url: '',
        id: 0
    },
    {
        img_url: '../../contenido/objetivos.png',
        img_alt: 'Objetivos de SugarCoach',
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