<script setup>
import uno from '../assets/uno.png'
import dos from '../assets/dos.png'
import tres from '../assets/tres.png'
import Sorteo from '../components/Sorteo.vue'
</script>

<template>
    <section class="home-info">
        <h1>Sorteo amigo invisible</h1>
        <p class="home-description">En pocos pasos, podrás realizar el sorteo del amigo invisible gratis y recibir toda
            la información en el
            correo electrónico de cada participante.</p>
        <ul class="home-steps-todo">
            Pasos a seguir:
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
        <!-- Sorteo -->
        <Sorteo />
    </section>

    <!-- DELETE ONCE FOOTER IS DEVELOPED -->
    <a style="position: absolute; bottom: 20px;" href="https://www.flaticon.es" target="_blank" title="Iconos">Iconos
        creados por
        Freepik -
        Flaticon</a>
</template>

<style scoped>
.home-info {
    display: block;
    margin-bottom: 60px;
}

.home-info h1 {
    text-align: center;
    margin-bottom: 30px;
}

.home-description {
    margin-bottom: 30px;
}

.home-steps-todo li {
    text-decoration: none;
    list-style: none;
    line-height: 50px;
}

.step-icon {
    width: 28px;
    margin-right: 7px;
}

.draw-container {
    width: 100%;
}
</style>