<template>
    <header>
        <nav
            class="navbar navbar-expand-md navbar-white shadow position-sticky w-100 top-0"
            aria-label="Fourth navbar example"
            :style="`background-color: ${props.bgColor};`"
        >
            <div class="container-fluid">
                <a class="navbar-brand space-left m-0" href="/">
                    <sugarlogo size="60px" class="" />
                </a>
                <button
                    class="navbar-toggler bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse flex-column justify-content-center align-items-end gap-1" id="navbarsExample04">
                    <div class="d-flex gap-3 flex-column-reverse flex-md-row pe-3">
                        <div class="d-flex gap-1">
                            <span v-for="link in policy" :key="link.id" class="font-smallest gap-1 d-flex align-items-center">
                                <router-link :to="link.url" class="text-black text-opacity-50 fw-normal" :style="`color: ${props.color}!important;`">
                                    {{ $t('nav.policy[' + link.id + ']') }}
                                </router-link>
                                <span v-if="link.id == 0" class="text-black text-opacity-50" :style="`color: ${props.color}!important;`">|</span>
                            </span>
                        </div>
                        <languageSelector :color="props.color" />
                    </div>
                    <ul class="navbar-nav mb-2 mb-md-0 gap-3 pe-1 pe-lg-5">
                        <li v-for="link in nav" :key="link.id" class="nav-item fw-medium">
                            <!-- <a v-if="!link.isView" class="nav-link" aria-current="page" :href="link.url" :style="`color: ${props.color}!important;`">{{ $t('nav.links['+ link.id +']') }}</a> -->
                            <!-- <router-link v-if="link.id != 4" :to="link.url" class="nav-link" :style="`color: ${props.color}!important;`">
                                {{ $t('nav.links[' + link.id + ']') }}
                            </router-link> -->
                            <LinkComponent
                                v-if="link.id != 4"
                                class="nav-link"
                                :style="`color: ${props.color}!important;`"
                                :type="$t('nav.links[' + link.id + ']')"
                                :url="link.url"
                                :is-view="link.isView"
                            />

                            <router-link v-else :to="link.url" class="nav-link gap-1 color-premium fw-bold premium-link">
                                Premium<iconCorona class="corona" width="25px" height="25px"></iconCorona>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import iconCorona from './reutilizable/icons/_corona.vue'
    import sugarlogo from './reutilizable/icons/sugarLogo.vue'
    import languageSelector from './reutilizable/utils/languageSelector.vue'
    import LinkComponent from './reutilizable/utils/linkComponent.vue'

    name: 'sugarHeader'
    components: {
        sugarlogo, iconCorona, languageSelector
    }
    const props = defineProps({
        bgColor: {
            type: String
        },
        color: {
            type: String
        }
    })
    const nav = [
        {
            url: '/#nuestra_app',
            isView: false,
            id: 0
        },
        {
            url: '/#comunidad',
            isView: false,
            id: 1
        },
        {
            url: '/About',
            isView: false,
            id: 2
        },
        {
            url: '/anunciantes',
            isView: true,
            id: 3
        },
        {
            url: '/premium',
            isView: true,
            id: 4
        }
    ]
    const policy = [
        {
            name: 'Politica de privacidad',
            url: '/privacy',
            id: 0
        },
        {
            name: 'Terminos y condiciones',
            url: '/Terminos y condiciones',
            id: 1
        }
    ]
</script>

<style scoped lang="scss">
    $transition: 0.3s;
    .premium-link {
        transition: $transition;

        .corona {
            transition: $transition;
        }

        &:hover {
            color: #0047ff !important;

            .corona {
                filter: invert(1);
            }
        }
        &:focus {
            color: #ffb800;
        }
    }
</style>
