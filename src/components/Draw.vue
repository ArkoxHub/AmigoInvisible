<template>
    <form 
        action="#" 
        id="draw-form" 
        v-show="showSummary === false"
    >
        <!-- HEADER -->
        <div class="draw-header">
            <BaseInput 
                label="Título del sorteo*" 
                type="text" 
                placeholder="Nombre del sorteo" 
                v-model="draw.title"
                className="input-header" 
                maxLength="50"
                :errorLabel="titleError"
                @blur="validateTitle"
            />

            <BaseInput 
                label="Precio" 
                type="text" 
                placeholder="Precio orientativo" 
                v-model="draw.price"
                className="input-header"
                maxLength="30"
            />

            <BaseInput 
                label="Fecha del sorteo" 
                type="date" 
                v-model="draw.date" 
                className="input-header" 
            />
        </div>

        <!-- PARTICIPANTS LOOP -->
        <div 
            :id="'participant' + (item.participantID)" 
            class="participant" 
            v-for="(item, index) in draw.participants" :key="item.participantID"
        >
            <span 
                @click="closeCard" 
                class="close-icon" 
                v-if="index > 2"
            >
                <img src="../assets/images/close.png" alt="Cerrar tarjeta">
            </span>
            <Participant 
                @updateParticipant="updateParticipant" 
                :participants="participantsMultiSelect"
                :backgroundColor="this.backgroundsColors[index]" 
                :parentParticipant="item" 
                :indexItem="index + 1"
            />
        </div>

        <!-- BUTTONS -->
        <div class="draw-actions">
            <button 
                class="primary-button-link"
                @click.prevent="addParticipantCard(); randomGradient();"
            >
                <span>Añadir</span>
            </button>
            <button 
                class="primary-button-link" 
                @click.prevent="submitForm" 
                type="text"
            >
                <span>Continuar</span>
            </button>
        </div>

    </form>

    <!-- Summary Component -->
    <Summary 
        v-if="showSummary === true"
        :draw="this.draw" 
        @changeSummaryStatus="toggleSummary"
    />
</template>

<script>
import BaseInput from './form/BaseInput.vue'
import Participant from './Participant.vue'
import Summary from './Summary.vue'
import UniqueID from '../features/UniqueID'
import { useDrawStore } from '../stores/DrawStore'
import { mapStores } from 'pinia'

