<template>
    <div class="d-flex gap-4 gap-md-5 integrante rounded-5 overflow-hidden flex-column show-team" :class="props.className">
        <img loading="lazy" :src="props.img_url" :alt="props.img_alt" class="" />
        <div class="d-flex flex-column gap-1 gap-md-4 pt-md-5 pt-0 p-md-0 p-5 flex-fill">
            <div class="d-flex flex-column">
                <span class="nombre h4">{{ props.nombre }}</span>
                <span class="rol fw-light h4">{{ props.rol }}</span>
            </div>
            <p class="" v-html="props.description"></p>
        </div>
    </div>
</template>

<script setup>
    name: 'integrante'
    const props = defineProps({
        img_url: {
            type: String,
            required: true
        },
        img_alt: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        className: {
            type: String
        },
        description: {
            type: String,
            required: true
        }
    })
</script>

<style scoped lang="scss">
    $padding: 7%;
    .integrante {
        width: 75%;
        background-color: #f7f8f8;
        box-shadow: 3px 5px 10px -5px rgba(0, 0, 0, 0.25);
        &.left {
            padding-right: $padding;
        }
        &.right {
            padding-left: $padding;
        }
        .nombre {
            color: #1c1c1c;
        }
        // p {
        //     width: 75%;
        // }
        img {
            aspect-ratio: 4/6;
            height: 60vh;
            object-fit: cover;
            object-position: top center;
            box-shadow: 0 0 20px 2px rgba(113, 190, 178, 0.7);
        }
    }
    @media only screen and (max-width: 991px) {
        .integrante {
            width: 100%;
            background-color: #f7f8f8;
            box-shadow: 3px 5px 10px -5px rgba(0, 0, 0, 0.25);
        }
    }
    @media only screen and (max-width: 768px) {
        .integrante {
            min-width: 290px;
            width: 72%;
            // p {
            //     width: 100%;
            // }
            &.left {
                padding-right: 0;
            }
            &.right {
                padding-left: 0;
            }
            img {
                height: 35vh;
                aspect-ratio: unset;
            }
        }
    }
</style>
