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
    <h1>Privacidad de datos</h1>
    <p>Estamos trabajando actualmente en ofrecerte esta página.</p>
    <!-- TODO CREATE PRIVACY PAGE -->
</template>

<style scoped>
p {
    margin-top: 2rem;
}
</style>