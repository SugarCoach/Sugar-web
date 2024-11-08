<template>
    <section id="testimonios">
        <h2 class="m-auto m-0 mb-5">Testimonios</h2>
        <div class="position-relative testimonios-container">
            <div
                class="arrow left position-absolute m-3 m-sm-5 rounded-circle d-flex justify-content-center align-items-center">
                <iconArrow class="icon" />
            </div>
            <testimonio class="t1" user="Pablo" opinion="Muy buena aplicación" :stars="3" size="md" />
            <testimonio class="t2" user="Pablo" opinion="Muy buena aplicación" :stars="4" size="md" />
            <testimonio class="m-auto" user="Pablo" opinion="Muy buena aplicación" :stars="5" size="lg" />

            <div
                class="arrow right position-absolute m-3 m-sm-5 rounded-circle d-flex justify-content-center align-items-center">
                <iconArrow class="icon" />
            </div>
        </div>
        <div class="d-flex justify-content-center gap-5 align-items-center mt-5">
            <input v-for="index in 6" :key="index"type="radio" :checked="index == 1 ? true:false" name="select-testimonio">
        </div>
    </section>
</template>

<script setup>
import iconArrow from '../reutilizable/icons/_arrow.vue';
import testimonio from '../reutilizable/testimonio.vue';

name: 'testimonios';
components: [testimonio, iconArrow]
</script>

<style scoped lang="scss">
#testimonios {
    h2 {
        width: 64%;
    }
    input{
        transform: scale(1.7);
        accent-color: #b23abb;      
    }

    .testimonios-container {
        vertical-align: middle;
        .t1 {
            top: 20%;
            left: 18vw;
        }

        .t2 {
            top: 20%;
            right: 18vw;
        }

        .arrow {
            min-width: 35px;
            width: 6vw;
            max-width: 50px;
            aspect-ratio: 1/1;
            background: linear-gradient(30deg, #ffffff 0%, #b23abbf3 64%);
            top: 45%;

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
                transform: rotate(180deg);
            }

            .icon {
                filter: drop-shadow(-2px -1px 3px #ffffffbe) drop-shadow(2px 1px 4px #00000083);
            }
        }
    }


}
</style>