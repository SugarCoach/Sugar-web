<template>
    <div class="fondo rounded-3 position-relative d-flex rounded-5" :class="props.direction">
        <div class="d-flex contenedor-funcionalidad gap-3 gap-sm-0 pt-5 p-3 p-sm-5">
            <div class="celu position-relative mb-2 mb-sm-0">
                <img
                    :src="props.celu_url"
                    alt="Pantalla de la app SugarCoach en un celular"
                    class="position-absolute h-auto"
                    loading="lazy"
                    decoding="async"
                    :width="props.imgW"
                    :height="props.imgH"
                    style="max-width:100%; height:auto;"
                />
                <div class="position-absolute tapa-celu d-none bottom-0"></div>
            </div>

            <div class="text-container">
                <h3>{{ props.title }}</h3>
                <p class="" v-html="purifyHTML(props.texto)"></p>
            </div>
        </div>

        <div v-if="!props.last" class="d-flex gap-4 gap-sm-5 position-absolute tira">
            <div class="t1 h-100"></div>
            <div class="t2 h-100"></div>
        </div>
    </div>
</template>

<script setup>
import DOMPurify from 'dompurify'

const purifyHTML = dirtyHTML => DOMPurify.sanitize(dirtyHTML)

const props = defineProps({
    celu_url: { type: String, required: true },
    direction: { type: String, required: true },
    last: { type: Boolean, default: false },
    title: { type: String },
    texto: { type: String },
    imgW: { type: Number, default: null },
    imgH: { type: Number, default: null }
})
</script>

<style scoped lang="scss">
$top: 3rem;

@mixin screenStyles($size, $aspectRatio) {
    .contenedor-funcionalidad {
        aspect-ratio: $aspectRatio;

        .celu {
            width: $size; /* <- clave: el padre ahora tiene ancho */

            img {
                filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.2));
                margin: 0 auto;
                top: 0;
                width: $size;
            }
        }
    }

    $size: $size/3.2;
    $move-celu: calc((-1) * (3rem + $size));
    $move-all: calc((-1) * $size/2 - 1.5rem);
    $tira-move: 25%;

    &.left {
        margin-right: $move-all;
        .contenedor-funcionalidad {
            flex-direction: row;

            .celu {
                img {
                    left: $move-celu;
                }
            }
            .text-container {
                margin-left: calc($size * 3.2 + $move-celu + 1.5rem);
            }
        }
        .tira {
            right: $tira-move;
        }
    }

    &.right {
        margin-left: $move-all;
        .contenedor-funcionalidad {
            flex-direction: row-reverse;

            .celu {
                img {
                    right: $move-celu;
                }
            }

            .text-container {
                margin-right: calc($size * 3.2 + $move-celu);
            }
        }
        .tira {
            left: $tira-move;
        }
    }
}

.fondo {
    background-color: rgb(248, 248, 248);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2), -10px -10px 15px #ffffff;
    @include screenStyles(290px, 19/10);

    .contenedor-funcionalidad {
        width: 1000px;
        max-width: 80vw;
    }

    .tira {
        height: calc(90vh + 6%);
        bottom: -90vh;

        .t1,
        .t2 {
            width: 6vw;
            max-width: 40px;
        }

        .t1 {
            background: linear-gradient(0deg, #8694b7 0%, #3b4151 64%);
        }

        .t2 {
            background: linear-gradient(0deg, rgba(232, 232, 232, 1) 0%, rgba(135, 145, 171, 1) 64%);
        }
    }

    .text-container {
        margin: auto;
        width: 75%;
        p {
            width: 90%;
        }
    }
}

@media only screen and (max-width: 992px) {
    .fondo {
        @include screenStyles(240px, 7/5);
        .contenedor-funcionalidad {
            width: 650px;
        }
    }
}

@media only screen and (max-width: 768px) {
    .fondo {
        @include screenStyles(190px, 7/5);
        .contenedor-funcionalidad {
            width: 480px;
        }
    }
}

@media only screen and (max-width: 578px) {
    .fondo {
        padding-bottom: 1rem !important;
        margin: 0 !important;

        .contenedor-funcionalidad {
            min-height: 410px;
            aspect-ratio: unset;
            width: 380px;
            max-width: 90vw;
            padding-bottom: 0 !important;
            justify-content: space-between;
            flex-direction: column-reverse !important;
            overflow: hidden;

            .celu {
                position: relative !important;
                width: 100%;
                height: 190px;
                margin: 0 !important;

                img {
                    margin: unset;
                    top: 0;
                    left: calc(50% - 95px) !important;
                    filter: unset;
                    transition: 500ms;
                    transition-delay: 200ms;

                    &:hover {
                        top: -35vh;
                    }
                }

                .tapa-celu {
                    width: 100%;
                    height: 11%;
                    background-color: #f8f8f8;
                    box-shadow: 0 0 20px 20px #f8f8f8;
                    z-index: 100;
                    display: block !important;
                }
            }

            .text-container {
                text-align: center;
                width: 90%;
                margin: 0 auto !important;

                p {
                    margin: 0 auto !important;
                }
            }
        }
    }
}
</style>
