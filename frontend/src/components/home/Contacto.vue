<template>
    <section id="contacto" class="text-white position-relative d-flex">
        <div class="filtro"></div>
        <header class="w-50 ms-5 p-4">
            <h2 class="text-start mb-4">Contactanos</h2>
            <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque atque, quibusdam quia, alias illum
                distinctio libero tempore maxime eos enim voluptas eum temporibus totam incidunt fuga consequatur quis
                architecto repudiandae?</p>
            <ctaBtn class="">Sobre nosotros</ctaBtn>
        </header>
        <formulario class="position-absolute form"/>
    </section>
</template>

<script setup>
import ctaBtn from '../reutilizable/ctaBtn.vue';
import formulario from '../reutilizable/formulario.vue';

name: "contacto";
components: [ctaBtn, formulario]
</script>

<style scoped lang="scss">
#contacto {
    height: 80vh;
    min-height: fit-content;
    background-image: url("../../../public/contenido/nene-usando-app.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    .form{
        z-index: 65;
        right: 7%;
        top: 30%;
        max-width: 50%;
    }
    header{
        position: relative;
        z-index: 60;
        p{
            margin-top: 5%;
            width: 90%;
        }
    }
    .filtro{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        z-index: 40;
    }
}
</style>
