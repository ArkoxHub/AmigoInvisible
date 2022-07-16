<script setup>
import { useFetch } from '../features/fetch.js'

const url = import.meta.env.VITE_API_URL + '/getDraw/' + '62d2c909f84a973f386fae48'
const { data, error } = useFetch(url)
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