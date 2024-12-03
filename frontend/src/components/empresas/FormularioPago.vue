<template>
    <!-- Modal -->
    <div
        class="modal fade text-bg-secondary"
        id="modal_pago"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered m-auto m-0">
            <div class="modal-content bg-dark" style="box-shadow: 0 0 30px rgb(0, 23, 24); min-width: 40vw">
                <div class="modal-header">
                    <button type="button" data-bs-dismiss="modal" aria-label="Close" class="p-0 border-dark-subtle rounded-3 m-auto me-0 me-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-x-square-fill w-100"
                            viewBox="0 0 16 16"
                            loading="lazy"
                        >
                            <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
                            />
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4 class="h4 w-auto m-0 m-auto mb-2">{{ $t("empresas.planes.h2") }}</h4>
                    <p class="text-start fw-light w-100" v-html="$t('empresas.planes.formularioPago.p')"></p>
                    <form id="pay-form" class="mt-2 clas d-flex flex-column align-items-center">
                        <div class="d-flex flex-column gap-2 w-75 mb-3">
                            <div v-for="item in inputs" :key="item.id" class="w-100">
                                <label :for="item.name" class="text-start d-block mb-1">{{ $t('empresas.planes.formularioPago.inputs['+ item.id +']') }}</label>
                                <input
                                    v-if="item.type != 'date'"
                                    :type="item.type"
                                    :autocomplete="item.autocomplete"
                                    class="form-control m-auto bg-dark-subtle w-100"
                                    :name="item.name"
                                    :placeholder="item.placeholder"
                                />
                                <div v-else class="d-flex justify-content-center gap-3 flex-wrap flex-sm-nowrap">
                                    <input class="flex-fill form-control m-auto bg-dark-subtle" :type="item.type" :name="item.name" />
                                    <input class="flex-fill form-control m-auto bg-dark-subtle" type="time" name="time" />
                                </div>
                            </div>
                        </div>

                        <input type="submit" class="btn btn-outline-secondary w-25 align-self-center" />
                    </form>
                    <p class="mt-3 lead" v-html="$t('empresas.planes.formularioPago.info') + ' admin.team@sugar.coach'"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('empresas.planes.formularioPago.cerrar') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SugarLogo from '../reutilizable/icons/sugarLogo.vue';

    name: 'formularioPago'
    props: ['titulo_plan']
    const inputs = [
        {
            type: 'text',
            name: 'company',
            label: 'Nombre de la empresa',
            placeholder: 'Mercado Libre',
            autocomplete: 'organization',
            id: 0
        },
        {
            type: 'email',
            name: 'email',
            label: 'Email de la empresa',
            autocomplete: 'off',
            placeholder: 'mercadolibre@gmail.com',
            id: 1
        },
        {
            type: 'date',
            name: 'date',
            label: 'Fecha y hora de la reunion',
            autocomplete: 'off',
            placeholder: '',
            id: 2
        }
    ]
</script>

<style>
    .modal-dialog {
        max-width: 88%;
        width: 650px;
    }
    .modal-header,
    .modal-footer {
        height: 50px;
        padding-top: 0 !important;
        padding: 0 !important;
    }
    .lead {
        font-size: 1.1rem !important;
    }
</style>
