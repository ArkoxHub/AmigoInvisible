<template>
    <fieldset :style="{ 'background': backgroundColor }">
        <legend v-if="participant.name == ''">Participante {{ indexItem }}</legend>
        <legend v-else>Participante {{ indexItem }}: {{ participant.name }}</legend>
        <div class="participants-fields">
            <!-- NAME -->
            <BaseInput 
                @blur="$emit('updateParticipant', participant)" 
                label="Nombre*" 
                type="text"
                v-model="participant.name" 
                minLength="3" maxLength="15" 
                placeholder="Nombre"
                :editMode="editMode"
            />

            <!-- PARTICIPANT -->
            <BaseInput 
            @blur="$emit('updateParticipant', participant)" 
                label="Email*" 
                type="email"
                v-model="participant.email" 
                maxLength="50" 
                placeholder="Email" 
                :editMode="editMode"
            />

            <!-- EXCLUDE | MULTISELECT -->
            <div class="exclude-container">
                <label for="exclude">Excluir</label>

                <Multiselect 
                    class="input-field" 
                    v-model="participant.exclude" 
                    :options="options" 
                    mode="multiple"
                    :close-on-select="false" 
                    @change="$emit('updateParticipant', participant)"
                    placeholder="Excluir a..." 
                    noOptionsText="No hay participantes"
                    noResultsText="No hay más participantes" 
                    :create-option="true">

                    <template v-slot:multiplelabel="{ values }">
                        <div v-if="values.length == 1" class="multiselect-multiple-label">
                            {{ values.length }} participante excluido
                        </div>
                        <div v-else class="multiselect-multiple-label">
                            {{ values.length }} participantes excluidos
                        </div>
                    </template>
                </Multiselect>
            </div>
        </div>

        <div v-if="parentParticipant.errors != ''" class="errors-container">
            <template v-for="(item, index) in parentParticipant.errors" :key="index">
                <span class="participant-error">
                    <img class="exclamation-img" src="../assets/exclamation-mark.png" alt="Validación incorrecta">
                    {{ item.message }}
                </span>
            </template>
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
        parentParticipant: {
            type: Object,
            required: true
        },
        backgroundColor: {
            type: String,
            required: true
        },
        indexItem: {
            type: Number,
            required: true
        },
        editMode: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            participant: {
                participantID: this.parentParticipant.participantID,
                name: '',
                email: '',
                exclude: [],
                wishlist: [],
                errors: [],
            },
        }
    },

    computed: {
        options() {
            return this.participants.filter(item => item.id != this.parentParticipant.participantID)
        }
    },
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

.participants-fields {
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

.errors-container {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

.participant-error {
    width: 92.7%;
    padding: .6rem;
    color: var(--font-text);
    background-color: var(--error-color);
    border: 1px solid var(--main-bg-color);
    border-radius: var(--border-radius);
    margin-bottom: .6rem;
}

.exclamation-img {
    width: 1rem;
    margin-right: .2rem;
}

@media only screen and (max-width: 768px) {
    .errors-container {
        padding: 1.2rem;
    }

    .participant-error {
        width: 100%;
    }
}
</style>