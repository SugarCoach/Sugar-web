<template>
    <section id="planes-premium">
        <h2 class="text-center mb-4">{{ $t('premium.planes.h2') }}</h2>
        <p v-html="$t('premium.planes.p')" class="text-center w-75 m-0 m-auto mb-5 pb-5 lead fw-normal"></p>
        <div class="d-flex justify-content-center gap-5 flex-wrap lone-h2">
            <paquetePremium
                v-for="item in props.paquetesUsuarios"
                :key="item.id"
                :title="$t('premium.planes.paquetes[' + item.id + '].title')"
                :price="$t('premium.planes.paquetes[' + item.id + '].price')"
                :texto="$t('premium.planes.paquetes[' + item.id + '].description')"
                :texto-btn="$t('premium.planes.paquetes[' + item.id + '].ctaBtn')"
                :paqueteId="item.id"
                :beneficios="item.beneficios"
                from="premium"
                :color="props.color"
                :mensual="item.mensual"
                :proximamente="item.proximamente"
                ><iconGota v-if="item.id == 0" :color="props.color"  size="40px"/><iconCorona v-else :color="props.color"  size="40px"/>
            </paquetePremium>
        </div>
        <div class="w-100 d-flex flex-column align-items-center">
            <h3 class="mb-5">{{ $t('premium.planes.h3') }}</h3>
            <paquetePremium
                :title="$t('premium.planes.paquetes[2].title')"
                :price="$t('premium.planes.paquetes[2].price')"
                :texto="$t('premium.planes.paquetes[2].description')"
                :texto-btn="$t('premium.planes.paquetes[2].ctaBtn')"
                :beneficios="paqueteEmpresa.beneficios"
                :color="props.color"
                :mensual="paqueteEmpresa.mensual"
                :paqueteId="2"
                from="premium"
            ><iconEdificio :color="props.color" size="40px"/>
            </paquetePremium>
        </div>
    </section>
</template>

<script setup>
    import iconGota from '../reutilizable/icons/_gota.vue'
    import iconCorona from '../reutilizable/icons/_corona.vue'
    import iconEdificio from '../reutilizable/icons/_edificio.vue';
    import paquetePremium from '../reutilizable/design/paquetePremium.vue'

    name: 'planesPremium'
    const props = defineProps({
        paquetesUsuarios: {
            type: Object
        },
        color: {
            type: String,
            default: '#FFB800'
        }
    })
    const paqueteEmpresa = {
        title: 'Para Empresas',
        price: 'Contactanos',
        texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
        btnText: 'Ir a Empresas',
        btnUrl: '/empresas',
        beneficios: 4,
        mensual: false
    }
</script>

<style scoped lang="scss"></style>
