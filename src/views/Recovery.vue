<script setup>
import { onMounted, ref, reactive } from 'vue'
import BaseInput from '../components/form/BaseInput.vue'
import { useRouter, useRoute } from 'vue-router'
import { useDrawStore } from '../stores/DrawStore'
import { fetchData } from '../services/ArkoxAPI.js'

const props = defineProps({
    title: String,
    required: false
})

const drawStore = useDrawStore()
const route = useRoute()
const router = useRouter();

onMounted(() => {
    window.scrollTo(0, 0);

    const drawIdUrl = route.params.id

    if (drawIdUrl) {
        getDrawById(drawIdUrl)
    }
})

const drawInput = ref('')
const state = reactive({
    validationErrorMessage: "",
})

// Validate input ID participant
function validateDrawInput() {
    if (drawInput.value.trim() === '') {
        state.validationErrorMessage = "Introduce un identificador"
        document.getElementsByClassName("input-participant-recovery")[0].focus()
        return false;
    }

    if (drawInput.value.trim().length != 24) {
        state.validationErrorMessage = "El ID debe tener 24 caracteres"
        document.getElementsByClassName("input-participant-recovery")[0].focus()
        return false;
    }

    state.validationErrorMessage = ""
    getDrawById(drawInput.value)
}

async function getDrawById(drawId) {

    const url = import.meta.env.VITE_API_URL + '/getDraw/' + drawId
    const { data, error } = await fetchData(url)

    if (error.value) {
        state.validationErrorMessage = "Error en la petición"
        return false;
    }

    if (data.value.code == 0) {
        state.validationErrorMessage = "Sorteo no encontrado"
        return false;
    }

    if (data.value.code == 1) {
        // Clean all exclude list for each participant and reset date
        data.value.draw.participants.forEach(element => {
            element.exclude = [];
        });
        data.value.draw.date = ''

        drawStore.setDraw(data.value.draw)
        router.push("/")
    }
}
</script>

<template>

<h1 class="main-title">Recuperación sorteos</h1>

<h2>Recupera los datos de los sorteos realizados anteriormente introduciendo el código de un participante para que puedas volver sortearlo.</h2>

<div class="wishlist-container">
    <BaseInput 
        classLabel="span-color" 
        label="Introduce el código del sorteo." 
        placeholder="Ejemplo: 62d2c909f84a9715gt93gn75" 
        className="full-width input-participant-recovery" 
        v-model="drawInput" 
        @keyup.enter="validateDrawInput()"
        :errorLabel="state.validationErrorMessage"
    />
    <small>Cópia y pega el código del sorteo recibido en el e-mail.</small>
    <div class="center-container-mobile">
        <button 
            @click="validateDrawInput()" 
            id="button-wishlist" 
            class="primary-button-link" 
            type="text">
                <span>Obtener sorteo</span>
        </button>
    </div>
</div>

<div class="wishlist-text-container">
    <ul>
        <li class="styled-li">En caso de que un participante no haya recibido el e-mail y quieras volver a realizar el sorteo esta herramienta te permitirá obtener los datos introducidos previamente y volver a cursarlo.</li>
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