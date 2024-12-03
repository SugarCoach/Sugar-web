<template>
    <section id="planes-empresas">
        <h2 class="text-center lone-h2">Elije tu plan ideal</h2>
        <div class="d-flex justify-content-center gap-5 flex-wrap">
            <paquetePremium
                v-for="item in props.paquetes"
                :key="item.id"
                :title="$t('empresas.planes.paquetes[' + item.id + '].title')"
                :price="$t('empresas.planes.paquetes[' + item.id + '].price')"
                :texto-btn="$t('empresas.planes.paquetes[' + item.id + '].ctaBtn')"
                :btn-url="item.btnUrl"
                :paqueteId="item.id"
                :beneficios="item.beneficios"
                from="empresas"
                :color="props.color"
                :mensual="item.mensual"
                :proximamente="item.proximamente"
            >
                <iconShop v-if="item.title === 'Basico'" :color="props.color" />
                <iconEdificio v-else-if="item.title === 'Premium'" :color="props.color" />
                <iconDobleEdificio v-else-if="item.title === 'Socios'" :color="props.color" />
            </paquetePremium>
        </div>
    </section>
</template>

<script setup>
    import paquetePremium from '../reutilizable/design/paquetePremium.vue'
    import iconDobleEdificio from '../reutilizable/icons/_dobleEdificio.vue'
    import iconEdificio from '../reutilizable/icons/_edificio.vue'
    import iconShop from '../reutilizable/icons/_shop.vue'

    name: 'planesPremium'
    components: [paquetePremium, iconShop, iconEdificio, iconDobleEdificio]
    const props = defineProps({
        paquetes: {
            type: Object
        },
        color: {
            type: String,
            default: '#FFB800'
        }
    })
</script>

<style scoped lang="scss"></style>
