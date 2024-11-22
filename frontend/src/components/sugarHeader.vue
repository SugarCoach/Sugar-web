<template>
    <nav class="navbar navbar-expand-md navbar-white bg-white shadow position-sticky top-0" aria-label="Fourth navbar example">
        <div class="container-fluid">
            <a class="navbar-brand space-left m-0" href="/">
                <sugarlogo  size="60px" class="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04"
                aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-column justify-content-center align-items-end gap-1"
                id="navbarsExample04">
                <div class="d-flex gap-2">
                    <span v-for="link in policy" :key="link.id" class="font-smallest d-flex gap-2 ">
                        <router-link :to="link.url" class="text-black text-opacity-50 fw-normal">
                            {{ link.name }}
                        </router-link>
                        <span v-if="link.id == 0" class="text-black text-opacity-50">|</span>
                    </span>
                </div>
                <ul class="navbar-nav mb-2 mb-md-0 gap-3 pe-3 pe-lg-5">
                    <li v-for="link in nav" :key="link.id" class="nav-item fw-medium">
                        <router-link v-if="link.name == 'Premium'" :to="link.url"
                            class="nav-link gap-1 color-premium fw-bold premium-link">
                            {{ link.name }}<iconCorona class="corona" width="25px" height="25px"></iconCorona>
                        </router-link>

                        <router-link v-else-if="link.isView" :to="link.url" class="nav-link">
                            {{ link.name }}
                        </router-link>
                        <a v-else class="nav-link" aria-current="page" :href="link.url">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import iconCorona from "./reutilizable/icons/_corona.vue";
import sugarlogo from "./reutilizable/icons/sugarLogo.vue";
name: "sugarHeader";
components: {
    sugarlogo, iconCorona
};
const nav = [
    {
        name: "Nuestra App",
        url: "/#nuestra_app",
        isView: false,
        id: 0
    },
    {
        name: "Comunidad",
        url: "/#comunidad",
        isView: false,
        id: 1
    },
    {
        name: "Quienes somos",
        url: "/About",
        isView: false,
        id: 2
    },
    {
        name: "Empresas",
        url: "/empresas",
        isView: true,
        id: 3
    },
    {
        name: "Premium",
        url: "/premium",
        isView: true,
        id: 4
    }
];
const policy = [
    {
        name: "Politica de privacidad",
        url: "/privacy",
        id: 0
    },
    {
        name: "Terminos y condiciones",
        url: "/Terminos y condiciones",
        id: 1
    }
];
</script>

<style scoped lang="scss">
$transition: .3s;

.premium-link {
    transition: $transition;

    .corona {
        transition: $transition;
    }

    &:hover {
        color: #0047ff!important;

        .corona {
            filter: invert(1);
        }
    }
    &:focus {
        color: #FFB800;
    }
}
</style>