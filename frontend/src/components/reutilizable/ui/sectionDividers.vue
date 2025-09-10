<template>
    <div class="position-relative overflow-hidden section-div">
        <div class="rounded-circle d-top bg-white position-absolute"></div>
        <img
            class="position-absolute"
            :src="props.img_url"
            :alt="props.img_alt"
            loading="lazy"
            decoding="async"
            style="max-width:100%; height:auto;"
        />
        <slot></slot>
        <div class="rounded-circle d-bottom bg-white position-absolute"></div>
    </div>
</template>

<script setup>
name: "sectionDividers";
const props = defineProps({
    img_url: {
        type: String,
    },
    img_alt: {
        type: String,
    },
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

.section-div {
    padding-top: 23rem;
    padding-bottom: 23rem;
    min-height: 1000px;
    height: auto;
    background-color: #f6f6f6;

    img{
        top: 11vh;
        filter: drop-shadow(5px 10px 30px rgba(0, 0, 0, 0.25));
        min-width: 140px;
        max-width: 350px;
        width: 30%;
        &.corona{
            top: 10vh;
        }
        &.trofeo{
            top: 14vh;
            transform: rotateZ(-20deg)
        }
    }
    .d-top {
        @include divider('top')
    }

    .d-bottom {
        @include divider('bottom')
    }
}
</style>