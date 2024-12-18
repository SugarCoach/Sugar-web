<template>
    <section class="container-fluid mt-0">
        <h2 class="text-center lone-h2">{{ props.title }}</h2>
        <div class="contenedor-textos d-flex flex-column">
            <imgYtexto
                v-for="item in props.imagenesYtextos"
                :key="item.id"
                :direction="item.id % 2 == 0 ? 'left' : 'right'"
                :imagen="item.img_url"
                :imagen_alt="item.img_alt"
                :title="$t(props.from + '.comoFunciona.imgsYtextos[' + item.id + '].h3')"
                :texto="$t(props.from + '.comoFunciona.imgsYtextos[' + item.id + '].p')"
                :cta="$t(props.from + '.comoFunciona.imgsYtextos[' + item.id + '].ctaBtn')"
                :cta_url="item.cta_url"
                :color="props.color"
                :bg-color="props.bgColor"
            >
                <slot></slot>
            </imgYtexto>
        </div>
    </section>
</template>

<script setup>
    import imgYtexto from '../design/imgYtexto.vue'

    name: 'nosotros'
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        imagenesYtextos: {
            type: Object,
            required: true
        },
        from: {
            type: String
        },
        color: {
            type: String,
            default: 'blue'
        },
        bgColor: {
            type: String
        }
    })
</script>

<style scoped lang="scss">
    .contenedor-textos {
        gap: 65vh;
    }
</style>
