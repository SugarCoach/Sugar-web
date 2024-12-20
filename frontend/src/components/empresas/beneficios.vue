<template>
    <section class="container-fluid mt-5" id="beneficios">
        <h2 class="text-center mb-5">{{ $t("empresas.beneficios.h2") }}</h2>
        <div class="contenedor-contendores-iconYtext d-flex flex-column align-items-center gap-4 gap-sm-3 justify-content-start m-0 m-auto">
            <div class="conedor-iconYtext d-flex justify-content-center align-items-start flex-wrap">
                <iconYtext align-items="start" v-for="item in 2" :title="$t('empresas.beneficios.items['+ (item - 1) +'].title')" :texto="$t('empresas.beneficios.items['+ (item - 1) +'].text')">
                    <iconConnection v-if="item === 1" size="40px"/>
                    <iconReport v-else size="40px"/>
                </iconYtext>
            </div>
            <div class="conedor-iconYtext d-flex justify-content-center align-items-start flex-wrap">
                <iconYtext align-items="start" v-for="item in 2" :title="$t('empresas.beneficios.items['+ (item + 1) +'].title')" :texto="$t('empresas.beneficios.items['+ (item + 1) +'].text')">
                    <iconShootingStar v-if="item === 1" size="40px"/>
                    <iconRoi v-else size="40px"/>
                </iconYtext>
            </div>
            <div class="conedor-iconYtext d-flex justify-content-center align-items-start flex-wrap">
                <iconYtext align-items="start" v-for="item in 2" :title="$t('empresas.beneficios.items['+ (item + 3) +'].title')" :texto="$t('empresas.beneficios.items['+ (item + 3) +'].text')">
                    <iconDiversity v-if="item == 1" size="40px"/>
                    <iconVisibilidad v-else size="40px"/>
                </iconYtext>
            </div>
        </div>
        <ctaBtn url="https://fundrazr.com/campaigns/e2TMf2/pay" color="#00C8DC" class-name="px-4 py-3 m-0 m-auto mt-5">{{ $t('empresas.beneficios.ctaBtn') }}</ctaBtn>
    </section>
</template>

<script setup>
    import iconYtext from '../reutilizable/utils/iconYtext.vue';
    import iconRoi from '../reutilizable/icons/_roi.vue';
    import iconConnection from '../reutilizable/icons/_connection.vue';
    import iconDiversity from '../reutilizable/icons/_diversity.vue';
    import iconReport from '../reutilizable/icons/_report.vue';
    import iconShootingStar from '../reutilizable/icons/_shootingStar.vue';
    import iconVisibilidad from '../reutilizable/icons/_visibilidad.vue';
    import ctaBtn from '../reutilizable/utils/ctaBtn.vue';
    name: 'benedicios'
</script>

<style scoped lang="scss">
section{
    background: radial-gradient(50% 50% at 50% 50%, #010416 0%, #00cadc0a 100%); ;
}
.conedor-iconYtext{
    gap: max(9vw, 80px);
}
@media screen and (max-width: 567px){
    .conedor-iconYtext{
        gap: 1.5rem;
    }
    
}
</style>