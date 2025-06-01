<template>
    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
        <img
            class="img-carta-isa"
            style="height: 100vh"
            src="/contenido/Linktree_Isa.webp"
            alt="Targeta de presentación Isabel Berizzo"
        />
    </div>

    <div class="links-isa d-flex flex-column justify-content-around align-items-center">
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7095142348136865793" target="_blank" class="link-isa"></a>
        <a href="https://www.sugar.coach" target="_blank" class="link-isa"></a>
        <a href="https://www.linkedin.com/company/sugar-coach/" target="_blank" class="link-isa"></a>
        <a href="https://google.com" target="_blank" class="link-isa"></a>
    </div>
</template>

<script setup>
    import { useHead } from '@vueuse/head'
    name: 'IsaLinktree'
    useHead({
        // Can be static or computed
        title: 'SugarCoach - Isabel Berizzo Link Tree',
        meta: [
            {
                name: `description`
            },
            {
                name: `keywords`
            },
            {
                name: `robots`,
                content: 'noindex'
            }
        ]
    })
</script>

<style scoped>
    .links-isa {
        position: absolute;
        top: 11%;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 200px;
        height: 33%;
    }

    .link-isa {
        height: 15%;
        width: 150px;
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        .img-carta-isa {
            object-fit: cover;
        }
    }
</style>
