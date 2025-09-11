<template>
    <section id="comunidad" class="d-flex flex-column align-items-center">
        <h2 class="lone-h2">{{ $t('home.comunidad') }}</h2>

        <img
        src="/contenido/logo-sugar-comunidad.png"
        alt="Logo de la comunidad SugarCoach"
        class="comunidad-header mb-4"
        width="131"
        height="131"
        loading="lazy"
        decoding="async"
        />

        <div class="embed-wrapper">
            <iframe
                src="https://embedsocial.com/api/pro_hashtag/5562a4814a6857e915a898125ca1d6811075269f"
                title="Opiniones de la comunidad SugarCoach"
                aria-label="Opiniones de la comunidad SugarCoach"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </section>
</template>

<script setup>
    name: 'comunidad'
</script>

<style scoped lang="scss">
    .comunidad-header{
    max-width: 200px;
    display: block;
    margin: 0 auto px20;
    }

    .embed-wrapper{
    --crop-top: 110px;
    bleed: 40px;
    width: 75%;
    max-width: 900px;
    height: 1200px;
    overflow: hidden;
    border: 0;
    line-height: 0;
    margin: 0 auto;
    }

    .embed-wrapper iframe{
    display: block;
    width: 100%;
    height: calc(1200px + var(--crop-top));
    border: 0;
    transform: translateY(calc(-1 * var(--crop-top)));
    }

    @media (max-width: 768px){
        .embed-wrapper{
            --crop-top: 160px;
            width: 90%;
            height: 1000px;
        }
        .embed-wrapper iframe{
            height: calc(1000px + var(--crop-top));
        }
    }
</style>
