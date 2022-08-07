<script setup>
import { onMounted } from 'vue'
import { getData } from '../services/ArkoxAPIPromise.js'
import { useRoute } from 'vue-router'
import router from '../router';

const route = useRoute()

onMounted(() => {
    window.scrollTo(0, 0);
})

const url = import.meta.env.VITE_API_URL + '/getDraw/' + route.params.groupId
const { data, error } = getData(url)

function redirectHome() {
    router.push({ path: '/' })
}
</script>

<template>
    <h1 class="main-title">Lista de deseos privada</h1>

    <!-- Show error -->
    <div v-if="error">
        <p>😿... Error al obtener los datos del grupo.</p>
        <button class="primary-button-link" type="submit" @click="redirectHome()" style="margin-top: 30px;">
            <span>Volver</span>
        </button>
    </div>

    <!-- Show data -->
    <div v-else-if="data">
        <pre> {{ data }}</pre>
    </div>
    
    <!-- Show loading data -->
    <div v-else>
        <div id="spinner"></div>
    </div>
</template>

<style scoped>
</style>