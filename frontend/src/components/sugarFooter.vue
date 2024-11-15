<template>
    <div class="container-md">
        <footer class="py-5">
            <div class="d-flex justify-content-between gap-2 flex-wrap">
                <div class="mb-3 logo">
                    <sugarLogo size="120px"></sugarLogo>
                </div>
                <div class="d-flex gap-5 justify-content-start justify-content-sm-end sections flex-wrap">
                    <div class="">
                        <h5>Descargar</h5>
                        <descargarApp />
                    </div>
                    <div v-for="item in sections" :key="item.id" class="">
                        <h5>{{ item.section }}</h5>
                        <ul class="nav flex-column">
                            <li v-for="link in item.links" :key="link.id" class="nav-item mb-2">
                                <a :href="link.url" class="nav-link p-0 text-body-secondary fw-semibold">{{ link.name
                                    }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between py-3 my-4 sub-footer flex-wrap">
                <p class="d-flex align-items-center">&copy; 2024 SugarCoach Diabetes Premium, Inc.</p>
                <redesSociales size="md" justify="end" />
            </div>
        </footer>
    </div>
</template>
<script setup>
import descargarApp from './reutilizable/utils/descargarApp.vue';
import sugarLogo from './reutilizable/icons/sugarLogo.vue';
import redesSociales from './reutilizable/utils/redesSociales.vue';

name: 'sugarFooter';
components: [descargarApp, sugarLogo, redesSociales]
const sections = [
    {
        section: 'SugarCoach',
        links: [
            {
                name: 'Home',
                url: '#',
                id: 0,
            },
            {
                name: 'Sobre nosotros',
                url: '#',
                id: 0,
            },
            {
                name: 'Contacto',
                url: '/Contacto',
                id: 0,
            },
        ],
        id: 0,
    },
    {
        section: 'Usuarios',
        links: [
            {
                name: 'Premium',
                url: '/Premium',
                id: 0,
            },
            {
                name: 'Premios',
                url: '/Premium#premios',
                id: 0,
            },
            {
                name: 'Borrar cuenta',
                url: '/DiabetesPremiumDeleteAccount',
                id: 0,
            },
        ],
        id: 0,
    }
]
</script>

<style scoped lang="scss">
footer {
    color: #3E3A9C !important;

    a {
        color: #3E3A9C !important;
    }

    .logo {
        justify-self: flex-start !important;
    }

    .sub-footer {
        border-top: 1px solid #3E3A9C;
    }
}
</style>
