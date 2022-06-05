<template>
    <fieldset :style="{ 'background': backgroundColor }">
        <legend v-if="participant.name == ''">Participante {{ participantID }}</legend>
        <legend v-else>Participante {{ participantID }}: {{ participant.name }}</legend>
        <div class="draw-participants">
            <!-- NAME -->
            <BaseInput @blur="$emit('addParticipant', participant)" label="Nombre*" type="text"
                v-model="participant.name" minLength="3" maxLength="25" placeholder="Nombre" />

            <!-- PARTICIPANT -->
            <BaseInput @blur="$emit('addParticipant', participant)" label="Email*" type="email"
                v-model="participant.email" maxLength="50" placeholder="Email" />

            <!-- EXCLUDE | MULTISELECT -->
            <div class="exclude-container">
                <label for="exclude">Excluir</label>
                <Multiselect class="input-field" v-model="participant.exclude" :options="options" mode="multiple"
                    :close-on-select="false" @blur="$emit('addParticipant', participant)" placeholder="Excluir a..."
                    noOptionsText="No hay participantes" noResultsText="No hay más participantes" :create-option="true">

                    <template v-slot:multiplelabel="{ values }">
                        <div v-if="values.length == 1" class="multiselect-multiple-label">
                            {{ values.length }} participante
                        </div>
                        <div v-else class="multiselect-multiple-label">
                            {{ values.length }} participantes
                        </div>
                    </template>
                </Multiselect>
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
    computed: {
        options() {
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
    background-color: var(--main-bg-color);
    box-shadow: var(--box-shadow);
    padding: 5px 20px;
    border-radius: .5rem;
    color: var(--font-text)
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
    z-index: 2;
}
</style>