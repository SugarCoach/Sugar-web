<template>
    <div class="social-links">
        <ul class="w-100 d-flex gap-3 p-0" :class="justifyContent">
            <li v-for="red in redes" style="list-style: none;">
                <a :href="red.enlace" target="_blank">
                    <img :src="red.url" :alt="red.alt" class="logo-red-social" :class="props.size"
                        style="width: 10vw;max-width: 60px; min-width: 20px;" loading="lazy">
                </a>
            </li>
        </ul>
    </div>

</template>

<script setup>
name: "redesSociales";
const redes = [
    {
        enlace: 'https://www.instagram.com/sugar.coach/',
        url: '../../../contenido/instagram-logo.webp',
        alt: 'Instagram',
        id: 0
    },
    {
        enlace: 'https://www.facebook.com/SugarCoachApp',
        url: '../../../contenido/facebook-logo.webp',
        alt: 'Facebook',
        id: 1
    },
    {
        enlace: 'https://twitter.com/sugarcoachapp',
        url: '../../../contenido/x-logo.webp',
        alt: 'X',
        id: 2
    },
    {
        enlace: 'https://www.youtube.com/@sugarcoachproject3630',
        url: '../../../contenido/youtube-logo.webp',
        alt: 'Youtube',
        id: 3
    },
    {
        enlace: 'https://www.tiktok.com/@sugar.coach',
        url: '../../../contenido/tiktok-logo.webp',
        alt: 'Tiktok',
        id: 4
    },
];
const props = defineProps({
    size: {
        type: String,
        default: "lg"
    },
    justify: {
        type: String,
        default: "center"
    }
});
const justifyContent= `justify-content-${props.justify}`;
</script>

<style scoped lang="scss">
.logo-red-social {
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    scale: 1;
    transition: 300ms;

    &.md {
        width: 40px!important;
    }
    &.lg{
        width: 10vw;
        max-width: 60px;
        min-width: 20px;
    }

    &:hover {
        scale: 1.2;
        transition: 0.3s;
    }
}
</style>
