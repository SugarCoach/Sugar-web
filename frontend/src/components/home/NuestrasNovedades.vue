<template>
    <section id="nuestras_novedades" class="pt-5">
        <div class="mb-4 text-center">
            <h2 class="">{{ $t('home.novedades.h2') }}</h2>
            <h3 class="">{{ $t('home.novedades.h3') }}</h3>

        </div>
        <redes-sociales />
    </section>
</template>


<script setup>
import redesSociales from '../reutilizable/utils/redesSociales.vue';

name: 'Nuestras_novedades';
components: [redesSociales]
</script>

<style scoped lang="scss">
#nuestras_novedades {
    min-height: 25vh;
    padding: 30px;

    .logo-red-social {
        width: 10vw;
        max-width: 60px;
        min-width: 20px;
        filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        scale: 1;
        transition: 300ms;

        &:hover {
            scale: 1.2;
            transition: 0.3s;
        }
    }
}
</style>