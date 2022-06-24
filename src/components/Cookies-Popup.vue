<template>
    <section v-if="showCookiesContainer == true" class="cookies-container">
        <div class="cookies-text">
            <p>
                Este sitio web utiliza cookies para garantizar la mejor experiencia en nuestro sitio web.
            </p>
            <p>
                Al continuar utilizando este sitio web, usted acepta nuestro uso de cookies.
            </p>
        </div>
        <div class="cookies-buttons">
            <button class="cookies-accept-button button-cookies" @click="acceptCookies">Aceptar</button>
            <button class="cookies-decline-button button-cookies" @click="declineCookies">Rechazar</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showCookiesContainer: false
        }
    },
    mounted() {
        // Check if cookies have been accepted or declined
        if (localStorage.getItem('cookies') == null) {
            this.showCookiesContainer = !this.showCookiesContainer
        }

        if (localStorage.getItem('cookies') == 'declined') {
            this.declineCookies()
        }
    },
    methods: {
        // Save Local Storage for cookies
        acceptCookies() {
            localStorage.setItem('cookies', 'accepted');
            this.showCookiesContainer = false;
            window['ga-disable-G-X0W02J8ZBJ'] = false;
            gtag('consent', 'update', {
                'ad_storage': 'granted'
            });
        },
        declineCookies() {
            localStorage.setItem('cookies', 'declined');
            this.showCookiesContainer = false;
            // Disable Google Analtyics
            window['ga-disable-G-X0W02J8ZBJ'] = true;

            // Disable Google Tag Manager
            window['dataLayer'] = [];
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });
        },
    }
}
</script>

<style scoped>
.cookies-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: var(--primary-color);
    color: var(--main-bg-color);
    z-index: 50;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: .9rem;
}

.cookies-text {
    flex-basis: 60%;
}

.cookies-buttons {
    flex-basis: 20%;
}

.button-cookies {
    background-color: var(--main-bg-color);
    color: var(--primary-color);
    border: none;
    border-radius: var(--border-radius);
    outline: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #fff;
    margin-right: .5rem;
}

.button-cookies:hover {
    background-color: dodgerblue;
    color: #fff;
}

@media only screen and (max-width: 1000px) {
    .cookies-container {
        flex-flow: column nowrap;
        padding: 1rem  1rem;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }

    .cookies-text {
        flex-basis: 100%;
    }

    .cookies-buttons {
        flex-basis: 100%;
        margin-top: 10px;
    }

    p {
        margin-bottom: 5px;
    }

}
</style>