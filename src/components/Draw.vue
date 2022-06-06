<template>
    <form action="#" id="draw-form">
        <!-- HEADER -->
        <div class="draw-header">
            <BaseInput label="Título del sorteo*" type="text" placeholder="Nombre del sorteo" v-model="draw.name"
                className="input-header" />
            <BaseInput label="Precio" type="text" placeholder="Precio orientativo" v-model="draw.price"
                className="input-header" />
            <BaseInput label="Fecha del sorteo" type="date" v-model="draw.date" className="input-header" />
        </div>

        <!-- PARTICIPANTS -->
        <div :id="'participant' + (item.participantID)" class="participant" v-for="(item, index) in draw.participants"
            :key="item.participantID">
            <span @click="closeCard" class="close-icon" v-if="index > 2">
                <img src="../assets/close.png" alt="Cerrar tarjeta">
            </span>
            <Participant @updateParticipant="updateParticipant" :participants="participantsMultiSelect"
                :backgroundColor="this.backgroundsColors[index]" :parentParticipant="item" :indexItem="index + 1" />
        </div>

        <!-- BUTTONS -->
        <div class="draw-actions">
            <button class="primary-button-link"
                @click.prevent="addParticipantCard(); randomGradient();"><span>Agregar</span></button>
            <button class="primary-button-link" @click.prevent="submitForm"
                type="submit"><span>Continuar</span></button>
        </div>

        <!-- TEST -->
        <div class="test-zone" style="margin-top: 50px; margin-bottom: 50px; list-style: none;">
            <li v-for="(item, index) in draw" :key="index">
                <span v-if="index !== 'participants'">{{ index }}: {{ item }}</span>
            </li>
            <li v-for="(item, index) in draw.participants" :key="index">
                <span>{{ index }}: {{ item }}</span>
            </li>
        </div>
    </form>
</template>

<script>
import BaseInput from './form/BaseInput.vue'
import Participant from './Participant.vue'
import UniqueID from '../features/UniqueID'

export default {
    components: { BaseInput, Participant },

    data() {
        return {
            draw: {
                name: '',
                price: '',
                date: '',
                participants: [
                    { "participantID": UniqueID().getID(), "name": "", "email": "", "exclude": [], "wishlist": [], "errors": [] },
                    { "participantID": UniqueID().getID(), "name": "", "email": "", "exclude": [], "wishlist": [], "errors": [] },
                    { "participantID": UniqueID().getID(), "name": "", "email": "", "exclude": [], "wishlist": [], "errors": [] }
                ],
            },
            totalParticipants: 3,
            backgroundsColors: [],
            participantsMultiSelect: [],
            validationErrors: true
        }
    },
    beforeMount() {
        for (var i = 0; i < this.totalParticipants; i++) {
            this.randomGradient();
        }
    },
    methods: {
        submitForm(event) {
            // TODO Form validation before next step - review code
            const participants = this.draw.participants.filter(participant => participant.email !== '' && participant.name !== '')
            this.draw.participants.forEach(element => {
                this.validateParticipant(element);
            });
        },

        validateParticipant(participant) {
            let errors = 0;
            participant.errors = [];

            if (participant.name === '') participant.errors.push({ message: 'Campo nombre requerido', type: "name" }); errors++
            if (participant.email === '') {
                participant.errors.push({ message: 'Campo email requerido', type: "email" })
                errors++
            } else if (!this.validateEmail(participant.email)) {
                participant.errors.push({ message: 'Campo email incorrecto', type: "email" }); errors++
            }

            return errors === 0 ? true : false;
        },

        // Function email validation 
        validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },

        // UPDATE NEW PARTICIPANT
        updateParticipant(participant) {
            participant.errors = [];

            // Find participant index
            const i = this.draw.participants.findIndex(_element => _element.participantID === participant.participantID);
            if (i > -1) {
                // Update Participant
                this.draw.participants[i] = participant

                // Exclude Participant List Management
                if (participant.name !== '' && participant.email !== '')
                    this.addNewExcludeParticipant(participant)
            }
        },

        addNewExcludeParticipant(participant) {
            if (this.participantsMultiSelect.length === 0) {
                let p = { value: participant.name, label: participant.name, id: participant.participantID }
                this.participantsMultiSelect.push(p)
            } else {
                const i = this.participantsMultiSelect.findIndex(_element => _element.id === participant.participantID)
                if (i === -1) {
                    let p = { value: participant.name, label: participant.name, id: participant.participantID }
                    this.participantsMultiSelect.push(p)
                }
            }
        },

        // ADD NEW PARTICIPANT CARD AND SCROLL TO IT
        async addParticipantCard() {
            await this.draw.participants.push({ "participantID": UniqueID().getID(), "name": "", "email": "", "exclude": [], "wishlist": "" })

            const lastParticipantCard = document.getElementsByClassName("participant")[document.getElementsByClassName("participant").length - 1]
            this.scrollToElement(lastParticipantCard)
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

        scrollToElement(element) {
            const distanceFromTop = window.scrollY + element.getBoundingClientRect().top
            window.scrollTo({
                top: distanceFromTop,
                behavior: 'smooth'
            })
        },

        async closeCard(event) {
            const selectedCard = event.target.parentNode.parentNode;
            const form = document.getElementById("draw-form");
            await form.removeChild(document.getElementById(selectedCard.id))

            // DELETE PARTICIPANT FROM COMPONENT 
            this.deleteParticipant(selectedCard.id.split("participant")[1])
            this.deleteExcludeParticipant(selectedCard.id.split("participant")[1])
        },

        deleteParticipant(id) {
            const index = this.draw.participants.findIndex(_element => _element.participantID == id)
            if (index > -1) {
                this.draw.participants.splice(index, 1)
            }
        },

        deleteExcludeParticipant(id) {
            const index = this.participantsMultiSelect.findIndex(_element => _element.id == id)
            if (index > -1) {
                this.participantsMultiSelect.splice(index, 1)
            }
        },
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
    position: relative
}

.draw-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 1rem;
}

.close-icon {
    position: absolute;
    right: -.5rem;
    top: .3rem;
    border: 1px solid var(--main-bg-color);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.close-icon img {
    width: 1.3rem;
}

@media only screen and (max-width: 768px) {}
</style>