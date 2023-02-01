<script setup>
import imageOfNumber1 from '../assets/images/uno.png'
import imageOfNumber2 from '../assets/images/dos.png'
import imageOfNumber3 from '../assets/images/tres.png'
import Draw from '../components/Draw.vue'
</script>

<template>
    <section v-if="showInfo == true" class="home-info">
        <h1 class="main-title">Amigo invisible online</h1>
        <h2 class="subtitle">Sorteo amigo invisible online gratis. Realiza el sorteo del amigo invisible online en pocos pasos y recibe los resultados en el correo electrónico.</h2>
        <div class="steps-to-do">
            <p class="span-text">Pasos a seguir:</p>
            <ul class="home-steps-todo">
                <li><img :src="imageOfNumber1" alt="Imagen número 1" class="step-icon">Rellena los siguientes campos.</li>
                <li><img :src="imageOfNumber2" alt="Imagen número 2" class="step-icon">Pula el botón continuar y revisa que todo esté correcto.</li>
                <li><img :src="imageOfNumber3" alt="Imagen número 2" class="step-icon">Al finalizar, cada participante recibirá un correo electrónico con el resultado del sorteo.</li>
            </ul>
        </div>

        <h2 class="home-remainder">🍀Consulta la sección de 
            <router-link to="regalos-amigo-invisible" class="router-link">regalos amigo invisible</router-link></h2>
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
    }
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

.steps-to-do {
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin: 25px 0px 15px 0px
}

.steps-to-do p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
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