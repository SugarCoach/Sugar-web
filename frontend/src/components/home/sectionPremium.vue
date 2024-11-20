<template>
    <sectionDividers img_url="/contenido/corona.png" img_alt="corona">
        <header>
            <h2 class="text-center">SugarCoach Premium</h2>
            <h3 class="text-center">Obten nuevas funcionalidades</h3>
        </header>

        <div class="d-flex justify-content-center paquetes-container flex-wrap">
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
    </sectionDividers>
</template>

<script setup>
import iconCorona from '../reutilizable/icons/_corona.vue';
import iconTrofeo from '../reutilizable/icons/_trofeo.vue';
import paquetePremium from '../reutilizable/design/paquetePremium.vue';
import textLink from '../reutilizable/utils/textYLink.vue';
import sectionDividers from '../reutilizable/ui/sectionDividers.vue';

name: 'sectionPremium';
components: [paquetePremium, textLink, iconCorona, iconTrofeo, sectionDividers]
const basicColor = "#7ED956";
const premiuColor = "#CF74FF";
const premiosColor = "#FFB800"
</script>

<style scoped lang="scss">

header {
    margin-bottom: 5rem;
}



.cta-links {
    margin: 10vh 0 30vh 0;
}

.paquetes-container {
    gap: 5rem;
}
</style>