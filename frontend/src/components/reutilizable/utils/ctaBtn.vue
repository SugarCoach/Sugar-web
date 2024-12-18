<template>
	<a :href="props.url" class="btn d-flex align-items-center gap-2 text-white" :style="`background-color: ${props.color}!important;`" :class="className"><slot></slot></a>
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
	},
	className:{
		type: String,
		default: "px-3 py-2"
	}
});
</script>

<style scoped lang="scss">
a{
	width: fit-content;
	transition: .2s;
	&:hover{
		transform: translateY(-3px);
	}
}
</style>
