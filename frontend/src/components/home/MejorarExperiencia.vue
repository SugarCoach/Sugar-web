<template>
  <section class="text-white">
    <div class="mejorar-container bg-primary bg-opacity-75 gap-2 p-3 p-sm-4 d-flex align-items-center align-items-sm-end position-relative">
      <div class="h-100 position-relative contenedor-img align-self-start">
        <span class="cuadrado position-absolute rounded-2"></span>
        <img
          loading="lazy"
          src="/contenido/11-Ninos-con-SC.webp"
          alt="Niño usando app de SugarCoach"
          class="rounded-2 position-relative"
          width="3922"
          height="4000"
          decoding="async"
        />
      </div>

      <div class="text d-flex flex-column gap-2 gap-md-3 h-100 justify-content-center">
        <div>
          <h2>{{ $t('home.mejorarExperiencia.h2') }}</h2>
          <p class="w-75" v-html="purifyHTML($t('home.mejorarExperiencia.p'))"></p>
        </div>
        <div class="d-flex gap-2 gap-sm-4 mb-2 align-items-center flex-wrap flex-sm-nowrap">
          <ctaBtn class="rounded-pill cta-btn" url="/premium">
            <iconCorona width="25px" height="25px" color="white" class="vertical-align-top" />
            <span v-html="$t('home.mejorarExperiencia.ctaBtn')"></span>
          </ctaBtn>
          <descargarApp :size="screenWidth <= 578 ? '100px' : '125px'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ctaBtn from '../reutilizable/utils/ctaBtn.vue'
import descargarApp from '../reutilizable/utils/descargarApp.vue'
import iconCorona from '../reutilizable/icons/_corona.vue'
import DOMPurify from 'dompurify'
import { ref, onMounted, onUnmounted, defineOptions } from 'vue'

defineOptions({ name: 'MejorarExperiencia' })

const purifyHTML = dirtyHTML => DOMPurify.sanitize(dirtyHTML)

const screenWidth = ref(window.innerWidth)
const updateDimensions = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions)
})
</script>

<style scoped lang="scss">
$img-radius: 7rem;

.mejorar-container {
  border-top-left-radius: $img-radius;
  height: 270px;

  .text {
    margin-left: 7%;

    h2 { font-size: 2rem; }

    .cta-btn { line-height: 13px; }
  }

  img {
    aspect-ratio: 7/9;
    object-fit: cover;
    object-position: right;
    height: 150%;
    max-width: 40vw;
    border-top-left-radius: calc($img-radius - 1.5rem) !important;
    z-index: 50;
  }

  .cuadrado {
    top: -3.5vw;
    right: -10%;
    aspect-ratio: 1/1;
    width: 35%;
    background-color: rgba(8, 8, 85, 0.5);
    z-index: 40;
  }

  h1, h2, h3, p, span {
    text-shadow: 0 2px 3px rgba(0,0,0,.7), 0 0 1px rgba(0,0,0,.35);
  }

  .cta-btn,
  .cta {
    color: #fff !important;
    text-shadow: 0 2px 3px rgba(0,0,0,.7), 0 0 1px rgba(0,0,0,.35);
    outline: none;
  }
  .cta-btn:focus-visible,
  .cta:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 2px;
  }
}

@media only screen and (max-width: 578px) {
  .mejorar-container {
    .text { margin-left: 4%; }
    h2 { font-size: 1.8rem; }
    img {
      height: 120%;
      aspect-ratio: 6/9;
      border-top-left-radius: calc($img-radius - 1rem);
    }
  }
}

@media only screen and (max-width: 440px) {
  .mejorar-container {
    height: fit-content;
    .text { margin-left: 4%; }
    img { aspect-ratio: 6/10; }
  }
}
</style>
