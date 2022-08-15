<script setup>
import { getData } from '../services/ArkoxAPIPromise.js';
import { postData } from '../services/ArkoxAPI.js';
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router';
import ListParticipantsWishList from '../components/ListParticipantsWishList.vue';

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
        <!-- Lists Paraticipant's Wishlist -->
        <ListParticipantsWishList
            :draw="data"
            :participantLogged="route.params.participantId"
            @update-wishlist="updateWishList"
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

.image-wishlist {
    width: 150px;
    margin-top: 45px;
}
</style>