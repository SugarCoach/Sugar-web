<template>
	<a :href="props.url" class="btn p-2 d-flex align-items-center gap-2 text-white" :style="`background-color: ${props.color}!important;`"><slot></slot></a>
</template>

<script setup>
name: "ctaBtn";
const props = defineProps({
	url:{
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: "#2482D9"
	}
});
</script>

<style scoped lang="scss">
a{
	width: fit-content;
}
</style>
