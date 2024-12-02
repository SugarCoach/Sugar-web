<template>
    <section class="mt-0">
        <h2 class="mb-5 text-center">{{ $t('premium.faqs.h2') }}</h2>
        <div class="accordion w-75 m-0 m-auto" id="accordion">
            <div v-for="item in props.preguntas" :key="item.id" class="accordion-item mb-3 border-top border-dark-subtle rounded-2 shadow-sm">
                <h3 class="accordion-header">
                    <button class="accordion-button fw-medium" :class="item.id == 0 ? '' : 'collapsed'" type="button"
                        data-bs-toggle="collapse" :data-bs-target="'#collapse' + item.id" :aria-expanded="item.id == 0"
                        :aria-controls="'collapse' + item.id">
                        {{ $t( props.from + '.faqs.preguntas['+ item.id +'].pregunta') }}
                    </button>
                </h3>
                <div :id="'collapse' + item.id" class="accordion-collapse collapse" :class="item.id == 0 ? 'show' : ''"
                    data-bs-parent="#accordion">
                    <div class="accordion-body">
                        {{ $t( props.from + '.faqs.preguntas['+ item.id +'].respuesta') }}
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
    }
});
</script>

<style scoped lang="scss">
button {
    height: 75px !important;
    font-size: 1.3rem;
}
</style>
