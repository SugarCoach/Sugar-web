<template>
    <main class="container-fluid d-flex align-items-center justify-content-center" style="min-height: 80vh;">
        <div class="text-center w-100">
        <img
            src="/contenido/proximamente.webp"
            alt="Próximamente"            
            class="img-fluid mx-auto d-block"
            style="max-width: 90%; height: auto;"
            loading="eager"
            decoding="async"
        />
        <div class="mt-5">
            <router-link class="btn btn-premium px-5 py-3" :to="{ name: 'Premium' }">
            Volver a Premium
            </router-link>
        </div>
        </div>
    </main>
</template>

<script setup>
</script>

<style scoped lang="scss">
    .btn-premium {
        color: white !important;
        background-color: #ffb800;
        transition: 0.2s;
    }
    .btn-premium:hover {
        background-color: #ffb700be;
    }
</style>
