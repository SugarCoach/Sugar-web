<template>
    <div class="d-flex flex-column align-items-center gap-2" :style="textColor">
        <h4 class="h3 text-center text-black">{{ props.text }}</h4>
        <slot></slot>
    </div>

</template>

<script setup>
name: 'textLink';
const props = defineProps({
    text:{
        type: String,
        required: true,
    },
    color:{
        type: String,
        default: '#000000;',
    }
});
const textColor = `color: ${props.color};`;
</script>

<style scoped lang="scss">
</style>