<template>
    <q-page>
        <main>
            <hero justify="center" img="../../contenido/integrantes/integrantes-equipo.jpg" title="Sobre nosotros" subheading="Conoce nuestra historia"/>
            <div class="container d-flex flex-column gap-5">
                <imgYtexto v-for="item in imagenesYTextos" :key="item.id" :direction="item.id % 2 == 0 ? 'left' : 'right'" :imagen="item.img_url" :imagen_alt="item.img_alt" :title="item.title" :texto="item.texto" :cta="item.cta" :cta_url="item.cta_url"/>
            </div>
            
        </main>
    </q-page>
</template>

<script setup>
import hero from "../components/reutilizable/hero.vue";
import imgYtexto from "../components/reutilizable/imgYtexto.vue";

name: 'About';
components: [ hero, imgYtexto ];
const imagenesYTextos = [
    {
        img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
        img_alt: 'Equipo de SugarCoach trabajando',
        title: 'El Equipo',
        texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra.',
        cta: '',
        cta_url: '',
        id: 0
    },
    {
        img_url: '../../contenido/integrantes/integrantes-equipo.jpg',
        img_alt: 'Equipo de SugarCoach trabajando',
        title: 'El Equipo',
        texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra.',
        cta: 'Premios',
        cta_url: '/#premios',
        id: 1
    },
]
</script>