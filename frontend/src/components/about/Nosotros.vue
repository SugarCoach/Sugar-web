<template>
    <section id="equipo" class="d-flex justify-content-center align-items-center m-0 w-100">
        <div class="equipo_contenedor d-flex flex-column d-sm-block">
            <div class="container-lg ">
                <!-- <h2 class="text-center mb-5">{{ $t('sobreNosotros.beneficios.h2') }}</h2> -->
                <div class="contenedor-imgtexto p-3 p-sm-4 p-md-5 rounded-4 m-0 m-auto">
                    <img src="/contenido/integrantes/integrantes-equipo.jpg" alt="Equipo" class="img-equipo" loading="lazy" />
                    <h2 class="mb-2">{{ $t('sobreNosotros.beneficios.imgsYtextos[0].h3') }}</h2>
                    <p class="texto pb-4" v-html="$t('sobreNosotros.beneficios.imgsYtextos[0].p')">
                    </p>
                    <!-- Somos un equipo decidido a mejorar la calidad de vida de las familias de niños con <strong>diabetes tipo 1</strong>.
                        SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel. Como muchos padres de niños con
                        <strong>DT1</strong>, ella se dio cuenta que controlar la enfermedad era un trabajo exhaustivo y cambiaba la dinamica para
                        toda la familia <strong>(diabetes 3)</strong>. Por eso pensó en crear una aplicación que no solo resolviera su problema, sino
                        que también pudiera ayudar a otras familias que vivían lo mismo. En 2021, junto a Verónica Aveldaño, nuestra COO lanzaron
                        SugarCoach, un proyecto integral que incluye una App móvil, educativa y de contención para la comunidad de familias con
                        diabetes tipo 1. Queremos darles la bienvenida a SugarCoach, la mejor solución para la diabetes. -->
                </div>
            </div>
        </div>
    </section>
</template>
<script setup></script>
<style scoped lang="scss">
    #equipo {
        margin: 100px auto;
        .contenedor-imgtexto {
            max-width: 95%;
            background-color: #f8f8f8;
            box-shadow: 3px 5px 10px -5px rgba(0, 0, 0, 0.25);
            .img-equipo {
                width: 45%;
                min-width: 310px;
                float: left;
                border-radius: 10px;
                margin-right: 20px;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        #equipo {
            .contenedor-imgtexto {
                .img-equipo {
                    margin: 0 auto;
                    margin-bottom: 15px;
                    width: 100%;
                    min-width: unset;
                    max-width: none;
                }
            }
        }
    }
</style>
