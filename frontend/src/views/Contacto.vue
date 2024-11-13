<template>
    <q-page class="">
        <main class="m-0">
            <h1 class="text-center mb-5">Contactanos</h1>
            <formulario class="form m-auto m-0 " />
        </main>
    </q-page>
</template>

<script setup>
import formulario from '@/components/reutilizable/formulario.vue';

name: 'contacto';
components: [formulario];
</script>

<style scoped lang="scss">
main {
    margin-bottom: 150px !important;
    margin-top: 100px !important;
}
</style>
