<template>
    <div class="paquete p-4 rounded-3 position-relative border border-dark-subtle" :class="props.texto ? 'plan-x' : ''">
        <h3 class="text-start mb-0 border-bottom border-dark border-opacity-50 px-4 pb-4 h4 d-flex align-items-center" :style="colorText"><iconGota :color="props.color" size="40px" class="icon"/>{{ props.title }}</h3>
        <div class="text-start w-100 mb-0 py-3 display-6 fw-medium h4">{{ props.price }}<span v-show="props.mensual" class="lead fw-light">/mo</span></div>
        <div class="mb-3" v-if="props.texto">
            <p v-if="props.texto">{{ props.texto }}</p>
            <a href="" class="btn btn-primary rounded-pill w-100 mb-3 py-2" :style="colorBtn">{{ props.textoBtn }}</a>
            <div class="divider border-bottom position-absolute start-0 border-dark border-opacity-50"></div>
        </div>
        
        <ul class="text-start w-100 p-0 d-flex flex-column gap-4 mb-3 mt-3">
            <li v-for="beneficio in props.beneficios" class=""><iconTick :color="props.color" /> {{ beneficio }}</li>
        </ul>
        <button :style="colorBtn" v-if="!props.texto && props.btnUrl === 'modal'" type="button" class="btn btn-primary rounded-pill w-100 py-2" data-bs-toggle="modal" data-bs-target="#modal_pago">
            {{ props.textoBtn }}
        </button>
        <a  :href="props.btnUrl" v-else-if="!props.texto"  class="btn btn-primary rounded-pill w-100 py-2" :style="colorBtn">{{ props.textoBtn }}</a>
        <!-- Modal -->
        <FormularioPago/>
    </div>
</template>

<script setup>
import FormularioPago from "@/components/empresas/FormularioPago.vue";
import iconCorona from "../icons/_corona.vue";
import iconGota from "../icons/_gota.vue";
import iconTick from "../icons/_tick.vue";
name: "paquetePremium";
components: [
    iconCorona, iconTick, iconGota, FormularioPago
]
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    texto: {
        types: String,
        default: ''
    },
    beneficios: {
        type: Array,
        default: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem", "Lorem"]
        
    },
    textoBtn: {
        type: String,
        required: true,
    },
    btnUrl:{
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#3F77E3"
    },
    mensual: {
        type: Boolean,
        default: false
    }
})
const colorText =  `color: ${props.color};`;
const colorBtn =  `background-color: ${props.color}; border-color: ${props.color};`;
</script>

<style scoped lang="scss">
$padding: 1.5rem;
$light-gray: rgba(217, 217, 217, 0.2);
.paquete {
    width: 22vw;
    max-width: 360px;
    min-width: 260px;
    background-color: $light-gray;
    h3 {
        width: calc(100% + 2 * ($padding));
        margin-left: -$padding;
        .icon{
            margin-left: -5px;
        }
    }
    .divider{
        width: 100%;
    }
    &.plan-x{
        width: 24vw;
        min-width: 285px;
    }
}
</style>