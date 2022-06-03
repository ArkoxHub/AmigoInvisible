<template>
    <fieldset :style="{ 'background': backgroundColor }">
        <legend v-if="participant.name == ''">Participante {{ participantID }}</legend>
        <legend v-else>Participante {{ participantID }}: {{ participant.name }}</legend>
        <div class="draw-participants">
            <BaseInput @blur="$emit('addParticipant', participant)" label="Nombre*" type="text"
                v-model="participant.name" minLength="3" maxLength="25" placeholder="Nombre" />
            <BaseInput @blur="$emit('addParticipant', participant)" label="Email*" type="email"
                v-model="participant.email" maxLength="50" placeholder="Email" />
            <div class="exclude-container">
                <label for="exclude">Excluir</label>
                <Multiselect class="input-field" v-model="participant.exclude" :options="deleteItself" mode="multiple"
                    :close-on-select="false" @blur="$emit('addParticipant', participant)" placeholder="Excluir a..."
                    noOptionsText="No hay participantes" :create-option="true" />
            </div>
        </div>
    </fieldset>
</template>

<script>
import BaseInput from '../components/form/BaseInput.vue'
import Multiselect from '@vueform/multiselect'

export default {
    components: { BaseInput, Multiselect },
    props: {
        participants: {
            type: [Array, Object],
            required: false
        },
        backgroundColor: {
            type: String,
            required: true
        },
        participantID: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            participant: {
                participantID: this.participantID,
                name: '',
                email: '',
                exclude: [],
                wishlist: '',
            },
        }
    },
    methods: {
        scrollToLastParticipant() {
            // TODO Scroll to last participant added
        }
    },
    computed: {
        deleteItself() {
            return this.participants.filter(item => item.id != this.participantID)
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>

<style scoped>
fieldset {
    border-radius: .5rem;
    border: 1px solid #333;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

legend {
    margin-left: 1.2rem;
}

.draw-participants {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.2rem;
}

.multiselect {
    color: #333;
    margin: 0px;
    margin-top: .17rem;
    font-size: .8rem;
    min-height: auto;
}
</style>