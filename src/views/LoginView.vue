<template>
    <div class="container">
        <div class="container-title">
            <h4 class="text-center">Iniciar Sesión</h4>
        </div>
        <div class="container-form">
            <form @submit.prevent="store">
                <div class="display-flex flex-row align-item-center mt-10-px">
                    <label for="email" class="form-label">
                        Correo electrónico
                    </label>
                    <div class="content-input-email">
                        <input  class="form-control" id="email"
                        type="email"
                        autocomplete="off"
                        v-model="form.username" required
                           >
                    </div>

                </div>

                <div class="display-flex flex-row align-item-center mt-10-px">
                    <label for="password" class="form-label">
                        Contraseña
                    </label>
                    <div class="content-input-email">
                        <input type="password" class="form-control" id="password"
                            v-model="form.password"
                            required
                            >
                    </div>
                </div>

                <div class="display-flex flex-row align-item-center mt-10-px">
                    <button class="btn-dorado">
                        Iniciar  Sesión
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { URL_API } from '@/utils/constants';
import { getToken, setToken, setUser } from '@/utils/store';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
    username: "test@example.com",
    password: "password",
});
const router = useRouter();

onMounted(() => {
    const TOKEN = getToken();
    if (TOKEN) {
        router.push('/')
    }
});

function store() {
    axios.post(`${URL_API}login`, {
        email: form._value.username,
        password: form._value.password
    })
    .then(response => {
        //console.log(response.data)
        if (response.data) {
            const token = response.data.token;
            delete response.data.token;
            setUser(response.data);
            setToken(token);
            router.push("/");
        } else {
            alert("Insuficiente data");
        }

    }).catch(error => {
        console.error(error.response);
        alert("Datos incorrectos.")
    })
}
</script>

<style scoped>
.container {
    margin: 25px 0;
}

.container-title {}

.align-item-center {
    align-items: center;
    justify-content: center;
}

.form-label {
    flex: 0 0 auto;
    width: 16.6667%;

    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}

.content-input-email {
    flex: 0 0 auto;
    width: 40%;
    margin-left: 0.4rem;
}
</style>