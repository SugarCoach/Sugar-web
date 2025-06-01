<template>
    <section id="nuestra_app">
        <h2 class="text-center lone-h2 h1">{{ $t('home.nuestraApp.h2') }}</h2>
        <div class="screens-container h-100 d-flex flex-column align-items-center">
            <funcionalidadApp
                v-for="item in pantallas"
                :key="item.id"
                :title="$t('home.nuestraApp.pantallas[' + item.id + '].title')"
                :texto="$t('home.nuestraApp.pantallas[' + item.id + '].texto')"
                :celu_url="item.url"
                :direction="item.id % 2 == 0 ? 'right' : 'left'"
                :last="item.id == 3"
            />
        </div>
    </section>
</template>

<script setup>
    import funcionalidadApp from '../reutilizable/design/funcionalidadApp.vue'
    name: 'nuestraApp'
    components: [funcionalidadApp]
    // const purifiedWelcomeMessage = computed(() => proxy.$DOMPurify.sanitize(rawMessage.value))
    const pantallas = [
        {
            url: '/contenido/celu1.png',
            id: 0
        },
        {
            url: '/contenido/celu2.png',
            id: 1
        },
        {
            url: '/contenido/celu3.png',
            id: 2
        },
        {
            url: '/contenido/celu4.png',
            id: 3
        }
    ]
</script>

<style scoped>
    #nuestra_app {
        margin-top: 0;
    }
    .screens-container {
        gap: 90vh;
    }
</style>
