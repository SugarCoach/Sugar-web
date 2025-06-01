<template>
	<RouterLink v-if="props.isView === true" :to="props.url" :class="props.className">{{ text }}</RouterLink>
    <a v-else :href="props.url" :class="props.className" >{{ props.type }}</a>
</template>

<script setup>
name: "SesionBtn";
const props = defineProps({
	url:{
		type: String,
		required: true,
	},
    type:{
        type: String,
        default: 'login'
    },
    className:{
        type: String,
    },
    isView:{
        type: Boolean,
        default: false
    }
});
const text = props.type === 'login' ? 'Log in' : props.type === 'register' ? 'Register' : props.type;
</script>

<style scoped lang="scss">
</style>