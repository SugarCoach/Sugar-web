<template>
    <form id="contact-form" class="d-flex flex-column gap-5 px-4 pb-5 pt-4 rounded-4">
        <div class="d-flex flex-column gap-4">
            <input type="text" name="formId" value="contact-form" class="d-none" />
            <div v-for="item in inputs" :key="item.id" class="d-flex flex-column">
                <label :for="item.for" class="text-black mb-1 lead fw-normal">{{ $t('home.contactanos.inputs[' + item.id + '].label') }}</label>
                <input
                    v-if="item.type != 'textarea' && item.type != 'submit'"
                    class="form-control message"
                    :id="item.for"
                    :name="item.for"
                    :type="item.type"
                    :autocomplete="item.autocomplete"
                    :placeholder="$t('home.contactanos.inputs[' + item.id + '].placeholder')+ item.placeholder"
                />
                <textarea
                    v-else
                    :id="item.for"
                    :name="item.for"
                    id=""
                    :placeholder="$t('home.contactanos.inputs[' + item.id + '].placeholder')"
                    class="form-control message"
                ></textarea>
            </div>
        </div>
        <input type="submit" :value="$t('home.contactanos.enviar')" class="border-0 enviar p-2 m-auto my-0 rounded-2" />
    </form>
</template>

<script setup>
    import { onMounted } from 'vue'
    import axios from 'axios'
    name: 'formulario'

    onMounted(() => {
        const $form = document.querySelector('#contact-form')
        $form.addEventListener('submit', event => {
            event.preventDefault()
            const formdata = new FormData($form)
            const data = Object.fromEntries(formdata)
            console.log(`formdata:\n${JSON.stringify(data)}`)

            axios
                .post(`${process.env.VUE_APP_BACKEND_URL}/submit`, data)
                .then(response => {
                    console.log('Recurso creado con éxito:', response.data)
                })
                .catch(error => {
                    console.error('Error al crear el recurso: ', error)
                })
        })
    })

    const inputs = [
        {
            type: 'text',
            label: 'Nombre',
            for: 'name',
            autocomplete: 'given-name',
            placeholder: '',
            id: 0
        },
        {
            type: 'email',
            label: 'Email',
            for: 'email',
            autocomplete: 'off',
            placeholder: '@gmail.com',
            id: 1
        },
        {
            type: 'textarea',
            label: 'Mensaje',
            for: 'message',
            placeholder: 'Hola, queria hacer una consulta acerca de...',
            id: 2
        }
    ]
</script>

<style scoped lang="scss">
    form {
        background-color: #f5f5f5;
        min-width: 300px;
        width: 80%;
        max-width: 430px;
        min-height: fit-content;
        box-shadow: 1px 10px 20px -8px rgba(0, 0, 0, 0.3);

        textarea {
            height: 100px;
            max-height: 15vh;
            resize: none;
        }

        input {
            height: 45px;
        }

        .message {
            border: 1px solid rgba(0, 0, 0, 0.4);
            background-color: #fefefe;
        }

        .enviar {
            background-color: #444444;
            color: #fee9e7;
            max-width: 60%;
            width: 200px;
            transition: 0.2s;

            &:hover {
                background-color: #616161;
                color: #fee9e7;
            }
        }
    }
</style>
