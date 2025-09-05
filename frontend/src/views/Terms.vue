<template>
    <main class="container py-5">
        <h1 class="mb-4">Términos y condiciones</h1>
        
    </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'
const fecha = new Date().toLocaleDateString('es-AR', { day:'2-digit', month:'2-digit', year:'numeric' })
useHead({
    title: 'SugarCoach - Términos y condiciones',
    meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<style scoped>
.container { max-width: 900px; }
h1 { font-size: 2.25rem; }
h2 { font-size: 1.25rem; margin-top: 1.25rem; }
</style>