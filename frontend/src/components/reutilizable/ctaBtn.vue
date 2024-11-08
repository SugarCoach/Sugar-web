<template>
	<a :href="props.url" class="btn btn-primary p-2 d-flex align-items-center"><slot></slot></a>
</template>

<script setup>
name: "ctaBtn";
const props = defineProps(["url"]);
</script>

<style scoped lang="scss">
a{
	width: fit-content;
}
</style>
