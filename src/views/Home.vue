<script setup>
import uno from '../assets/uno.png'
import dos from '../assets/dos.png'
import tres from '../assets/tres.png'
import Draw from '../components/Draw.vue'
</script>

<template>
    <section class="home-info">
        <h1 class="main-title">Sorteo amigo invisible</h1>
        <p class="home-description">En pocos pasos, podrás realizar el sorteo del amigo invisible gratis y recibir toda
            la información en el
            correo electrónico de cada participante.</p>
        <ul class="home-steps-todo">
            <span>Pasos a seguir</span>
            <li><img :src="uno" alt="Imagen número 1" class="step-icon">Rellena la siguiente información.</li>
            <li><img :src="dos" alt="Imagen número 2" class="step-icon">Revisa que todo esté en orden y dale a
                enviar.</li>
            <li><img :src="tres" alt="Imagen número 2" class="step-icon">En caso de que alguien no haya
                recibido el correo, puedes volver a recupear la información introducida previamente en
                <router-link to="#">recuperación</router-link>
            </li>
        </ul>
    </section>

    <section class="draw-container">
        <!-- DRAW -->
        <Draw />
    </section>
</template>

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