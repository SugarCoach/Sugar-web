<template>
    <main class="container pt-5 pb-3 checkout-section">
        <h1 class="mb-5 text-center">Sección Premium</h1>

        <div v-if="!plan" class="checkout-wrap d-flex justify-content-center">
            <PlanSelector @select="goWithPlan" />
        </div>

        <div v-else class="card checkout-card mb-0 mx-auto">
            <div class="card-body text-center">
                <p class="lead mb-2">
                    Plan elegido: <strong>{{ planLabel }}</strong>
                </p>
                <p class="text-muted small mb-3">
                    Podés cambiar tu plan antes de confirmar el pago.
                </p>

                <div class="d-flex gap-2 flex-wrap justify-content-center checkout-actions">
                    <button class="btn btn-secondary" @click="clearPlan">Cambiar plan</button>
                    <button class="btn btn-primary" @click="proceed">Continuar</button>
                    <button class="btn btn-outline-success" @click="simulateSuccess">Simular Success</button>
                    <button class="btn btn-outline-danger" @click="simulateError">Simular Error</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PlanSelector from '@/components/premium/PlanSelector.vue'
import { enableAnnual, plans } from '@/config/premium.js'

const route = useRoute()
const router = useRouter()

const plan = computed(() => {
    const p = route.query.plan
    if (p === '1' || p === '2') return p
    return null
})

watchEffect(() => {
    if (plan.value === '2' && !enableAnnual) {
        router.replace({ path: '/premium/checkout', query: { plan: '1' } })
    }
})

const planLabel = computed(() => {
    if (plan.value === '1') return plans.monthly.label
    if (plan.value === '2') return plans.annual.label
    return ''
})

function goWithPlan(p) {
    router.replace({ path: '/premium/checkout', query: { plan: String(p) } })
}

function clearPlan() {
    router.replace({ path: '/premium/checkout' })
}

function proceed() {
    router.push('/premium/success')
}

function simulateSuccess() {
    router.push('/premium/success')
}

function simulateError() {
    router.push('/premium/error')
}
</script>
