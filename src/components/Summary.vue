<template>
    <!-- Header -->
    <h2><strong>Nombre del sorteo: </strong> {{ draw.name }}</h2>
    <h3><strong>Precio orientativo: </strong> {{ draw.sorteo }}</h3>
    <h3><strong>Fecha: </strong> {{ draw.startDate }}</h3>

    <!-- Participants -->
    <h2>Participantes</h2>
    <ul>
        <li v-for="(participant, index) in draw.participants">
            <p><strong>Nombre: </strong> {{ participant.name }}</p>
            <p><strong>Email: </strong>: {{ participant.email }}</p>
            <p v-if="participant.exclude != ''"><strong>Exclusiones: </strong>{{ participant.exclude }}</p>
        </li>
    </ul>

    <!-- BUTTONS -->
    <div class="draw-actions">
        <button class="primary-button-link"
            @click="$emit('changeSummaryStatus')"
        >
            <span>Editar</span>
        </button>
        <button class=" primary-button-link" type="submit" @submit="sendMailsRequest"><span>Terminar</span></button>
    </div>
</template>
<script>
export default {
    emits: ['changeSummaryStatus'],
    props: {
        draw: {
            type: Object,
            required: true
        }
    },
    methods: {
        sendMailsRequest() {
            console.log("lego");
        }
    }
}
</script>
<style>
li {
    list-style: none;
}
</style>