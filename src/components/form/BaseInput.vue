<script>
export default {
    inheritAttrs: false
}
</script>

<script setup>
import UniqueID from '../../features/UniqueID'
const uuid = UniqueID().getID()

const props = defineProps({
    label: String,
    placeholder: String,
    modelValue: [String, Number],
    className: String,
    maxLength: { type: String, required: false },
    minLenght: { type: String, required: false },
    showError: { type: Boolean, default: false }
})

const errorMessage = "Campo requerido"

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<template>
    <div class="form-control">
        <label :for="uuid" v-if="props.label">{{ props.label }}</label>
        <input :id="uuid" v-bind="$attrs" :placeholder="placeholder" :class="className" class="input-field"
            :value="modelValue" @input="updateValue($event.target.value)" :minlength="minLenght" :maxlength="maxLength">
        <p v-if="showError">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
label {
    display: block;
    margin: 0px 0px 3px 4px;
}
</style>