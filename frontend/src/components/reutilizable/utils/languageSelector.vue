<template>
    <div class="d-flex justify-content-start align-content-center gap-2">
        <span @click="$i18n.locale = 'es'; cheangeLang('es')" :class="classEs" class="" :style="`color: ${props.color}!important;`">ES</span>
        <span @click="$i18n.locale = 'en'; cheangeLang('en')" :class="classEn"  class="" :style="`color: ${props.color}!important;`">EN</span>
    </div>
</template>

<script setup>

import { ref } from 'vue';

name: "languageSelector";
const props = defineProps({
    color: {
        type: String,
    }
})
let selected = ref('es');
let classEs = ref('selected')
let classEn = ref('no-selected')
const cheangeLang = (lang) => {
    if (lang != selected.value){
        let temp = classEn.value;
        classEn.value = classEs.value;
        classEs.value = temp;
        selected.value = lang;
    }
} 
</script>

<style scoped lang="scss">
    .no-selected, .selected{
        font-size: 1.2rem;
        cursor: pointer;
    }
    .selected{
        color: black;
        font-weight: 700;
    }
    .no-selected{
        color: rgb(43, 43, 43);
        font-weight: 300;
    }
</style>