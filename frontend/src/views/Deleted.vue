<template>
    <q-page class="">
        <h1 class="text-center">Su cuenta se borro con exito</h1>
    </q-page>
</template>

<script setup>
    name: 'Deleted'
    setTimeout(function() {
        window.location.replace("/");
    }, 2000);
</script>