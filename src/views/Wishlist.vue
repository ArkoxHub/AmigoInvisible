<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    title: String,
    required: false
})

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <h1>Lista de deseos</h1>
    <p>Estamos trabajando actualmente en ofrecerte este servicio.</p>
    <p>Aquí podrás crear una lista de regalos y todos los participantes podrán saber que es lo que quieres!</p>
</template>

<style scoped>
p {
    margin-top: 2rem;
}
</style>