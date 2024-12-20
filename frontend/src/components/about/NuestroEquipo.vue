<template>
    <section class="container-lg mt-0">
        <h2 class=" mb-5 pb-5 text-center">{{ $t('sobreNosotros.equipo.h2') }}</h2>
        <div class="d-flex justify-content-center contenedor-integrante flex-wrap m-0 m-auto">
            <integrante
                v-for="item in integrantes"
                :key="item.id"
                :class-name="
                    item.id % 2 != 0 ? 'right flex-md-row-reverse justify-content-md-end' : 'flex-md-row justify-content-md-start left'
                "
                :description="$t('sobreNosotros.equipo.integrantes[' + item.id + '].description')"
                :nombre="item.nombre"
                :rol="$t('sobreNosotros.equipo.integrantes[' + item.id + '].rol')"
                :img_url="item.img_url"
                :img_alt="item.img_alt"
            />
        </div>
    </section>
</template>

<script setup>
    import integrante from '../reutilizable/design/integrante.vue'

    name: 'nosotros'
    components: [integrante]
    const integrantes = [
        {
            img_url: '../../contenido/integrantes/isabel-full.webp',
            img_alt: 'Isabel Berizzo, SugarCoach Founder',
            nombre: 'Isabel Berizzo',
            id: 0
        },
        {
            img_url: '../../contenido/integrantes/veronica-full.webp',
            img_alt: 'Veronica Avendaño, SugarCoach COO',
            nombre: 'Veronica Avendaño',
            id: 1
        },
        {
            img_url: '../../contenido/integrantes/devora-full.webp',
            img_alt: 'Debora Biain, SugarCoach RSE & Relaciones Públicas',
            nombre: 'Debora Biain',
            id: 2
        },

        {
            img_url: '../../contenido/integrantes/agustina-circle.jpg',
            img_alt: 'Agustina Olivo, SugarCoach CM & Content Manager',
            nombre: 'Agustina Olivo',
            id: 3
        },
        {
            img_url: '../../contenido/integrantes/karin-full.webp',
            img_alt: 'Karin Chmiel, SugarCoach Business development',
            nombre: 'Karin Chmiel',
            id: 4
        },


    ]
</script>

<style scoped lang="scss">
    .contenedor-integrante {
        gap: max(15vh, 70px);
    }
</style>
