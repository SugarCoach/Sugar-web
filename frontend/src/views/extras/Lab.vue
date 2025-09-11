<template>
    <div class="d-flex justify-content-center align-items-center">
        <img
            src="/contenido/sugar-lab.webp"
            alt="Infografía de SugarCoach Lab"
            loading="lazy"
            decoding="async"
            width="800"
            height="2000"
            style="max-width: 100%; height: auto;"
        />
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
