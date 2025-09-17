<template>
    <main>
        <!-- <heroCircle
            heading1="Premium"
            :heading2="$t('premium.hero.h2')"
            color="#FFB800"
            :over-text="$t('premium.hero.overtext')"
            :button-text="$t('premium.hero.ctaBtn')"
            button_url="/premium/checkout"
            img_url="../../../contenido/7-Ninos-con-SC.webp"
            img_alt="Foto de niño ganando puntos en SugarCoach"
        /> -->
        <hero title="Premium" justify="start" :subheading="$t('premium.hero.h2')" filtro="oscuro" button_url="#planes-premium" img="/contenido/7-Ninos-con-SC.webp" >
            <ctaBtn url="/premium/checkout" color="#FFB800" class="cta-btn" class-name="px-4 py-3">
                <iconCorona color="white" size="23px"/>
                {{ $t('premium.hero.ctaBtn') }}
            </ctaBtn>
        </hero>

        <imgsYtextos from="premium" bg-color="#f8f8f8" :title="$t('premium.comoFunciona.h2')" :imagenesYtextos="imagenesYTextos" color="#FFB800">
            <iconTrofeo color="white" size="23px" />
        </imgsYtextos>
        <planes :paquetesUsuarios="paquetes" />
        <premios />
        <faqs :preguntas="preguntas" from="premium" />
        <Contactanos />
    </main>
</template>

<script setup>
    import { defineAsyncComponent, hydrateOnIdle, hydrateOnVisible, hydrateOnInteraction } from 'vue'
    // import heroCircle from '../components/reutilizable/ui/heroCircle.vue'
    import hero from '../components/reutilizable/ui/hero.vue'
    import imgsYtextos from '../components/reutilizable/ui/imgsYtextos.vue'
    import planes from '../components/premium/Planes.vue'
    import premios from '../components/premium/Premios.vue'
    import iconTrofeo from '../components/reutilizable/icons/_trofeo.vue'
    import Contactanos from '../components/home/Contactanos.vue'
    import ctaBtn from '../components/reutilizable/utils/ctaBtn.vue'
    import iconCorona from '../components/reutilizable/icons/_corona.vue'
    const faqs = defineAsyncComponent({
        loader: () => import('../components/reutilizable/ui/preguntasFrecuentes.vue'),
        hydrate: hydrateOnInteraction('click')
    })
    import { useHead } from '@vueuse/head'
    // import { defineAsyncComponent } from "vue";
    name: 'Premium'
    useHead({
        // Can be static or computed
        title: 'SugarCoach - Premium: Accede a más beneficios y funciones por un precio asequible',
        link: [
            {
                rel: 'canonical',
                href: 'https://sugar.coach/premium'
            }
        ],
        meta: [
            {
                name: `description`,
                content:
                    'Mejora tu experiencia con Sugar Coach adquiriendo la versión premium. Accede a beneficios exclusivos para un control aún más efectivo de la diabetes infantil. Descubre todas las funciones y suscríbete hoy.'
            },
            {
                name: `keywords`,
                content: 'Versión premium, Beneficios exclusivos, Mejora en el control de la diabetes, Suscripción paga, Becado, Patrocina'
            }
        ]
    })
    const imagenesYTextos = [
        {
            img_url: '/contenido/ninos-con-app.jpg',
            img_alt: 'Equipo de SugarCoach trabajando',
            cta_url: '',
            id: 0
        },
        {
            img_url: '/contenido/tabla.jpg',
            img_alt: 'Equipo de SugarCoach trabajando',
            cta_url: '',
            id: 1
        },
        {
            img_url: '/contenido/alertas-de-emergencia.webp',
            img_alt: 'Equipo de SugarCoach trabajando',
            cta_url: '',
            id: 2
        },
        {
            img_url: 'cards',
            img_alt: ['Gift card de Fornite', 'Gift card de Minicraft', 'Gift card de Xbox'],
            cta_url: '#premios',
            id: 3
        }
    ]

    const paquetes = [
        {
            title: 'Becado',
            price: 'Free',
            texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
            btnText: 'Obtenlo gratis',
            beneficios: 4,
            mensual: false,
            id: 0
        },
        {
            title: 'Clasico',
            price: 'U$s2.99',
            texto: 'lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et d',
            btnText: 'Pasate a premium',
            beneficios: 7,
            mensual: true,
            id: 1
        }
    ]
    const preguntas = [
        {
            pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
            respuesta:
                'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
            ol: 4,
            identificador: 'One',
            id: 0
        },
        {
            pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
            respuesta:
                'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
            ul: 3,
            identificado: 'Two',
            id: 1
        },
        {
            pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
            respuesta:
                'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
            identificador: 'Three',
            id: 2
        },
        {
            pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
            respuesta:
                'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
            ol: 3,
            identificador: 'Four',
            id: 3
        },
        // {
        //     pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
        //     respuesta:
        //         'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
        //     identificador: 'Five',
        //     id: 4
        // }
    ]
</script>

<style scoped lang="scss"></style>
