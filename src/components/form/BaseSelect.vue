<script setup>
import UniqueID from '../../features/UniqueID';
const uuid = UniqueID().getID();

const props = defineProps({
    label: String,
    placeholder: String,
    options: Array,
    participant: Object,
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])
function updateValue(value) {
    emit('update:modelValue', value)
}

function getUID() {
    console.log(UniqueID);
}
</script>

<template>
    <div class="form-control">
        <label :for="uuid" v-if="label">{{ label }}</label>
        <select :id="uuid" :value="modelValue" class="input-field" v-bind="$attrs"
            @change="updateValue($event.target.value)">
            <option v-for="option in options" :value="option.name" :key="option" :selected="option === modelValue">
                <span>{{ option.name }}</span>
            </option>
        </select>
    </div>
</template>

<style scoped>
label {
    display: block;
    margin: 0px 0px 3px 4px;
}
</style>