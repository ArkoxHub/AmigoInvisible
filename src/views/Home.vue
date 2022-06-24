<script setup>
import uno from '../assets/uno.png'
import dos from '../assets/dos.png'
import tres from '../assets/tres.png'
import Draw from '../components/Draw.vue'

</script>

<template>
    <section v-if="showInfo == true" class="home-info">
        <h1 class="main-title">Sorteo amigo invisible online</h1>
        <ul class="home-steps-todo">
            <span>Pasos a seguir:</span>
            <li><img :src="uno" alt="Imagen número 1" class="step-icon">Rellena los siguientes campos.</li>
            <li><img :src="dos" alt="Imagen número 2" class="step-icon">Pula el botón continuar y revisa que todo esté correcto.</li>
            <li><img :src="tres" alt="Imagen número 2" class="step-icon">Al finalizar, cada participante recibirá un correo electrónico con el resultado del sorteo.</li>
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
    width: 7.5rem;
    padding-bottom: .3rem;
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