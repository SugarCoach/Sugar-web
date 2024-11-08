<template>
    <section class="position-relative overflow-hidden">
        <div class="rounded-circle d-top bg-white position-absolute"></div>
        <header>
            <h2 class="text-center">SugarCoach Premium</h2>
            <h3 class="text-center">Obten nuevas funcionalidades</h3>
        </header>

        <div class="d-flex justify-content-center paquetes-container">
            <paquete-premium :color="basicColor" title="Basico" price="Free"
                :beneficios="['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']" texto-btn="Obtener gratis" />
            <paquete-premium :color="premiuColor" title="Premium" price="$2.99" :mensual="true"
                :beneficios="['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']" texto-btn="Comprar" />
        </div>
        <div class="d-flex flex-column gap-4 cta-links">
            <textLink class="" :color="premiuColor" text="¡Consigue tu licencia Premium ahora!">
                <router-link to="/premium" class="gap-1 h3 fw-bold">
                    Premium<iconCorona :color="premiuColor" width="50px" height="50px"></iconCorona>
                </router-link>
            </textLink>

            <textLink class="" :color="premiosColor" text="¿Buscas Otra cosa?">
                <router-link to="/premium#premios" class="gap-1 h3 fw-bold">
                    Premios<iconTrofeo :color="premiosColor" width="50px" height="50px"></iconTrofeo>
                </router-link>
            </textLink>
        </div>
        <div class="rounded-circle d-bottom bg-white position-absolute"></div>
    </section>
</template>

<script setup>
import iconCorona from '../reutilizable/icons/_corona.vue';
import iconTrofeo from '../reutilizable/icons/_trofeo.vue';
import paquetePremium from '../reutilizable/paquetePremium.vue';
import textLink from '../reutilizable/textYLink.vue';

name: 'sectionPremium';
components: [paquetePremium, textLink, iconCorona, iconTrofeo]
const basicColor = "#7ED956";
const premiuColor = "#CF74FF";
const premiosColor = "#FFB800"
</script>

<style scoped lang="scss">
@mixin divider ($place) {
    $dHeight: 60vh;
    width: 120%;
    height: $dHeight;
    left: -10%;

    @if ($place =='top') {
        top: calc($dHeight/2) * (-1);
    }

    @else {
        bottom: calc($dHeight/2) * (-1);
    }
}

section {
    height: auto;
    background-color: #F5F5F5;

    header {
        margin-bottom: 5rem;
    }

    h2 {
        margin-top: 35vh;
    }

    .cta-links {
        margin: 10vh 0 30vh 0;
    }

    .paquetes-container {
        gap: 5rem;
    }

    .d-top {
        @include divider('top')
    }

    .d-bottom {
        @include divider('bottom')
    }
}
</style>