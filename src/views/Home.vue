<script setup>
import uno from '../assets/uno.png'
import dos from '../assets/dos.png'
import tres from '../assets/tres.png'
import Draw from '../components/Draw.vue'

</script>

<template>
    <section v-if="showInfo == true" class="home-info">
        <h1 class="main-title">Sorteo amigo invisible online</h1>
        <p class="home-description">A continuación podrás realizar el sorteo del amigo invisible gratis online y recibir toda
            la información en el correo electrónico de cada participante.</p>
        <ul class="home-steps-todo">
            <span>Pasos a seguir</span>
            <li><img :src="uno" alt="Imagen número 1" class="step-icon">Rellena la siguiente información.</li>
            <li><img :src="dos" alt="Imagen número 2" class="step-icon">Revisa que todo esté en orden y dale a
                enviar.</li>
            <li><img :src="tres" alt="Imagen número 2" class="step-icon">En caso de que alguien no haya
                recibido el correo, puedes volver a recupear la información introducida previamente en
                <router-link to="recuperacion-sorteo" class="router-link">recuperación</router-link>
            </li>
        </ul>

        <span class="home-remainder">🍀Si necesitas ideas para regalos, visita la sección <router-link
                to="regalos-amigo-invisible" class="router-link">
                regalos</router-link></span>
    </section>

    <section class="draw-container">
        <!-- DRAW -->
        <Draw @toggleInfo="toggleInfo" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            showInfo: true,
        }
    },
    methods: {
        toggleInfo() {
            this.showInfo = !this.showInfo
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>

<style scoped>
.home-info {
    display: block;
    margin-bottom: 2.5rem;
}

.home-description {
    margin-bottom: 1.5rem;
}

.home-steps-todo span {
    display: block;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--primary-color);
    width: 10rem;
    padding-bottom: 1rem;
}

.home-steps-todo li {
    text-decoration: none;
    list-style: none;
    margin-bottom: 1.1rem;
}

.step-icon {
    width: 1.4rem;
    margin-right: .3rem;
}

.draw-container {
    width: 100%;
}
</style>