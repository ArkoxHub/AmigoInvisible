<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue';
import { getData } from '../services/ArkoxAPI.js'

onMounted(() => {
    window.scrollTo(0, 0);
})

const inputParticipant = ref('')

function getParticipantData() {
    if (inputParticipant.value.trim() === '') {
        alert("Debes introducir un identificador de participante")
        document.getElementsByClassName("full-width")[0].focus()
        return false;
    }

    if (inputParticipant.value) {
        const url = import.meta.env.VITE_API_URL + '/getUserData/' + inputParticipant.value
        const { data, error } = getData(url)
        if (error) {
            console.log(error)
            console.log("error")
        } else if (data) {
            console.log(data.value)
            console.log("data")
        } else {
            console.log("LOADING")
        }
    }
}
</script>

<template>
    <h1 class="main-title">Lista de deseos amigo invisible</h1>

    <h2>Crea una lista de regalos para el sorteo amigo invisible realizado.</h2>
    <div class="wishlist-container">
        <BaseInput classLabel="span-color" label="Introduce el código de participante" placeholder="Ejemplo: 62d2c909f84a973f386fae49" className="full-width" v-model="inputParticipant" />
        <small>Copa y pega el indentificador aquí.</small>
        <div class="center-container-mobile">
            <button @click="getParticipantData($event)" id="button-wishlist" class="primary-button-link" type="text"><span>Ver lista</span></button>
        </div>
    </div>

    <div class="wishlist-text-container">
        <p>Una vez hayas realizado el sorteo del amigo invisible en <router-link to="/" class="span-color">amigoinvisible.net</router-link>, podréis crear una lista para poner las cosas un poco más fáciles de manera completamente anónima.</p>
        <p>Para ello, deberás de introducir a continuación el código que has recibido en tu correo electrónico del sorteo. El código es <span class="span-color">personal e intransferible</span>, cada participante tiene el suyo propio.</p>
        <p>El contenido que verás solo será visible para los participantes de tú sorteo.</p>
    </div>
    
    <div class="center-container">
        <img src="../assets/images/friends.png" alt="Amigos" class="image-medium" />
    </div>
</template>

<script>
import BaseInput from '../components/form/baseinput.vue';

export default {
    components: { BaseInput },
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.wishlist-container {
    border: 1px solid var(--primary-color);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    margin: 1.5rem 0;
}

#button-wishlist {
    margin-top: .5rem;
}

p {
    margin-bottom: 2rem;
}
</style>