<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
        <path :fill="props.color" d="M16 19L5 12l11-7z" />
    </svg>
</template>

<script setup>
name: "iconCorona";
const props = defineProps({
    color: {
        type: String,
        default: "#000000",
    },
    size: {
        type: String,
        default: "25px"
    }
});
</script>

