<template>
    <section id="testimonios">
        <h2 class="m-auto m-0 mb-2">Testimonios</h2>
        <div class="position-relative testimonios-container">
            <div class="p-2 position-absolute left m-1 m-sm-5" @click="move('left')">
                <div
                    class="arrow rounded-circle d-flex justify-content-center align-items-center">
                    <iconArrow  class="icon" />
                </div>
            </div>
            <testimonio v-for="item in testimonios" :key="item.id" class="testimonio" :class="'t'+item.className" :user="item.user" :opinion="item.opinion" :stars="5" :size="'lg'" />
            <div class="p-2 position-absolute right m-1 m-sm-5" @click="move('right')">
                <div
                    class=" arrow rounded-circle d-flex justify-content-center align-items-center">
                    <iconArrow class="icon" />
                </div>
            </div>
            
        </div>
        <!-- <div class="d-flex justify-content-center gap-5 align-items-center mt-5">
            <input v-for="index in 6" :key="index"type="radio" :checked="index == 1 ? true:false" name="select-testimonio">
        </div> -->
    </section>
</template>

<script setup>
import iconArrow from '../reutilizable/icons/_arrow.vue';
import testimonio from '../reutilizable/design/testimonio.vue';
import { ref } from 'vue';

name: 'testimonios';
components: [testimonio, iconArrow]
const testimonios = ref([
    {
        className: 1,
        user: 'Pablo',
        opinion: 'Buenisimaaaaa',
        id: 0
    },
    {
        className: 2,
        user: 'Pablo',
        opinion: 'me gusta esta app',
        id: 1
    },
    {
        className: 3,
        user: 'Pablo',
        opinion: 'buena',
        id: 2
    },
    {
        className: 4,
        user: 'Pablo',
        opinion: 'Muy buena aplicación',
        id: 3
    },
    {
        className: 5,
        user: 'Pablo',
        opinion: 'Increible',
        id: 4
    },

    {
        className: 6,
        user: 'Pablo',
        opinion: 'La mejor app que use',
        id: 5
    },
]);
const move = (direction) => {
    var value;
    var last;
    var notLast;
    if (direction === 'left'){
        value = 1;
        last = 6;
        notLast = 1;

    }
    else{
        value = -1;
        last = 1;
        notLast = 6;
    }
    testimonios.value.map((x) => {
        if (x.className != last){
            x.className += value;
        }
        else{
            x.className = notLast;
        }
    })
}
</script>

<style scoped lang="scss">
$transform: 18vw;
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
        .t1, .t2, .t3, .t4, .t5, .t6{
            transition: 1s;
            margin: 0 auto;
        }
        .t2, .t1 {
            transform: translateX($transform);
            scale: 0.7;
        }

        .t5, .t4 {
            transform: translate(-$transform);
            scale: 0.7;
        }
        .t3, .t6{
            transform: translate(0);
        }
        .t6, .t1, .t5{
            opacity: 0;
        }
        .t3{
            z-index: 99;
        }
        .left {
            left: 0;
            top: 45%;
            cursor: pointer;
        }
        .right {
            right: 0;
            top: 45%;
            transform: rotate(180deg);
            cursor: pointer;
        }
        .arrow {
            min-width: 32px;
            width: 6vw;
            max-width: 50px;
            aspect-ratio: 1/1;
            background: linear-gradient(30deg, #ffffff 0%, #b23abbf3 64%);
            
            

            

            .icon {
                filter: drop-shadow(-2px -1px 3px #ffffffbe) drop-shadow(2px 1px 4px #00000083);
            }
        }
    }


}
</style>