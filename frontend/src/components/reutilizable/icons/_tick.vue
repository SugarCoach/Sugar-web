<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" viewBox="0 0 15 15">
        <path fill="none" :stroke="props.color" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z" />
    </svg>
</template>

<script setup>
name: "iconTick";
const props = defineProps({
    color: {
        type: String,
        default: "#00C8DC",
    },
    size: {
        type: String,
        default: "25px"
    }
});
</script>