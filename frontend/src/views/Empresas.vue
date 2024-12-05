<template>
    <main>
        <heroCircle
            :heading1="$t('empresas.hero.h1')"
            :heading2="$t('empresas.hero.h2')"
            :over-text="$t('empresas.hero.overtext')"
            color="#00C8DC"
            :button-text="$t('empresas.hero.ctaBtn')"
            button_url="#planes-empresas"
            img_url="../../../contenido/nenes-usando-app.jpg"
            img_alt="Foto de niño viendo sus datos en SugarCoach"
        />
        <ImgsYtextos :title="$t('empresas.beneficios.h2')" from="empresas" :imagenesYtextos="imagenesYTextos" color="#00C8DC">
            <iconEdificio color="white" size="23px" />
        </ImgsYtextos>
        <PlanesEmpresas :paquetes="paquetes" color="#00C8DC" />
        <faqs :preguntas="preguntas" from="empresas" />
        <Contactanos />
    </main>
</template>

<script setup>
    import heroCircle from '../components/reutilizable/ui/heroCircle.vue'
    import corona from '../components/reutilizable/icons/_corona.vue'
    import ImgsYtextos from '../components/reutilizable/ui/imgsYtextos.vue'
    import PlanesEmpresas from '../components/empresas/PlanesEmpresas.vue'
    import faqs from '../components/reutilizable/ui/preguntasFrecuentes.vue'
    import Contactanos from '../components/home/Contactanos.vue'
    import iconEdificio from '../components/reutilizable/icons/_edificio.vue'
    import { useHead } from '@vueuse/head'
    // import { defineAsyncComponent } from "vue";
    name: 'Empresas'
    components: [heroCircle, iconEdificio, ImgsYtextos, PlanesEmpresas, faqs, Contactanos]
    useHead({
        // Can be static or computed
        title: 'SugarCoach - Empresas: Consigue opurtunidades de crecimiento para tu empresa mientras apoyas a SugarCoach',
        link: [
            {
                rel: 'canonical',
                href: 'https://sugar.coach/empresas'
            }
        ],
        meta: [
            {
                name: `description`,
                content:
                    'Haz crecer tu empresa y aporta tu granito de arena para el tratamiento contra la diabetes. Accede a beneficios exclusivos que potenciaran tu empresa'
            },
            {
                name: `keywords`,
                content: 'Empresas, Beneficios exclusivos, Apoyar el cuidado contra la diabetes, Suscripción paga, Patrocina'
            }
        ]
    })
    const imagenesYTextos = [
        {
            img_url: 'contenido/8-NiñosconSC.jpg',
            img_alt: 'Equipo de SugarCoach trabajando',
            title: 'Distribuir licencias Premium',
            texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
            cta: '',
            cta_url: '',
            id: 0
        },
        {
            img_url: 'contenido/objetivos.png',
            img_alt: 'Equipo de SugarCoach trabajando',
            title: 'Lista de sponsors',
            texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
            cta: '',
            cta_url: '',
            id: 1
        },
        {
            img_url: 'contenido/integrantes/6.Team.jpg',
            img_alt: 'Equipo de SugarCoach trabajando',
            title: 'Verse en articulos y notas',
            texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
            cta: '',
            cta_url: '',
            id: 2
        },
        {
            img_url: 'contenido/integrantes/11.Team.jpg',
            img_alt: 'Equipo de SugarCoach trabajando',
            title: 'Apoyar a SugarCoach',
            texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nunc non ipsum tincidunt viverra. lorem ipsum dolor sit amet, consectetur adip',
            cta: 'Ver los paquetes',
            cta_url: '#planes-empresas',
            id: 3
        }
    ]
    const paquetes = [
        {
            title: 'Basico',
            price: '$25',
            btnText: 'Comprar',
            btnUrl: 'https://fundrazr.com/campaigns/e2TMf2/pay',
            beneficios: 0,
            mensual: false,
            id: 0
        },
        {
            title: 'Premium',
            price: '$250',
            btnText: 'Comprar',
            btnUrl: 'https://fundrazr.com/campaigns/e2TMf2/pay',
            beneficios: 0,
            mensual: false,
            id: 1
        },
        {
            title: 'Socios',
            price: 'Contactanos',
            btnText: 'Contactar',
            btnUrl: 'modal',
            beneficios: 0,
            mensual: false,
            id: 2
        }
    ]
    const preguntas = [
        {
            pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
            respuesta:
                'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
            identificador: 'One',
            id: 0
        },
        {
            pregunta: '¿lorem ipsum dolor sit amet, consectetur?',
            respuesta:
                'lorem ipsum dolor sit amet, consectetur, con sectetur in vol element par. aliquet in vol element par. aliquet in vol element par. aliquet in',
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
            identificador: 'Four',
            id: 3
        }
    ]
</script>

<style scoped lang="scss"></style>
