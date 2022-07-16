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
    <h1 class="main-title">Lista de deseos amigo invisible</h1>
    <h2>Con tu identificación podrás</h2>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
p {
    margin-bottom: 2rem;
}
</style>