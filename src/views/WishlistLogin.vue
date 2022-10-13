<script setup>
import router from '../router';
import { onMounted, ref, reactive } from 'vue'
import { fetchData } from '../services/ArkoxAPI.js'
import BaseInput from '../components/form/BaseInput.vue';

onMounted(() => {
    window.scrollTo(0, 0);
})

const inputParticipant = ref('')
const state = reactive({
    validationErrorMessage: "",
})

// Validate input ID participant
function validateParticipantInput() {
    if (inputParticipant.value.trim() === '') {
        state.validationErrorMessage = "Introduce un identificador"
        document.getElementsByClassName("full-width")[0].focus()
        return false;
    }

    if (inputParticipant.value.trim().length != 24) {
        state.validationErrorMessage = "El ID debe tener 24 caracteres"
        document.getElementsByClassName("full-width")[0].focus()
        return false;
    }

    state.validationErrorMessage = ""
    getParticipantData(inputParticipant.value)
}

// API CALL TO GET PARTICIPANT ID DATA
async function getParticipantData(id) {
    const url = import.meta.env.VITE_API_URL + '/getUserData/' + id
    const { data, error } = await fetchData(url)

    if (error.value) {
        state.validationErrorMessage = "Error en la petición"
        return false;
    }

    if (data.value.message == "Participante no encontrado") {
        state.validationErrorMessage = "Participante no encontrado"
        return false;
    }

    // REDIRECT TO DASHBOARD
    const groupId = data.value._id
    const participantId = data.value.participants[0]._id;
    router.push({ name: 'Dashboard lista de deseos amigo invisible', params: { groupId: groupId, participantId: participantId } })
}
</script>

<template>
    <h1 class="main-title">Lista de deseos amigo invisible</h1>

    <h2>Crea o modifica la lista de regalos para el sorteo amigo invisible realizado.</h2>

    <div class="wishlist-container">
        <BaseInput 
            classLabel="span-color" 
            label="Introduce el código de participante" 
            placeholder="Ejemplo: 62d2c909f84a9715gt93gn75" 
            className="full-width" 
            v-model="inputParticipant" 
            @keyup.enter="validateParticipantInput()"
            :errorLabel="state.validationErrorMessage"
        />
        <small>Cópia y pega el código de participante recibido en el e-mail del sorteo aquí.</small>
        <div class="center-container-mobile">
            <button 
                @click="validateParticipantInput()" 
                id="button-wishlist" 
                class="primary-button-link" 
                type="text">
                    <span>Ver lista</span>
            </button>
        </div>
    </div>

    <div class="wishlist-text-container">
        <ul>
            <li class="styled-li">Una vez hayas realizado el sorteo del amigo invisible en <router-link to="/" class="span-color">amigoinvisible.net</router-link>, podréis acceder a una lista en la que cada participante podrá introducir los regalos que le gustaría recibir de manera anónima.</li>
            <li class="styled-li">Inserta el código que has recibido en el correo electrónico del sorteo. El identificador es <span class="span-color">personal e intransferible</span>, cada participante tiene el suyo único.</li>
            <li class="styled-li">El contenido que la lista solo será visible para los participantes del sorteo realizado.</li>
        </ul>
    </div>
    
    <div class="center-container">
        <img src="../assets/images/friends.png" alt="Amigos" class="image-medium" />
    </div>
</template>


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

ul li {
    padding: .5rem 1rem;
}

ul li::before {
    content: "\2022";
    /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: var(--primary-color);
    /* Change the color */
    font-weight: bold;
    /* If you want it to be bold */
    display: inline-block;
    /* Needed to add space between the bullet and the text */
    width: 1em;
    /* Also needed for space (tweak if needed) */
    margin-left: -1em;
    /* Also needed for space (tweak if needed) */
}

p {
    margin-bottom: 2rem;
}
</style>