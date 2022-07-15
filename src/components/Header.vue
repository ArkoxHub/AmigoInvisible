<script setup>
import cajaRegalo from '../assets/images/caja-de-regalo.png'
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
        <div class="right-nav-mobile" :class="hamburgerOpen ? 'd-active' : 'd-none'">
            <!-- END HAMBURGUER -->
            <router-link @click="toggleHamburguer" to="/regalos-amigo-invisible"><span
                    class="span-color-link">Regalos</span></router-link>
            <router-link @click="toggleHamburguer" to="/lista-de-deseos">Wishlist</router-link>
            <router-link @click="toggleHamburguer" to="/recuperacion-sorteo">Recuperación</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            hamburgerOpen: false,
            windowWith: '',
            navElement: ''
        }
    },

    computed: {
        getWindowWidth() {
            return window.innerWidth;
        }
    },

    mounted() {
        window.addEventListener("resize", this.handleWidthChange);
        window.addEventListener("click", this.toggleNavClickOutside);
        this.navElement = document.querySelector(".main-nav");
    },

    unmounted() {
        window.removeEventListener("resize", this.handleWidthChange);
        window.removeEventListener("click", this.toggleNavClickOutside);

    },

    methods: {
        toggleHamburger() {
            this.hamburgerOpen = this.hamburgerOpen == false ? true : false;
            this.$emit('toggleContainerOpacity', this.hamburgerOpen)
        },
        handleWidthChange() {
            this.windowWith = window.innerWidth;
            if (this.windowWith >= "1135") {
                this.hamburgerOpen = false;
                this.$emit('toggleContainerOpacity', this.hamburgerOpen)
            }
        },
        toggleHamburguer() {
            this.hamburgerOpen = this.hamburgerOpen == false ? true : false;
            this.$emit('toggleContainerOpacity', this.hamburgerOpen)
        },
        toggleNavClickOutside(event) {
            const isClickOnNav = this.navElement.contains(event.target);
            if (!isClickOnNav) {
                this.hamburgerOpen = false;
                this.$emit('toggleContainerOpacity', this.hamburgerOpen)
            }
        }
    },
}
</script>

<style scoped lang="scss">
.hamburger {
    display: none !important;
}

/** SHARED NAV */
.main-nav {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
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

/* HAMBURGUER */

.hamburger {
    height: 30px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 5rem;
    top: 1.3rem;

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
    .main-nav {
        display: block;
    }

    .hamburger {
        display: flex !important;
    }

    .desktop-nav {
        display: none;
    }

    .left-nav {
        justify-content: flex-start;
        height: 100%;
        width: 100%;
    }

    .right-nav-mobile {
        flex-flow: column nowrap;
        width: 100%;
        align-items: flex-start;
        margin-left: 125px;
    }
}

@media only screen and (max-width: 767px) {

    .left-nav {
        margin-left: 0rem;
        width: 100%;
        justify-content: flex-start;
        flex-direction: row nowrap;
    }

    .right-nav-mobile {
        margin-left: 25px;
    }

    .hamburger {
        right: 1.5rem;
        height: 23px;
        width: 35px;
    }
    
    .hamburger-is-open .hamburger_item_first {
        transform: translate(0, 11px) rotate(44deg);
    }
    .hamburger-is-open .hamburger_item_last {
        transform: translate(0, -11px) rotate(-44deg);
    }
}
</style>