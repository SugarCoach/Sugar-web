<template>
    <section id="section-premium">
        <sectionDividers img_url="/contenido/corona.png" img_alt="corona">
            <header>
                <h2 class="text-center">SugarCoach Premium</h2>
                <h3 class="text-center" v-html="$t('home.sectionPremium.h3')"></h3>
            </header>

            <div class="d-flex justify-content-center paquetes-container flex-wrap">
                <paquete-premium :color="basicColor" :title="$t('home.sectionPremium.plans[0].title')" :price="$t('home.sectionPremium.plans[0].price')"
                    :beneficios="0" from="home" :texto-btn="$t('home.sectionPremium.plans[0].btnName')" />
                <paquete-premium :color="premiuColor" :title="$t('home.sectionPremium.plans[1].title')" :price="$t('home.sectionPremium.plans[1].price')" :mensual="true"
                    :beneficios="0" from="home" :texto-btn="$t('home.sectionPremium.plans[1].btnName')" />
            </div>
            <div class="d-flex flex-column gap-4 cta-links">
                <textLink class="" :color="premiuColor" :text="$t('home.sectionPremium.linkPremium.h4')">
                    <router-link to="/premium" class="gap-1 h3 fw-bold">
                        <span v-html="$t('home.sectionPremium.linkPremium.texto')"></span><iconCorona :color="premiuColor" width="50px" height="50px"></iconCorona>
                    </router-link>
                </textLink>

                <textLink class="" :color="premiosColor" :text="$t('home.sectionPremium.linkPremios.h4')">
                    <router-link to="/premium#premios" class="gap-1 h3 fw-bold">
                        <span v-html="$t('home.sectionPremium.linkPremios.texto')"></span><iconTrofeo :color="premiosColor" width="50px" height="50px"></iconTrofeo>
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