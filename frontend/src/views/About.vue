<template>
    <q-page>
        <main>
            <hero justify="center" img="../../contenido/integrantes/integrantes-equipo.jpg" title="Sobre nosotros" subheading="Conoce nuestra historia"/>
            <nosotros/>
            <fuertes/>
            <nuestroEquipo/>
            <contacto/>
        </main>
    </q-page>
</template>

<script setup>
import nosotros from "@/components/about/Nosotros.vue";
import hero from "../components/reutilizable/hero.vue";
import fuertes from "@/components/about/Fuertes.vue";
import nuestroEquipo from "@/components/about/NuestroEquipo.vue";
import contacto from "@/components/home/Contacto.vue";

name: 'About';
components: [ hero, nosotros, fuertes, nuestroEquipo, contacto];
</script>