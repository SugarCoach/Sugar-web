<template>
    <div class="" :style="`background-color: ${props.bgColor};`">
        <footer class="pt-5 container-md">
            <div class="d-flex justify-content-between gap-2 flex-wrap">
                <div class="mb-3 logo">
                    <sugarLogo size="120px"></sugarLogo>
                </div>
                <div class="d-flex gap-5 justify-content-start justify-content-sm-end sections flex-wrap">
                    <div class="">
                        <h3 class="fw-bold fs-5" :style="`color: ${props.color}!important;`">{{ $t('footer[0].title') }}</h3>
                        <descargarApp />
                    </div>
                    <div v-for="item in sections" :key="item.id" class="">
                        <h3 class="fw-bold fs-5" :style="`color: ${props.color}!important;`">{{ $t('footer['+ item.id +'].title') }}</h3>
                        <ul class="nav flex-column" >
                            <li v-for="link in item.links" :key="link.id" class="nav-item mb-2">
                                <router-link v-if="link.isView" :to="link.url" class="nav-link p-0 text-body-secondary fw-semibold" :style="`color: ${props.color}!important;`">
                                    {{$t('footer['+ item.id +'].links['+ link.id +']') }}
                                </router-link>
                                <a v-else aria-current="page" :href="link.url" class="nav-link p-0 text-body-secondary fw-semibold" :style="`color: ${props.color}!important;`">
                                    {{ $t('footer['+ item.id +'].links['+ link.id +']') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between py-3 mt-4 sub-footer flex-wrap">
                <p class="d-flex align-items-center" :style="`color: ${props.color}!important;`">&copy; 2024 SugarCoach Diabetes Premium, Inc.</p>
                <redesSociales size="md" justify="end" />
            </div>
        </footer>
    </div>
</template>
<script setup>
    import descargarApp from './reutilizable/utils/descargarApp.vue'
    import sugarLogo from './reutilizable/icons/sugarLogo.vue'
    import redesSociales from './reutilizable/utils/redesSociales.vue'

    name: 'sugarFooter'
    components: [descargarApp, sugarLogo, redesSociales]
    const props = defineProps({
        bgColor: {
            type: String
        },
        color: {
            type: String,
            default: '#000000'
        }
    })
    const sections = [
        {
            section: 'SugarCoach',
            links: [
                {
                    url: '/',
                    isView: true,
                    id: 0
                },
                {
                    url: '/about',
                    isView: true,
                    id: 1
                },
                {
                    url: '/contacto',
                    isView: true,
                    id: 2
                },
                {
                    url: '/anunciantes',
                    isView: true,
                    id: 3
                }
            ],
            id: 1
        },
        {
            section: 'Usuarios',
            links: [
                {
                    url: '/premium',
                    isView: true,
                    id: 0
                },
                {
                    url: '/premium#premios',
                    isView: false,
                    id: 1
                },
                {
                    url: '/DiabetesPremiumDeleteAccount',
                    isView: true,
                    id: 2
                }
            ],
            id: 2
        }
    ]
</script>

<style scoped lang="scss">
    footer {
        color: #3e3a9c !important;

        .nav-link {
            color: #3e3a9c !important;
        }

        .logo {
            justify-self: flex-start !important;
        }

        .sub-footer {
            border-top: 1px solid #3e3a9c;
        }
    }
</style>
