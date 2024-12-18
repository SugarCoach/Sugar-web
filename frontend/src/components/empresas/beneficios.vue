<template>
    <section>
        <div class="d-flex flex-column align-items-start gap-3">
            <iconYtext align-items="start" v-for="item in 3" :texto="$t('empresas.beneficios.items['+ (item - 1) +'].text')" :title="$t('empresas.beneficios.items['+ (item - 1) +'].title')">

            </iconYtext>
        </div>
    </section>
</template>

<script setup>
    import iconYtext from '../reutilizable/utils/iconYtext.vue';
    name: 'benedicios'
</script>

<style scoped lang="scss">
</style>