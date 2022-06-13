<!-- TODO Footer -->
<script setup>
import cajaRegalo from '../assets/caja-de-regalo.png'
import { computed } from '@vue/reactivity';

// Function to return the current year
const currentYear = computed(() => {
    return new Date().getFullYear();
})
</script>
<template>
    <section class="footer-container">
        <div class="logo-container">
            <img class="logo-image" :src="cajaRegalo" alt="Logotipo Amigo Invisible Online">
            <router-link to="/">Amigo <span class="span-color">invisible</span></router-link>
        </div>
        <div class="copyright-container">
            <p>Copyright © {{ currentYear }} - Adrià Gual</p>
        </div>
        <div class="legal-container">
            <router-link to="/">Cookies</router-link>
            <router-link to="/">Política de privacidad</router-link>
        </div>
    </section>
    <!-- <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Muhammad Waqas Khan - Flaticon</a> -->
</template>

<style scoped>
.footer-container {
    min-height: var(--header-height);
    padding: 1.5rem 0;
    margin-top: 7rem;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--primary-color);
    box-shadow: 0px 0px 13px 1px #ffc73b;
}

.footer-container > div {
    padding: .3rem
}

.logo-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.copyright-container,
.legal-container a {
    color: #ccc;
}

.legal-container a:hover {
    color: var(--font-text);
}

.logo-container a {
    margin-left: .5rem;
    text-decoration: none;
    text-transform: capitalize;
}

.logo-container .logo-image {
    display: block;
    width: 30px;
}

.legal-container a {
    margin-left: 1rem;
}

@media only screen and (max-width: 1135px) {
    .footer-container {
        padding: 1.5rem 2rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .footer-container > div {
        padding: .5rem;
    }
}

</style>