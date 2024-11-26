<template>
    <div class="d-flex justify-content-start align-content-center gap-2">
        <span @click="$i18n.locale = 'es'; cheangeLang('es')" :class="classEs" class="">ES</span>
        <span @click="$i18n.locale = 'en'; cheangeLang('en')" :class="classEn"  class="">EN</span>
    </div>
</template>

<script setup>

import { ref } from 'vue';

name: "languageSelector";
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
        font-weight: 500;
    }
</style>