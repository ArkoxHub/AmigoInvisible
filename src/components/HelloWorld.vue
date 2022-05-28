<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  percentage: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ percentage }} desarrollado</p>
</template>

<style scoped>
h1 {
  margin-top: 50px;
}

P {
  margin-top: 50px;
}
</style>
