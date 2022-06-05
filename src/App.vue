<template>
  <Header @toggleContainerOpacity="toggleOpacity" />
  <div :class="this.isHamburgerActive == false ? 'container' : 'container backScene'">
    <router-view></router-view>
  </div>
  <!-- Footer needed -->
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header },
  data() {
    return {
      isHamburgerActive: ''
    }
  },
  methods: {
    toggleOpacity(value) {
      this.isHamburgerActive = value
    }
  },
}
</script>

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
  position: relative;
}

@media only screen and (max-width: 768px) {
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
