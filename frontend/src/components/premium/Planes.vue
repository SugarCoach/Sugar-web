<template>
    <section>
        <h2 class="text-center lone-h2">Elije tu plan ideal</h2>
        <div class="d-flex justify-content-center gap-5 flex-wrap lone-h2">
            <paquetePremium v-for="item in props.paquetesUsuarios" :key="item.id" :title="item.title"
                :price="item.price" :texto="item.texto" :texto-btn="item.btnText" :beneficios="item.beneficios"
                :color="props.color" :mensual="item.mensual" />
        </div>
        <div class="w-100 d-flex flex-column align-items-center">
            <h3 class="mb-5">¿Eres una empresa?</h3>
            <paquetePremium :title="paqueteEmpresa.title" :price="paqueteEmpresa.price" :texto="paqueteEmpresa.texto"
                :texto-btn="paqueteEmpresa.btnText" :beneficios="paqueteEmpresa.beneficios" :color="props.color"
                :mensual="paqueteEmpresa.mensual" />
        </div>

    </section>

</template>

<script setup>
import paquetePremium from '../reutilizable/design/paquetePremium.vue';

name: "planesPremium";
components: [paquetePremium]
const props = defineProps({
    paquetesUsuarios: {
        type: Object,
    },
    color: {
        type: String,
        default: '#FFB800',
    }
})
const paqueteEmpresa = {
    title: 'Para Empresas',
    price: 'Contactanos',
    texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
    btnText: 'Ir a Empresas',
    beneficios: ['lorem', 'ipsum', 'dolor', 'sit amet', 'consectetur adipis', 'sed do eiusmod tempor incid'],
    mensual: false,
}
</script>

<style scoped lang="scss"></style>
