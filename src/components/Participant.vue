<template>
    <fieldset :style="{ 'background': backgroundColor }">
        <legend>Participante {{ participantID }}</legend>
        <div class="draw-participants">
            <BaseInput @blur="$emit('addParticipant', participant)" label="Nombre*" type="text"
                v-model="participant.name" />
            <BaseInput @blur="$emit('addParticipant', participant)" label="Email*" type="email"
                v-model="participant.email" />
            <BaseSelect @blur="$emit('addParticipant', participant)" label="Excluir" :options="participants"
                :participant="this.participant" v-model="participant.exclude" />
        </div>
    </fieldset>

</template>

<script>
import BaseInput from '../components/form/BaseInput.vue'
import BaseSelect from '../components/form/BaseSelect.vue'

export default {
    components: { BaseInput, BaseSelect },
    props: {
        participants: {
            type: Array,
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
                exclude: '',
                wishlist: ''
            }
        }
    },
}
</script>

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
</style>