<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    draw: {
        type: Object,
        required: true,
    },
    participantLogged: {
        type: String,
        required: true,
    },
})

const participant = ref('')

onMounted(() => {
    window.scrollTo(0, 0);
    participant.value = props.draw.participants.find(participant => participant._id === props.participantLogged)
    props.draw.participants.sort((a, b) => b.wishlist.length - a.wishlist.length)
})

</script>

<template>
    <div class="wrap-container">
        <h2 class="span-color">Información del sorteo</h2>
        <p class="span-color">Título: <span class="white-font"> {{ draw.title }}</span></p>
        <p class="span-color" v-if="draw.price">Precio: <span class="white-font"> {{ draw.price }}</span></p>
        <p class="span-color" v-if="draw.date">Fecha: <span class="white-font"> {{ draw.date }}</span></p>
        <p class="span-color" v-if="draw.comments">Comentarios: <span class="white-font"> {{ draw.comments }}</span></p>
    </div>

    <template v-for="(participant, index) in draw.participants" :key="index">
        <div class="wrap-container">
            <h2>Lista de deseos de: <span class="span-color">{{ participant.name.toUpperCase() }}</span></h2>
            <ul v-if="participant.wishlist.length == 0">
                <li>{{ participant.name }} todavía no tiene regalos añadidos.</li>
            </ul>
            <ul v-for="(item, index) in participant.wishlist" :key="index">
                <li>- {{ item }}</li>
            </ul>
        </div>
    </template>
</template>

<style scoped>
.main-container h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
}
</style>