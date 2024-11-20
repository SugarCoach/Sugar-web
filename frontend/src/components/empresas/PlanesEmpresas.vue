<template>
    <section>
        <h2 class="text-center lone-h2">Elije tu plan ideal</h2>
        <div class="d-flex justify-content-center gap-5 flex-wrap">
            <paquetePremium v-for="item in props.paquetes" :key="item.id" :title="item.title"
                :price="item.price" :texto-btn="item.btnText" :btn-url="item.btnUrl"  :beneficios="item.beneficios"
                :color="props.color" :mensual="item.mensual"/>
        </div>
    </section>

</template>

<script setup>
import paquetePremium from '../reutilizable/design/paquetePremium.vue';

name: "planesPremium";
components: [paquetePremium]
const props = defineProps({
    paquetes: {
        type: Object,
    },
    color: {
        type: String,
        default: '#FFB800',
    }
})
</script>

<style scoped lang="scss"></style>