export default {
    computed: {
        ...mapStores(useDrawStore),
        getTotalParticipants() {
            return this.draw.participants.length
        }
    },
    components: { BaseInput, Participant, Summary },
    emits: ['toggleInfo'],
    data() {
        return {
            draw: "",
            backgroundsColors: [],
            participantsMultiSelect: [],
            validationErrors: true,
            maxTries: 10000,
            showSummary: false,
            editMode: false,
            titleError: '',
        }
    },
    beforeMount() {
        this.draw = this.drawStore.getDrawStored
        for (var i = 0; i < this.draw.participants.length; i++) {
            this.randomGradient();
        }

        // If we're recovering data, load exclude participants from the new draw
        if (this.draw.participants[0].name != '') {
            this.draw.participants.forEach(element => {
                this.participantsMultiSelect.push(element.name)
            });
        }
    },
    methods: {
        submitForm() {
            let isValidated = false

            // Validate form title   
            if (this.draw.title.trim() === '') {
                this.titleError = 'Campo obligatorio'
                alert("El campo 'Título del sorteo' es obligatorio")
                isValidated = false
                this.scrollToElement(document.getElementsByClassName('home-remainder')[0])
                return false;
            }

            // Validate form participants
            this.draw.participants.forEach(element => {
                isValidated = this.validateParticipant(element);
            });

            // Clear empty participants in case user has added 
            let participants = this.draw.participants.filter(participant => participant.email !== '' && participant.name !== '')

            if (participants.length < 3) {
                alert('Debes agregar al menos 3 participantes')
                return false;
            }

            // Exit in case participants validation fails
            if (!isValidated) return false;

            // Participants with more participants.exclude length should be at first positions
            participants = participants.sort((a, b) => {
                return b.exclude.length - a.exclude.length;
            })

            // Logic to randomize participants
            let assignedParticipants = [];
            let drawStatus = 'success';
            participants.every(participant => {
                let count = 0;
                let randomNumber = this.getRandomNumber(participants.length);

                //  Check if random number is already assigned
                while (assignedParticipants.includes(randomNumber) && count < 500) {
                    randomNumber = this.getRandomNumber(participants.length);
                    count++;
                }

                // Check if participant exclude all other participants
                if (participant.exclude.length == participants.length - 1
                    && count < this.maxTries) {
                    alert(`El participante ${participant.name} no tiene a quién regalarle debido a sus exclusiones.`)
                    count++;
                    drawStatus = 'exclude';
                    return false;
                }

                // Check if participant can't be assigned to any other participant because of unlucky draw 
                if (!assignedParticipants.includes(randomNumber) && participant.participantID === participants[randomNumber].participantID
                    && assignedParticipants.length === participants.length - 1
                    && count < this.maxTries) {
                    count++;
                    drawStatus = 'repeat';
                    return false;
                }

                //  Check if random number is in the exclude list
                while (participant.participantID === participants[randomNumber].participantID
                    || participant.exclude.includes(participants[randomNumber].participantID)
                    || assignedParticipants.includes(randomNumber)
                    && count < this.maxTries) {
                    randomNumber = this.getRandomNumber(participants.length);
                    count++;
                }

                if (count >= this.maxTries) {
                    drawStatus = 'error';
                    return false;
                }

                assignedParticipants.push(randomNumber);
                participant.result = participants[randomNumber].name;
                return true;
            }); // End of participants.every

            if (drawStatus === 'error') {
                alert('No se ha podido generar el sorteo, asegúrate de que las exclusiones de cada participante sean correctas.')
                return false;
            }

            if (drawStatus === 'exclude') {
                return false;
            }

            if (drawStatus === 'repeat') {
                this.submitForm();
            }

            if (drawStatus === 'success') {
                this.draw.participants = [];
                this.draw.participants = participants;
                this.draw.host = document.querySelector(".participant .input-field").value;
                this.showSummary = true;
                this.$emit('toggleInfo', false);
                window.scrollTo(0, 0);
            }
        },

        validateParticipant(participant) {
            let errors = 0;
            participant.errors = [];

            // Validate name
            if (participant.name.trim() === '') {
                participant.errors.push({ message: 'Campo nombre requerido', type: "name" })
                errors++
            }

            // Validate email
            if (participant.email.trim() === '') {
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

        validateTitle() {
            if (this.titleError != '') {
                this.draw.title.trim() === '' ? this.titleError = 'Campo obligatorio' : this.titleError = ''
            }
        },

        // UPDATE NEW PARTICIPANT
        updateParticipant(participant) {
            participant.errors = [];

            // Find participant index
            const i = this.draw.participants.findIndex(_element => _element.participantID === participant.participantID);
            if (i > -1) {
                // Update Participant
                this.draw.participants[i] = participant

                // Add exclude Participant List Management
                if (participant.name !== '' && participant.email !== '')
                    this.addNewExcludeParticipant(participant)
            }
        },

        addNewExcludeParticipant(participant) {
            if (this.participantsMultiSelect.length === 0) {
                let p = { value: participant.participantID, label: participant.name, id: participant.participantID }
                this.participantsMultiSelect.push(p)
            } else {
                const i = this.participantsMultiSelect.findIndex(_element => _element.id === participant.participantID)
                if (i === -1) {
                    let p = { value: participant.participantID, label: participant.name, id: participant.participantID }
                    this.participantsMultiSelect.push(p)
                }
            }
        },

        // ADD NEW PARTICIPANT CARD AND SCROLL TO IT
        async addParticipantCard() {
            await this.draw.participants.push({ participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: "" })

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
                top: distanceFromTop - 100,
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

        getRandomNumber(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },

        toggleSummary() {
            this.showSummary=false;
            this.$emit('toggleInfo', true);
        }
    },
}
</script>

<style>
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

.draw-icon {
    width: .9rem;
    padding-left: 3px;
    z-index: 50;
}

@media only screen and (max-width: 768px) {}
</style>