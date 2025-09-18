<template>
    <div class="paquete rounded-3 position-relative border border-dark-subtle d-flex flex-column" :class="props.texto ? 'plan-x' : ''">
        <h3 class="w-100 p-4 text-start mb-0 border-bottom border-dark border-opacity-50 px-4 pb-4 h4 d-flex align-items-center" :style="colorText">
        <slot class="icon"></slot>{{ props.title }}
        </h3>

        <div class="d-flex flex-column justify-content-between flex-fill">
        <div class="d-flex flex-column justify-content-start">
            <div class="p-4 py-0 contenedor-text d-flex flex-column" :class="props.texto ? 'border-bottom border-dark border-opacity-50'  : ''">
            <div class="text-start w-100 mb-0 py-3 display-6 fw-medium h4">
                {{ props.price }}<span v-show="props.mensual" class="lead fw-light">/mo</span>
            </div>

            <div class="d-flex flex-fill flex-column justify-content-between" v-if="props.texto">
                <p v-if="props.texto">{{ props.texto }}</p>

                <!-- Botón dentro del bloque de texto -->
                <router-link
                v-if="isInternal"
                :to="props.btnUrl"
                class="btn btn-primary rounded-pill w-100 py-2 mb-2"
                :style="colorBtn"
                >{{ props.textoBtn }}</router-link>
                <a
                v-else
                :href="props.btnUrl"
                class="btn btn-primary rounded-pill w-100 py-2 mb-2"
                :style="colorBtn"
                target="_blank" rel="noopener"
                >{{ props.textoBtn }}</a>
            </div>
            </div>

            <ul class="p-4 text-start w-100 p-0 d-flex flex-column gap-4 mb-3">
            <li v-for="(n, i) in props.beneficios" :key="i">
                <iconTick :color="props.color" /> {{ $t(props.from + '.planes.paquetes[' + props.paqueteId + '].beneficios[' + i + ']') }}
            </li>
            </ul>
        </div>

        <!-- Botón principal (fuera del bloque de texto) -->
        <button
            v-if="!props.texto && props.btnUrl === 'modal'"
            @click="abrirModal"
            :style="colorBtn"
            type="button"
            class="btn btn-primary rounded-pill w-75 py-2 my-3 m-0 m-auto"
            data-bs-toggle="modal"
            data-bs-target="#modal_pago"
        >{{ props.textoBtn }}</button>

        <router-link
            v-else-if="!props.texto && isInternal"
            :to="props.btnUrl"
            class="btn btn-primary rounded-pill w-75 py-2 my-3 m-0 m-auto"
            :style="colorBtn"
        >{{ props.textoBtn }}</router-link>

        <a
            v-else-if="!props.texto && props.btnUrl"
            :href="props.btnUrl"
            class="btn btn-primary rounded-pill w-75 py-2 my-3 m-0 m-auto"
            :style="colorBtn"
            target="_blank" rel="noopener"
        >{{ props.textoBtn }}</a>
        </div>

        <FormularioPago v-if="props.btnUrl === 'modal'" />
    </div>
</template>

<script setup>
    import { computed, onMounted } from 'vue'
    import axios from 'axios'
    import FormularioPago from '../../empresas/FormularioPago.vue'
    import iconCorona from '../icons/_corona.vue'
    import iconGota from '../icons/_gota.vue'
    import iconTick from '../icons/_tick.vue'

    name: 'paquetePremium'

    const abrirModal = () => {
    const $form = document.querySelector('#pay-form')
    $form.addEventListener('submit', event => {
        event.preventDefault()
        const formdata = new FormData($form)
        const data = Object.fromEntries(formdata)
        axios.post(`${process.env.VUE_APP_BACKEND_URL}/pay`, data)
    })
    }

    const props = defineProps({
    title: { type: String, required: true },
    price: { type: String, required: true },
    texto: { type: String, default: '' },            // <-- fix aquí
    beneficios: { type: Number },
    proximamente: { type: Array },
    textoBtn: { type: String, required: true },
    btnUrl: { type: String, required: true },
    color: { type: String, default: '#3F77E3' },
    mensual: { type: Boolean, default: false },
    paqueteId: { type: Number },
    from: { type: String }
    })

    const isInternal = computed(() => props.btnUrl?.startsWith('/'))  // <-- clave

    const colorText = `color: ${props.color};`
    const colorBtn = `background-color: ${props.color}; border-color: ${props.color};`
</script>

<style scoped lang="scss">    
    $padding: 1.5rem;
    $light-gray: rgba(217, 217, 217, 0.2);
    .paquete {
        width: 25.5vw;
        max-width: 360px;
        min-width: 280px;
        background-color: $light-gray;
        h3 {
            width: calc(100% + 2 * ($padding));
            .icon {
                margin-left: -5px;
            }
        }
        p{
            min-height: 5rem;
        }
        .proximamente {
            font-size: 1.4rem;
            border-top: 2px solid black;
            box-shadow: inset 0 5px 15px -7px black;
        }
        .divider {
            width: 100%;
            top: 290px;
        }
        &.plan-x {
            width: 29vw;
            min-width: 295px;
        }
    }
</style>

