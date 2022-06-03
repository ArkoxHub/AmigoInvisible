<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <div class="container">
    <router-view></router-view>
  </div>
  <!-- Footer needed -->
</template>

<style>
@import "./css/_variables.css";
@import "./css/_global.css";

.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: auto;
  width: 85ch;
  margin-top: 7rem;
  z-index: 1;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 90%;
  }

  h1 {
    font-size: 1.3rem;
  }

  .logo-image {
    width: 100%;
  }
}
</style>
