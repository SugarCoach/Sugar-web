<template>
    <section id="testimonios">
        <h2 class="m-auto m-0 mb-4">{{ $t('home.testimonios.h2') }}</h2>
        <div class="position-relative testimonios-container">
            <div class="p-2 position-absolute left m-1 m-sm-5" @click="move('left')">
                <div class="arrow rounded-circle d-flex justify-content-center align-items-center">
                    <iconArrow class="icon" />
                </div>
            </div>
            <testimonio
                v-for="item in testimonios"
                :key="item.id"
                class="testimonio"
                :class="'t' + item.className"
                :user="item.name"
                :opinion="item.opinion"
                :stars="item.stars"
            />
            <div class="p-2 position-absolute right m-1 m-sm-5" @click="move('right')">
                <div class="arrow rounded-circle d-flex justify-content-center align-items-center">
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
    import iconArrow from '../reutilizable/icons/_arrow.vue'
    import testimonio from '../reutilizable/design/testimonio.vue'
    import { ref } from 'vue'

    name: 'testimonios'
    components: [testimonio, iconArrow]
    const testimonios = ref([
        {
            className: 1,
            name: 'Tomás G., 12 años.',
            opinion: 'Es como un videojuego, pero cuido mi salud. ¡Y ya gané mi primer premio!',
            stars: 5,
            id: 0
        },
        {
            className: 2,
            name: 'Pedro R., 24 Años',
            opinion:
                'Excelente aplicación para gestionar mis niveles de azúcar. Las alertas y recordatorios son muy útiles, y el soporte al cliente es excepcional.',
            stars: 5,
            id: 1
        },
        {
            className: 3,
            name: 'Santiago M., 40 Años',
            opinion:
                'SugarCoach ha sido un cambio de vida para mí. La interfaz es intuitiva y fácil de usar, y las funciones de seguimiento me ayudan a mantener mi salud bajo control.',
            stars: 5,
            id: 2
        },
        {
            className: 4,
            name: 'Carolina P., 34 años.',
            opinion: 'Con SugarCoach, aprendí a manejar mejor mi diabetes mientras me divertía. ¡Nunca pensé que sería tan fácil!',
            stars: 5,
            id: 3
        },
        {
            className: 5,
            name: 'Cecilia F., 25 Años',
            opinion:
                'Desde que uso SugarCoach, he podido mantener mis niveles de azúcar en sangre estables. La aplicación es muy completa y fácil de usar.',
            stars: 5,
            id: 4
        },
        {
            className: 6,
            name: 'María y Andrés, padres de Lucas (8 años).',
            opinion: 'Como padres, nos da tranquilidad saber que Lucas está motivado para cuidar su diabetes. Es un apoyo increíble.',
            stars: 4,
            id: 5
        }
    ])
    const move = direction => {
        var value
        var last
        var notLast
        if (direction === 'left') {
            value = 1
            last = 6
            notLast = 1
        } else {
            value = -1
            last = 1
            notLast = 6
        }
        testimonios.value.map(x => {
            if (x.className != last) {
                x.className += value
            } else {
                x.className = notLast
            }
        })
    }
</script>

<style scoped lang="scss">
    $transform: 18vw;
    #testimonios {
        height: 85vh;
        h2 {
            width: 64%;
        }
        input {
            transform: scale(1.7);
            accent-color: #b23abb;
            cursor: pointer;
        }

        .testimonios-container {
            vertical-align: middle;
            min-height: 240px;
            .t1,
            .t2,
            .t3,
            .t4,
            .t5,
            .t6 {
                transition: 1s;
                margin: 0 auto;
            }
            .t2,
            .t1 {
                transform: translateX($transform);
                scale: 0.7;
            }

            .t5,
            .t4 {
                transform: translate(-$transform);
                scale: 0.7;
            }
            .t3,
            .t6 {
                transform: translate(0);
            }
            .t6,
            .t1,
            .t5 {
                opacity: 0;
            }
            .t3 {
                position: relative;
                z-index: 99;
            }
            .left {
                left: 0;
                bottom: 30%;
                cursor: pointer;
            }
            .right {
                right: 0;
                bottom: 30%;
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
