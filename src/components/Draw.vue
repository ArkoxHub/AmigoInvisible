<template>
    <form action="#">
        <!-- HEADER -->
        <div class="draw-header">
            <BaseInput label="Nombre del sorteo*" type="text" placeholder="Título del sorteo" v-model="draw.name"
                className="input-header" />
            <BaseInput label="Precio" type="text" placeholder="Precio orientativo" v-model="draw.price"
                className="input-header" />
            <BaseInput label="Fecha del sorteo" type="date" v-model="draw.date" className="input-header" />
        </div>

        <!-- PARTICIPANTS -->
        <div class="participant" v-for="item in totalParticipants">
            <Participant @addParticipant="addNewParticipant" :participants="draw.participants"
                :backgroundColor="this.backgroundsColors[item - 1]" :participantID="item" />
        </div>

        <!-- BUTTONS -->
        <div class="draw-actions">
            <button class="primary-button-link"
                @click.prevent="this.totalParticipants++; randomGradient;"><span>Agregar</span></button>
            <button class="primary-button-link" @click.prevent="validateForm"><span>Continuar</span></button>
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
import Participant from './Participant.vue'

export default {
    components: { BaseInput, Participant },

    data() {
        return {
            draw: {
                name: '',
                price: '',
                date: '',
                participants: [],
            },
            totalParticipants: 3,
            backgroundsColors: [],
        }
    },
    beforeMount() {
        for (var i = 0; i < this.totalParticipants; i++) {
            this.randomGradient();
        }
    },
    methods: {
        validateForm(event) {
            alert("Estamos trabajando en el página web")
        },
        randomGradient() {
            const newColor1 = this.populate('#');
            const newColor2 = this.populate('#');
            const angle = Math.round(Math.random() * 360);
            const gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
            this.backgroundsColors.push(gradient);
        },
        populate(a) {
            const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
            for (var i = 0; i < 6; i++) {
                var x = Math.round(Math.random() * 14);
                var y = hexValues[x];
                a += y;
            }
            return a;
        },
        addNewParticipant(participant) {
            if (participant.name.trim() == '' || participant.email.trim() == '') return false;
            this.addOrUpdate(this.draw.participants, participant)
        },
        addOrUpdate(array, element) {
            const i = array.findIndex(_element => _element.participantID === element.participantID);
            i > -1 ? array[i].element : array.push(element);
        }
    },
}
</script>

<style scoped>
.draw-header,
.participant {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.draw-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 1rem;
}
</style>