<template>
    <main class="container py-5">
        <h1 class="mb-4">Checkout Premium</h1>

        <!-- Caso sin plan -->
        <div v-if="!plan">
        <PlanSelector @select="goWithPlan" />
        </div>

        <!-- Caso con plan -->
        <div v-else class="card">
        <div class="card-body">
            <p class="lead mb-2">Plan elegido: <strong>{{ planLabel }}</strong></p>
            <p class="text-muted small mb-3">Podés cambiar tu plan antes de confirmar el pago.</p>

            <div class="d-flex gap-2 flex-wrap">
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
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import PlanSelector from '@/components/premium/PlanSelector.vue'

    const route = useRoute()
    const router = useRouter()

    const plan = computed(() => {
        const p = route.query.plan
        if (p === '1' || p === '2') return p
        return null
    })

    const planLabel = computed(() => {
        if (plan.value === '1') return 'Mensual – U$s2.99/mo'
        if (plan.value === '2') return 'Anual – U$s29.99/yr'
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
