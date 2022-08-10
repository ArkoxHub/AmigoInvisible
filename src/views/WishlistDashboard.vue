<script setup>
import { getData } from '../services/ArkoxAPIPromise.js';
import { postData } from '../services/ArkoxAPI.js';
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router';
import ListParticipantsWishList from '../components/ListParticipantsWishList.vue';
import BaseInput from '../components/form/BaseInput.vue';

onMounted(() => {
    window.scrollTo(0, 0);
})

// Fetch draw data from API
const route = useRoute()
const {data, error } = getData(import.meta.env.VITE_API_URL + '/getDraw/' + route.params.groupId)

function redirectToWishlist() {
    router.push({ path: '/lista-de-deseos' })
}
    
const wishlistInput = ref('')
const state = reactive({ validationErrorMessage: ""})

// Add item to participant's wishlist array and update API
function addItemWishList() {

    // Show error message if input is empty
    if (wishlistInput.value.trim() === '') {
        state.validationErrorMessage = "Introduce un regalo"
        document.getElementsByClassName("full-width")[0].focus()
        return false;

    // Get participant from current draw, validate items and send to API
    } else {
        const participant = data.value.participants.find(participant => participant._id == route.params.participantId)

        if (participant.wishlist.length >= 10) {
            state.validationErrorMessage = "Has introducido el máximo de regalos"
            return false;
        } else {
            participant.wishlist.push(wishlistInput.value)
            updateWishList(data.value)
        }
    }
}

function updateWishList(draw) {
    const url = import.meta.env.VITE_API_URL + '/updateDraw'
    const response = postData(url, 'PUT', draw)

    // TODO: Check responses and delete console log
    console.log(response);
}

</script>

<template>
    <h1 class="main-title">Lista de deseos privada</h1>

    <div v-if="error">
        <!-- Redirect to wishlist -->
        <p>...😿¡Oops! Error al obtener la información del sorteo introducido.</p>
        <button 
            @click="redirectToWishlist()"  
            class="primary-button-link error-wishlist-button" 
            type="text">
                <span>Volver</span>
        </button>
    </div>

    <div v-else-if="data">
        <!-- ADD GIFT CONTAINER -->
        <div class="add-wishlist-container">
            <BaseInput 
                label="¡Añade aquí los regalos que quieras añadir tu lista!"
                placeholder="Por ejemplo: 'Libro un mundo nuevo ahora'"
                classLabel="span-color" 
                className="full-width" 
                v-model="wishlistInput"
                :errorLabel="state.validationErrorMessage"
                minLenght="3"
                maxLength="50"
                @keydown.enter="addItemWishList()"
            />
            <small>Puedes agregar hasta un máximo de 10 entradas.</small>
            <button 
                @click="addItemWishList()"
                class="primary-button-link" 
                type="text"
            >
                    <span>Añadir</span>
            </button>
        </div>

        <!-- Lists Paraticipant's Wishlist -->
        <ListParticipantsWishList
            :draw="data"
            :participantLogged="route.params.participantId"
        />

        <div class="center-image">
            <img class="image-wishlist" src="../assets/images/regalos.png" alt="Cajas de regalos">
        </div>

    </div>

    <div v-else>
        <div class="spinner"></div>
    </div>
</template>

<style scoped>
.error-wishlist-button {
    margin-top: 20px;
}

.add-wishlist-container {
    margin-top: 2rem;
}

.add-wishlist-container button {
    margin-top: .5rem;
}

.image-wishlist {
    width: 150px;
    margin: auto;
    text-align: center;
}
</style>