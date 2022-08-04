<script setup>
import { getData } from '../services/ArkoxAPI.js'

onMounted(() => {
    window.scrollTo(0, 0);
})

const url = import.meta.env.VITE_API_URL + '/getDraw/' + '62d2c909f84a973f386fae48'
const { data, error } = getData(url)
</script>

<template>
    <h1 class="main-title">Lista deseos privada</h1>

    <!-- Show error -->
    <div v-if="error">
        <p>Error: {{ error }}</p>
    </div>
    <!-- Show data -->
    <div v-else-if="data">
        Data lodaded: <pre>{{ data }}</pre>
    </div>
    <!-- Show loading data -->
    <div v-else>
        <div id="spinner"></div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
</style>