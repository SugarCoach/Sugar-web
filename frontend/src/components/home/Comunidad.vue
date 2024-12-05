<template>
    <section id="comunidad" class="d-flex flex-column align-items-center">
        <h2 class="lone-h2">{{ $t('home.comunidad') }}</h2>
        <p >{{ $t('cookies.declinedCookies') }}</p>
        <iframe v-if="false"
            class="w-75"
            src="https://embedsocial.com/api/pro_hashtag/5562a4814a6857e915a898125ca1d6811075269f"
            width="900px"
            height="1200px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
        ></iframe>
    </section>
</template>

<script setup>

    name: 'comunidad'
    // const props = defineProps({
    //     showCommunity:{
    //         type: Boolean,
    //         default: false
    //     }
    // })
    
</script>

<style scoped lang="scss"></style>
