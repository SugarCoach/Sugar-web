<template>
    <section class="mt-0">
        <h2 class="mb-5 text-center">{{ $t('premium.faqs.h2') }}</h2>
        <div class="accordion w-75 m-0 m-auto" id="accordion">
            <div v-for="item in props.preguntas" :key="item.id" class="accordion-item mb-3 border-top border-dark-subtle rounded-2 shadow-sm" :style="`background-color: ${props.bgColor}; color: ${props.color}!important;`">
                <h3 class="accordion-header">
                    <button class="accordion-button fw-medium" :class="item.id == 0 ? '' : 'collapsed'" type="button" :style="`background-color: ${props.bgColor}; color: ${props.color}!important; fill: white!important;`"
                        data-bs-toggle="collapse" :data-bs-target="'#collapse' + item.id" :aria-expanded="item.id == 0"
                        :aria-controls="'collapse' + item.id">
                        {{ $t( props.from + '.faqs.preguntas['+ item.id +'].pregunta') }}
                    </button>
                </h3>
                <div :id="'collapse' + item.id" class="accordion-collapse collapse" :class="item.id == 0 ? 'show' : ''"
                    data-bs-parent="#accordion">
                    <div class="accordion-body">
                        <p>{{ $t( props.from + '.faqs.preguntas['+ item.id +'].respuesta') }}</p>
                        <ul v-if="props.preguntas[item.id].ul">
                            <li v-for="i in props.preguntas[item.id].ul">{{ $t(props.from + '.faqs.preguntas['+ item.id +'].ul['+ (i - 1) +']') }}</li>
                        </ul>
                        <ol v-if="props.preguntas[item.id].ol">
                            <li v-for="i in props.preguntas[item.id].ol">{{ $t(props.from + '.faqs.preguntas['+ item.id +'].ol['+ (i - 1) +']') }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
name: "faqs";
const props = defineProps({
    preguntas: {
        type: Object,
    },
    from: {
        type: String,
    },
    bgColor: {
        typeof: String,
    },
    color: {
        type: String,
    }
});
</script>

<style scoped lang="scss">
button {
    height: 75px !important;
    font-size: 1.3rem;
}
ul{
    list-style: disc;
}
ol{
    list-style: decimal;
}
</style>
