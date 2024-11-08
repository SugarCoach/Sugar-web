<template>
    <section class="text-white">
        <div class="mejorar-container bg-primary bg-opacity-75 p-3 p-sm-4 d-flex align-items-end position-relative">
            <div class="h-100 position-relative">
                <span class="cuadrado position-absolute rounded-2"></span>
                <img src="../../../public/contenido/11-Niños-con-SC.webp" alt="Niño usando app de SugarCoach"
                    class="align-self-start rounded-2 position-relative">
            </div>

            <div class="text d-flex flex-column gap-4 gap-md-3 h-100 justify-content-center">
                <div class="">
                    <h2>¡Mejora tu experiencia!</h2>
                    <p class="w-75">Analiza tus datos, conoce tu historial medico, enterate de las novedades y
                        mucho más.</p>
                </div>
                <div class="d-flex gap-2 gap-sm-4 mb-2 align-items-center">
                    <ctaBtn class="rounded-pill cta-btn">
                        <iconCorona width="25px" height="25px" color="white" class="me-sm-2 vertical-align-top" />
                        Obten Premium
                    </ctaBtn>
                    <descargarApp :size="screenWidth <= 570 ? '110px' : '150px' " />
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import ctaBtn from "../reutilizable/ctaBtn.vue";
import descargarApp from "../reutilizable/descargarApp.vue";
import iconCorona from "../reutilizable/icons/_corona.vue";
import { ref, onMounted, onUnmounted } from 'vue';
name: 'mejorarExperiencia';
components: [descargarApp, ctaBtn, iconCorona];

const screenWidth = ref(window.innerWidth);
const updateDimensions = () => {
    screenWidth.value = window.innerWidth;

};

onMounted(() => {
    window.addEventListener('resize', updateDimensions);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions);
});
</script>

<style scoped lang="scss">
$img-radius: 50px;

.mejorar-container {
    border-top-left-radius: $img-radius;
    height: 270px;

    .text {
        margin-left: 7%;

        h2 {
            font-size: 2rem;
        }

        .cta-btn {

            line-height: 13px;
        }
    }

    img {
        aspect-ratio: 7/9;
        object-fit: cover;
        object-position: right;
        height: 150%;
        max-width: 40vw;
        object-fit: cover;
        border-top-left-radius: $img-radius !important;
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

}

@media only screen and (max-width: 575px) {
    .mejorar-container {
        .text {
            margin-left: 4%;
        }

        img {
            height: 120%;
            aspect-ratio: 6/9;
        }
    }
}
@media only screen and (max-width: 440px) {
    .mejorar-container {
        height: 250px;
        .text {
            margin-left: 4%;
        }

        img {
            height: 100%;
            aspect-ratio: 5/9;
        }
    }
}
</style>