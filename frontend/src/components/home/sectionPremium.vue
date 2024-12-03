<template>
    <section id="section-premium">
        <sectionDividers img_url="/contenido/corona.png" img_alt="corona">
            <header>
                <h2 class="text-center">SugarCoach Premium</h2>
                <h3 class="text-center" v-html="$t('home.planes.h3')"></h3>
            </header>

            <div class="d-flex justify-content-center paquetes-container flex-wrap">
                <paquete-premium :color="basicColor" :title="$t('home.planes.paquetes[0].title')" :price="$t('home.planes.paquetes[0].price')"
                    :beneficios="4" :paqueteId="0" from="home" :texto-btn="$t('home.planes.paquetes[0].ctaBtn')" btnUrl="/premium#planes-premium" />
                <paquete-premium :color="premiuColor" :paqueteId="1" :title="$t('home.planes.paquetes[1].title')" btnUrl="/premium#premios" :price="$t('home.planes.paquetes[1].price')" :mensual="true"
                    :beneficios="7" from="home" :texto-btn="$t('home.planes.paquetes[1].ctaBtn')" />
            </div>
            <div class="d-flex flex-column gap-4 cta-links">
                <textLink class="" :color="premiuColor" :text="$t('home.planes.linkPremium.h4')">
                    <router-link to="/premium" class="gap-1 h3 fw-bold">
                        <span v-html="$t('home.planes.linkPremium.texto')"></span><iconCorona :color="premiuColor" width="50px" height="50px"></iconCorona>
                    </router-link>
                </textLink>

                <textLink class="" :color="premiosColor" :text="$t('home.planes.linkPremios.h4')">
                    <router-link to="/premium#premios" class="gap-1 h3 fw-bold">
                        <span v-html="$t('home.planes.linkPremios.texto')"></span><iconTrofeo :color="premiosColor" width="50px" height="50px"></iconTrofeo>
                    </router-link>
                </textLink>
            </div>
        </sectionDividers>
    </section>

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
    margin: 10vh 0 0 0;
}

.paquetes-container {
    gap: 5rem;
}
</style>