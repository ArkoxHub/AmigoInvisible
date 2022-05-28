<template>
    <form action="#">
        <div class="draw-header">
            <BaseInput label="Nombre del sorteo" type="text" v-model="draw.name" />
            <BaseInput label="Precio" type="number" v-model="draw.price" />
            <BaseInput label="Fecha del sorteo" type="date" v-model="draw.date" />
        </div>

        <div class="draw-participants">
            <Participante />
        </div>

        <div class="draw-actions">
            <router-link to="#" class="primary-button-link"><span>Agregar</span></router-link>
            <router-link to="#" class="primary-button-link"><span>Continuar</span></router-link>
        </div>

        <!-- TEST -->
        <div class="test-zone" style="margin-top: 50px; list-style: none;">
            <li v-for="(item, index) in draw" :key="index">
                {{ index }}: {{ item }}
            </li>
        </div>
    </form>
</template>

<script>
import BaseInput from './form/BaseInput.vue'
import Participante from './Participante.vue'

export default {
    components: { BaseInput, Participante },
    data() {
        return {
            draw: {
                name: '',
                price: '',
                date: '',
                participants: []
            }
        }
    },
}
</script>

<style scoped>
.draw-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-bottom: 30px;
}

.draw-participants {
    display: block;
}

.draw-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 25px;
}

.draw-actions a {
    text-decoration: none;
}
</style>