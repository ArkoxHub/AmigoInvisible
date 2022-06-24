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
    <h1>Cookies</h1>
    <p>Estamos trabajando actualmente en ofrecerte esta sección.</p>
    <!-- TODO CREATE COOKIES PAGE -->
</template>

<style scoped>
p {
    margin-bottom: 2rem;
}
</style>