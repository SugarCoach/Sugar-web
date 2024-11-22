<template>
    <section id="testimonios">
        <h2 class="m-auto m-0 mb-2">Testimonios</h2>
        <div class="position-relative testimonios-container">
            <div
                class="arrow left position-absolute m-1 m-sm-5 rounded-circle d-flex justify-content-center align-items-center">
                <iconArrow @click="move('left')" class="icon" />
            </div>
            <testimonio v-for="item in testimonios" :key="item.id" class="testimonio" :class="item.className" :user="item.user" :opinion="item.opinion" :stars="5" :size="item.className === 't3' || item.className === 't6' ? 'lg' : 'md'" />

            <div @click="move('right')"
                class="arrow right position-absolute m-1 m-sm-5 rounded-circle d-flex justify-content-center align-items-center">
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
import testimonio from '../reutilizable/design/testimonio.vue';

name: 'testimonios';
components: [testimonio, iconArrow]
const testimonios = [
    {
        className: 't1',
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 0
    },
    {
        className: 't2',
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 1
    },
    {
        className: 't3',
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 2
    },
    {
        className: 't4',
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 3
    },
    {
        className: 't5',
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 4
    },

    {
        className: 't6',
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 5
    },
];
const move = (direction) => {
    if (direction === 'left'){
        testimonios.map()
    }
    else{
        
    }
}
</script>

<style scoped lang="scss">
#testimonios {
    height: auto;
    h2 {
        width: 64%;
    }
    input{
        transform: scale(1.7);
        accent-color: #b23abb;
        cursor: pointer;
    }

    .testimonios-container {
        vertical-align: middle;
        height: 36vw;
        max-height: 400px;
        min-height: 240px;
        .t4, .t5 {
            bottom: 10%;
            left: 18vw;
        }

        .t2, .t1 {
            bottom: 10%;
            right: 18vw;
        }
        .t3, .t6{
            margin: 0 auto;
            
        }
        .t6, .t1, .t5{
            visibility: hidden;
        }
        .arrow {
            cursor: pointer;
            min-width: 32px;
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