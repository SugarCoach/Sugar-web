<template>
    <section class="container py-5">
        <h1>Checkout Premium</h1>
        <p class="lead">Plan elegido: {{ plan }}</p>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const plan = useRoute().query.plan ?? '1'
</script>