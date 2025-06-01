<template>
    <main>
        <hero
            justify="center"
            img="/contenido/integrantes/10.Team.jpg"
            :title="$t('sobreNosotros.hero.h1')"
            :subheading="$t('sobreNosotros.hero.h2')"
        />
        <Nosotros></Nosotros>
        <!-- <imgsYtextos :title="$t('sobreNosotros.beneficios.h2')" from="sobreNosotros" :imagenesYtextos="imagenesYTextos" /> -->
        <nuestroEquipo />
        <fuertes />
        
        <contacto />
    </main>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue'
    import hero from '../components/reutilizable/ui/hero.vue'
    import fuertes from '../components/about/Fuertes.vue'
    import contacto from '../components/home/Contactanos.vue'
    import Nosotros from '../components/about/Nosotros.vue'
    import imgsYtextos from '../components/reutilizable/ui/imgsYtextos.vue'
    const nuestroEquipo = defineAsyncComponent(() => import('../components/about/NuestroEquipo.vue'))

    import { useHead } from '@vueuse/head'
    name: 'About'

    const imagenesYTextos = [
        {
            img_url: '/contenido/integrantes/integrantes-equipo.jpg',
            img_alt: 'Equipo de SugarCoach trabajando',
            title: 'Somos un equipo',
            texto: 'Somos un equipo decidido a mejorar la calidad de vida de las familias de niños con diabetes tipo 1. SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel. Como muchos padres de niños con DT1, ella se dio cuenta que controlar la enfermedad era un trabajo exhaustivo y cambiaba la dinamica para toda la familia (diabetes 3). Por eso pensó en crear una aplicación que no solo resolviera su problema, sino que también pudiera ayudar a otras familias que vivían lo mismo.',
            cta: '',
            cta_url: '',
            id: 0
        },
    ]
    useHead({
        // Can be static or computed
        title: 'SugarCoach - Sobre Nosotros: Conoce al equipo de SugarCoach',
        link: [
            {
                rel: 'canonical',
                href: 'https://sugar.coach/about'
            }
        ],
        meta: [
            {
                name: `description`,
                content:
                    'Somos un equipo comprometido con la mision de que la diabetes no sea un problema. Conoce nuestra historia, nuestros objetivos y quienes nos integram'
            },
            {
                name: `keywords`,
                content: 'SugarCoach, Equipo, Sobre nosotros, About, Isabel Berizzo, Nuestra historia, Quienes somos, Nuestros fuertes, Integrantes'
            }
        ]
    })
</script>

<style scoped lang="scss"></style>
