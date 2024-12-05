<template>
        <main class="mt-5 container">
            <header>
                <h1>{{ $t('politica.header.h1') }}</h1>

                <p v-html="$t('politica.header.p')"></p>
            </header>

            <section v-for="item in 6">
                <h2>{{ $t('politica.sections[' + item + '].h2') }}</h2>
                <p v-if="item != 5" v-html="$t('politica.sections[' + item + '].p')"></p>
                <p v-else>
                    {{ $t('politica.sections[' + item + '].p') }}
                    <a href="https://www.app-privacy-policy.com/app-privacy-policy-generator/">{{ $t('politica.sections[' + item + '].link') }}</a>
                </p>
                <div v-if="item == 1">
                    <p>Google</p>
                    <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
                </div>
            </section>
        </main>
</template>

<script setup>
    import { useHead } from '@vueuse/head'
    name: 'privacyPolicy'
    useHead({
        // Can be static or computed
        title: 'SugarCoach - Privacy Policy',
        meta: [
            {
                name: `description`,
            },
            {
                name: `keywords`,
            },
            {
                name: `robots`,
                content: 'noindex'
            }
        ]
    })
</script>

<style scoped lang="scss">
    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 2.4rem;
    }
    section {
        margin-top: 0;
        padding: 0;
        margin-top: 7vh;
        min-height: unset;
    }
</style>
