<template>
    <section class="row g-3">
        <div class="col-12 col-md-6">
        <div class="card h-100">
            <div class="card-body d-flex flex-column">
            <h2 class="h5 mb-1">Mensual</h2>
            <div class="fs-4 fw-bold">U$s2.99/mo</div>
            <p class="text-muted mt-2">Pagás mes a mes. Cancelás cuando quieras.</p>
            <button class="btn btn-primary mt-auto" @click="$emit('select', 1)">
                Elegir Mensual
            </button>
            </div>
        </div>
        </div>

        <div v-if="enableAnnual" class="col-12 col-md-6">
        <div class="card h-100 border-primary">
            <div class="card-body d-flex flex-column">
            <div class="small text-primary mb-1">Mejor precio</div>
            <h2 class="h5 mb-1">Anual</h2>
            <div class="fs-4 fw-bold">U$s29.99/yr</div>
            <p class="text-muted mt-2">Un solo pago anual. Acceso Premium todo el año.</p>
            <button class="btn btn-outline-primary mt-auto" @click="$emit('select', 2)">
                Elegir Anual
            </button>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup>
import { enableAnnual } from '@/config/premium.js'

defineEmits(['select'])
</script>
