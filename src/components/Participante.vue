<template>
    <div class="participant">
        <BaseInput label="Nombre" type="text" v-model="participant.nombre" />
        <BaseInput label="Email" type="text" v-model="participant.nombre" />
        <BaseSelect label="Excluir" :options="participant.exclude" v-model="participant.nombre" />
    </div>

    <div class="participant">
        <BaseInput label="Nombre" type="text" v-model="participant.nombre" />
        <BaseInput label="Email" type="text" v-model="participant.nombre" />
        <BaseSelect label="Excluir" :options="participant.exclude" v-model="participant.nombre" />
    </div>

    <div class="participant">
        <BaseInput label="Nombre" type="text" v-model="participant.nombre" />
        <BaseInput label="Email" type="text" v-model="participant.nombre" />
        <BaseSelect label="Excluir" :options="participant.exclude" v-model="participant.nombre" />
    </div>
</template>

<script>
import BaseInput from '../components/form/BaseInput.vue'
import BaseSelect from '../components/form/BaseSelect.vue'

export default {
    components: { BaseInput, BaseSelect },
    data() {
        return {
            participant: {
                nombre: '',
                email: '',
                exclude: ['Adrià', 'Ricard', 'Francesc']
            }
        }
    },
}
</script>

<style scoped>
.participant {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
</style>