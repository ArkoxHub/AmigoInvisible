<template>
  <Header @toggleContainerOpacity="toggleOpacity" />

  <section :class="this.isHamburgerActive == false ? 'container' : 'container backScene'">
    <router-view></router-view>
  </section>
  
  <Footer/>
  <Cookies/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Cookies from './components/Cookies-Popup.vue'

export default {
  components: { Header, Footer, Cookies },
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
  margin: auto;
  width: 85ch;
  margin-top: 7rem;
  z-index: 1;
  position: relative;
  min-height: 85vh;
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
