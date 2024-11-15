<template>
    <section class="position-relative overflow-hidden">
        <div class="rounded-circle d-top bg-white position-absolute"></div>
        <slot></slot>
        <div class="rounded-circle d-bottom bg-white position-absolute"></div>
    </section>
</template>

<script setup>
name: "sectionDividers";
const props = defineProps({
    img_url: {
        type: String,
    },
    img_alt: {
        type: String,
    }
});
</script>

<style scoped lang="scss">
@mixin divider ($place) {
    $dHeight: 60vh;
    width: 120%;
    height: $dHeight;
    left: -10%;

    @if ($place =='top') {
        top: calc($dHeight/2) * (-1);
    }

    @else {
        bottom: calc($dHeight/2) * (-1);
    }
}

section {
    padding-top: 23rem;
    padding-bottom: 23rem;
    min-height: 1000px;
    height: auto;
    background-color: #f6f6f6;

    .d-top {
        @include divider('top')
    }

    .d-bottom {
        @include divider('bottom')
    }
}
</style>