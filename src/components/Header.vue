<script setup>
import cajaRegalo from '../assets/caja-de-regalo.png'
</script>

<template>
    <nav class="main-nav">
        <div class="left-nav">
            <router-link to="/" class="left-nav-link">
                <img class="logo-image" :src="cajaRegalo" alt="Logotipo Amigo Invisible Online">
                <router-link to="/">Amigo <span class="span-color">invisible</span></router-link>
            </router-link>
        </div>
        <div class="right-nav">
            <router-link to="/regalos"><span class="span-color-link">Regalos</span></router-link>
            <router-link to="/lista-de-deseos">Wishlist</router-link>
            <router-link to="/recuperacion-sorteo">Recuperación</router-link>
        </div>
    </nav>
</template>

<style scoped>
/** SHARED NAV */
.main-nav {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    border-bottom: 1px solid var(--primary-color);
    box-shadow: 0px -2px 13px 1px #ffc73b;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background: var(--main-bg-color);
}

.left-nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-nav a {
    text-decoration: none;
    cursor: ponter;
    height: var(--header-height);
    line-height: var(--header-height);
    text-align: center;
    text-transform: uppercase;
}

.left-nav,
.right-nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
}

/** LEFT NAV */
.left-nav {
    margin-left: 100px;
    cursor: pointer;
}

.left-nav a {
    margin-left: 25px;
}

/** RIGHT NAV */
.right-nav {
    margin-right: 100px;
    line-height: var(--header-height);
}

.right-nav a {
    text-align: center;
    width: 10rem;
}

.right-nav a:hover {
    background-color: var(--primary-color);
    color: black;
    transition: all .5s ease;
}

/** LOGO NAV */
.logo-image {
    display: block;
    width: 40px;
}

.span-color,
.span-color-link {
    color: var(--primary-color);
}

.span-color-link:hover {
    color: #333;
}

@media only screen and (max-width: 600px) {}
</style>