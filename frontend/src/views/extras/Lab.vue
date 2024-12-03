<template>
    <q-page class="d-flex justify-content-center align-items-center">
        <img class="" style="height: 120vh; max-width: 100vw" src="../../../public/contenido/SugarLab.webp" alt="Infografia SugarCoach" />
    </q-page>
</template>

<script setup>
    import { useHead } from '@vueuse/head'
    name: 'SugarLab'

    useHead({
        // Can be static or computed
        title: 'SugarCoach - Lab',
        meta: [
            {
                name: `description`
            },
            {
                name: `keywords`
            },
            {
                name: `robots`,
                content: 'noindex'
            }
        ]
    })
</script>
