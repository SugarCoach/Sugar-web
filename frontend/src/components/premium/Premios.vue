<template>
    <section id="premios" class="pt-0">
        <sectionDividers sectionId="premios" img_url="/contenido/trofeo.png" img_alt="trofeo">
        <div class="d-flex align-items-center justify-content-center mb-5 w-100">
            <h2 class="text-center">{{ $t('premium.premios.h2') }}</h2>
            <trofeo size="50px" color="#FFB800" />
        </div>

        <div class="contenedor-premios d-grid m-0 m-auto pt-4">
            <img
            v-for="item in premios"
            :key="item.id"
            class="m-auto m-0"
            :class="item.className"
            :src="item.url"
            :alt="item.alt"
            loading="lazy"
            decoding="async"
            width="1280"
            height="1280"
            style="height:auto; width:auto; max-width:220px;"
            />
        </div>

        <div class="w-100 d-flex justify-content-center mt-5">
            <router-link class="btn px-5 py-3" :to="{ name: 'PremiumPremios' }">
            {{ $t('premium.premios.ctaBtn') }}
            </router-link>
        </div>
        </sectionDividers>
    </section>
</template>

<script setup>
import trofeo from '../reutilizable/icons/_trofeo.vue'
import sectionDividers from '../reutilizable/ui/sectionDividers.vue'

name: 'premios'
components: [sectionDividers, trofeo]

const premios = [
    { url: '/contenido/tarjeta-fornite.webp', alt: 'Targeta de regalo fornite', id: 0 },
    { url: '/contenido/xbox_card.png', alt: 'Targeta de regalo fornite', className: 'p-2', id: 1 },
    { url: '/contenido/roblox-card.png', alt: 'Targeta de regalo fornite', className: 'p-1', id: 2 },
    { url: '/contenido/netflix_card.png', alt: 'Targeta de regalo fornite', id: 3 },
    { url: '/contenido/steam_card.png', alt: 'Targeta de regalo fornite', id: 4 },
    { url: '/contenido/googleplay_card.png', alt: 'Targeta de regalo fornite', className: 'p-2', id: 5 },
    { url: '/contenido/playstation_card.png', alt: 'Targeta de regalo fornite', id: 6 },
    { url: '/contenido/switch_card.png', alt: 'Targeta de regalo fornite', id: 7 },
    { url: '/contenido/lol_card.webp', alt: 'Targeta de regalo fornite', id: 8 }
]
</script>

<style scoped lang="scss">
h2 {
    color: #ffb800;
}
img {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.5));
}
.contenedor-premios {
    width: 70%;
    grid-template-columns: repeat(auto-fit, minmax(max(23%, 180px), 1fr));
    gap: 32px;
}
button,
a.btn {
    color: white !important;
    width: 220px;
    background-color: #ffb800;
    transition: 0.2s;
}
a.btn:hover {
    background-color: #ffb700be;
}
@media only screen and (max-width: 575px) {
}
</style>
