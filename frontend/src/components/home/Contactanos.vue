<template>
    <section id="contacto"
        class="text-white position-relative d-flex gap-5 gap-xl-0 justify-content-center justify-content-xl-between flex-wrap">
        <div class="filtro"></div>
        <header class="p-4 m-0 ms-xl-5">
            <h2 class="mb-4">Contactanos</h2>
            <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque atque, quibusdam quia, alias
                illum
                distinctio libero tempore maxime eos enim voluptas eum temporibus totam incidunt fuga consequatur quis
                architecto repudiandae?</p>
            <ctaBtn class="cta">Sobre nosotros</ctaBtn>
        </header>
        <formulario class="form me-0 me-xl-4" />
    </section>
</template>

<script setup>
import ctaBtn from '../reutilizable/utils/ctaBtn.vue';
import formulario from '../reutilizable/design/formulario.vue';

name: "contacto";
components: [ctaBtn, formulario]
</script>

<style scoped lang="scss">
#contacto {
    height: 80vh;
    min-height: 500px;
    background-image: url("../../../public/contenido/nene-usando-app.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    .form {
        z-index: 65;
        margin-top: 1.5rem;
        max-width: 80%;
    }

    header {
        position: relative;
        z-index: 60;
        text-justify: start;
        margin-left: 3rem;
        width: 50%;

        p {
            margin-top: 5%;
            width: 90%;
        }
    }

    .filtro {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        z-index: 40;
    }
}

@media only screen and (max-width: 989px) {
    #contacto {
        min-height: 740px;

        header {
            text-align: center;
            width: 80%;

            p {
                width: 100%;
            }

            .cta {
                margin: 0px auto !important;
            }
        }
    }
}
</style>
