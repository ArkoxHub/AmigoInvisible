<script setup>
import { onMounted, ref, reactive } from 'vue'
import BaseInput from '../components/form/BaseInput.vue';

const props = defineProps({
    title: String,
    required: false
})

onMounted(() => {
    window.scrollTo(0, 0);
})

const inputParticipant = ref('')
const state = reactive({
    validationErrorMessage: "",
})
</script>

<template>

<h1 class="main-title">Recuperación sorteos</h1>

<h2>Recupera los datos de los sorteos realizados anteriormente introduciendo el código de un participante para que puedas volver sortearlo.</h2>

<div class="wishlist-container">
    <BaseInput 
        classLabel="span-color" 
        label="Introduce el código del participante." 
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
                <span>Obtener sorteo</span>
        </button>
    </div>
</div>

<div class="wishlist-text-container">
    <ul>
        <li class="styled-li">En caso de que un participante no haya recibido el e-mail y quieras volver a realizar el sorteo; esta herramienta te permitirá obtener los datos introducidos previamente y volver a cursarlo.</li>
        <li class="styled-li">Revisa que todos los participantes tengan bien introducido su e-mail.</li>
        <li class="styled-li">También podrás usar el servicio para volver a realizar el sorteo la próxima vez que lo necesites.</li>
    </ul>
</div>

<div class="center-container mt-2">
    <img src="../assets/images/party.png" alt="Amigos en una celebración" class="image-medium" />
</div>
</template>

<style scoped>
p {
    margin-bottom: 2rem;
}

</style>