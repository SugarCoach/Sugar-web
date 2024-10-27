<template>
    <router-link to="/premium" class="nav-link gap-1 color-premium fw-bold">
        Premium<iconCorona width="25px" height="25px" class="color-premium"></iconCorona>
    </router-link>
</template>

<script setup>
import iconCorona from "./icons/_corona.vue";
name: "linkPremium";
components: [
    iconCorona
]
</script>

<style scoped>
</style>