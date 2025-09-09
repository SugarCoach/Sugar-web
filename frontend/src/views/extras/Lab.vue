<template>
    <div class="d-flex justify-content-center align-items-center">
        <img class="" style="height: 120vh; max-width: 100vw" src="/contenido/sugar-lab.webp" alt="Infografia SugarCoach" />
    </div>
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
