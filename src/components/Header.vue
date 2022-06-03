<script setup>
import cajaRegalo from '../assets/caja-de-regalo.png'
</script>

<template>
    <nav class="main-nav">
        <!-- LOGO WEB -->
        <div class="left-nav">
            <router-link to="/" class="left-nav-link">
                <img class="logo-image" :src="cajaRegalo" alt="Logotipo Amigo Invisible Online">
                <router-link to="/">Amigo <span class="span-color">invisible</span></router-link>
            </router-link>
        </div>
        <!-- DESKTOP NAVIGATION -->
        <div class="right-nav desktop-nav">
            <router-link to="/regalos-amigo-invisible"><span class="span-color-link">Regalos</span></router-link>
            <router-link to="/lista-de-deseos">Wishlist</router-link>
            <router-link to="/recuperacion-sorteo">Recuperación</router-link>
        </div>
        <!-- HAMBURGUER -->
        <div class="hamburger" @click="toggleHamburger" :class="hamburgerOpen ? 'hamburger-is-open active' : ''">
            <div class="hamburger_item hamburger_item_first"></div>
            <div class="hamburger_item hamburger_item_middle"></div>
            <div class="hamburger_item hamburger_item_last"></div>
        </div>
        <!-- MOBILE NAVIGATION -->
        <div class="right-nav mobile-nav">
            <!-- END HAMBURGUER -->
            <router-link to="/regalos-amigo-invisible"><span class="span-color-link">Regalos</span></router-link>
            <router-link to="/lista-de-deseos">Wishlist</router-link>
            <router-link to="/recuperacion-sorteo">Recuperación</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            hamburgerOpen: false,
            height: "0px",
            opacity: "0",
            scrollY: 0,
        }
    },

    computed: {
        computedHeight() {
            return this.height;
        },
        computedOpacity() {
            return this.opacity;
        },
        getScrollY() {
            return this.scrollY;
        },
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        toggleHamburger() {
            let container = document.getElementById("mobile-container");
            let containerMaxHeight = container.scrollHeight + "px";

            this.hamburgerOpen = this.hamburgerOpen == true ? false : true;

            if (this.hamburgerOpen) {
                this.opacity = "1";
                this.height = containerMaxHeight;
            } else {
                this.opacity = "0";
                this.height = "0px";
            }
        },
        handleScroll() {
            this.scrollY = window.scrollY;
        },
    },
}
</script>

<style scoped lang="scss">
.mobile-nav,
.hamburger {
    display: none !important;
}

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



/* HAMBURGUER */

.hamburger {
    height: 30px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 5rem;

    &:hover {
        cursor: pointer;
    }

    &_item {
        height: 2px;
        width: 100%;
        background: var(--primary-color);
        transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
            opacity 300ms linear;

        &_first {
            .hamburger-is-open & {
                transform: translate(0, 14px) rotate(44deg);
            }
        }

        &_middle {
            .hamburger-is-open & {
                opacity: 0;
            }
        }

        &_last {
            .hamburger-is-open & {
                transform: translate(0, -14px) rotate(-44deg);
            }
        }
    }
}

@media only screen and (max-width: 1135px) {
    .hamburger {
        display: flex !important;
    }

    .desktop-nav {
        display: none;
    }
}

@media only screen and (max-width: 600px) {
    .left-nav {
        margin-left: 0rem;
    }

    .hamburger {
        right: 1.5rem;
    }
}

/* TODO MOBILE RESPONSIVE */
</style>