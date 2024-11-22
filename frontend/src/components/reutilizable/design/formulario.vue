<template>
    <form action="" class="d-flex flex-column gap-5 px-4 pb-5 pt-4 rounded-4">
        <div class="d-flex flex-column gap-4">
            <div v-for="item in inputs" :key="item.id" class="d-flex flex-column">
                <label :for="item.for" class="text-black mb-1 lead fw-normal">{{ item.label }}</label>
                <input v-if="item.type != 'textarea' && item.type != 'submit'" class="form-control message"
                    :name="item.for" :type="item.type" :placeholder="item.placeholder">
                <textarea v-else :name="item.for" id="" :placeholder="item.placeholder"
                    class="form-control message"></textarea>
            </div>
        </div>
        <input type="submit" value="Enviar" class="border-0 enviar p-2 m-auto my-0 rounded-2">
    </form>
</template>

<script setup>
name: 'formulario';
const inputs = [
    {
        type: 'text',
        label: 'Nombre',
        for: 'name',
        placeholder: 'Juan Perez',
        id: 0
    },
    {
        type: 'email',
        label: 'Email',
        for: 'email',
        placeholder: 'juanperez@gmail.com',
        id: 1
    },
    {
        type: 'textarea',
        label: 'Mensaje',
        for: 'mensaje',
        placeholder: 'Hola, queria hacer una consulta acerca de...',
        id: 2
    },
]
</script>

<style scoped lang="scss">
form {
    background-color: #F5F5F5;
    min-width: 300px;
    width: 80%;
    max-width: 430px;
    min-height: fit-content;
    box-shadow: 1px 10px 20px -8px rgba(0, 0, 0, 0.3);

    textarea {
        height: 100px;
        max-height: 15vh;
        resize: none
    }

    input {
        height: 45px;
    }

    .message {
        border: 1px solid rgba(0, 0, 0, 0.4);
        background-color: #FEFEFE;
    }

    .enviar {
        background-color: #444444;
        color: #FEE9E7;
        max-width: 60%;
        width: 200px;
        transition: .2s;

        &:hover {
            background-color: #616161;
            color: #FEE9E7;
        }
    }

}
</style>