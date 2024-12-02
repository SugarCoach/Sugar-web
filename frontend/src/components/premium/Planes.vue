<template>
    <section id="planes-premium">
        <h2 class="text-center lone-h2">{{ $t('premium.planes.h2') }}</h2>
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
            />
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
            />
        </div>
    </section>
</template>

<script setup>
    import paquetePremium from '../reutilizable/design/paquetePremium.vue'

    name: 'planesPremium'
    components: [paquetePremium]
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
        beneficios: 0,
        mensual: false
    }
</script>

<style scoped lang="scss"></style>
