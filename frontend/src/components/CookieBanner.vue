<template>
    <div class="banner position-fixed bottom-0 w-100">
        <iconCookie size="35px"/>
        <p class="fw-medium text-black lead">
            {{ $t('cookies.p') }}
        </p>
        <div class="d-flex gap-4 w-100 justify-content-center align-items-center">
            <button type="button" class="btn text-light btn-info fw-bold">{{ $t('cookies.accept') }}</button>
            <button type="button" class="btn text-light btn-info fw-bold">{{ $t('cookies.decline') }}</button>
        </div>
    </div>
</template>

<script setup>
    import iconCookie from './reutilizable/icons/_cookie.vue'
    name: 'CookieBanner'
    // const emits = defineEmits('useCookies')
    // const banner = ref(true)
    // onMounted(() => {
    //     if (localStorage.getItem('cookiesDecided')) {
    //         banner.value = false
    //     }
    // })

    // const acceptCookies = () => {
    //     localStorage.setItem('cookiesDecided', true)
    //     localStorage.setItem('cookiesAccepted', true)
    //     banner.value = false
    // }
    // const declineCookies = () => {
    //     localStorage.setItem('cookiesDecided', true)
    //     localStorage.setItem('cookiesAccepted', false)
    //     banner.value = false
    // }
</script>

<style scoped lang="scss">
    .banner {
        background-color: #ffffffe1;
        padding: 20px;
        text-align: center;
        z-index: 999;
        text-wrap: balance;
        box-shadow: 0 -3px 14px -3px rgba(0, 0, 0, 0.3);
        transition: .3s;
        &:hover{
            background-color: #ececec;
        }
    }
</style>
