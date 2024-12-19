<template>
    <section class="container d-flex flex-column text-center">
        <h2 class="mb-5">{{ $t('sobreNosotros.nuestrosFuertes.h2') }}</h2>
        <div class="d-flex justify-content-center flex-wrap gap-4">
            <fuerte
                v-for="item in fuertes"
                :key="item.id"
                :texto="$t('sobreNosotros.nuestrosFuertes.fuertes[' + item.id + '].p')"
            >
                
                <icon-doctor v-if="item.title === 'fuerte1'" :size="iconSize" color="#00a2ff"/>
                <icon-licensia v-else-if="item.title === 'fuerte2'" :size="iconSize" color="#d400ff"/>
                <icon-incognito v-else-if="item.title === 'fuerte3'" :size="iconSize" color="black"/>
                <corona v-else-if="item.title === 'fuerte4'" :size="iconSize" color="#FFB800" />
            </fuerte>
        </div>
    </section>
</template>

<script setup>
    import fuerte from '../reutilizable/utils/iconYtext.vue'
    import corona from '../reutilizable/icons/_corona.vue'
    import gota from '../reutilizable/icons/_gota.vue'
    import trofeo from '../reutilizable/icons/_trofeo.vue'
    import iconIncognito from '../reutilizable/icons/_incognito.vue'
    import iconLicensia from '../reutilizable/icons/_licensia.vue'
    import iconDoctor from '../reutilizable/icons/_doctor.vue'

    name: 'nuestrosFuertes'
    components: [fuerte, corona, trofeo, gota]
    const fuertes = [
        {
            title: 'fuerte1',
            texto: 'lorem ipsum dolor sit amet, consectet, nisl, sed do eiusmod tempor incididunt ut lab.',
            id: 0
        },
        {
            title: 'fuerte2',
            texto: 'lorem ipsum dolor sit amet, consectet, nisl, sed do eiusmod tempor incididunt ut lab.',
            id: 1
        },
        {
            title: 'fuerte3',
            texto: 'lorem ipsum dolor sit amet, consectet, nisl, sed do eiusmod tempor incididunt ut lab.',
            id: 2
        },
        {
            title: 'fuerte4',
            texto: 'lorem ipsum dolor sit amet, consectet, nisl, sed do eiusmod tempor incididunt ut lab.',
            id: 3
        }
    ]
    const iconSize = '50px'
</script>

<style scoped lang="scss"></style>
