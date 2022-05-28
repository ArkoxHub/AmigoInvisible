<script setup>
import Header from './components/Header.vue'
import logo from './assets/friendship.jpeg'


</script>

<template>
  <Header />
  <div class="container">
    <img class="logo-image" alt="FriendShip logo" :src="logo" />
    <router-view></router-view>
  </div>
</template>

<style>
@import "./css/_variables.css";
@import "./css/_global.css";

.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: auto;
}

@media (max-width: 600px) {
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
