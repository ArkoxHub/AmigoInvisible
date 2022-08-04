<!-- Script Setup -->
<script setup>
import UniqueID from '../../features/UniqueID'
import exclamationMark from '../../assets/images/exclamation-mark.png'

const uuid = UniqueID().getID()

const props = defineProps({
    label: String,
    placeholder: String,
    modelValue: [String, Number],
    className: String,
    maxLength: { type: String, required: false },
    minLenght: { type: String, required: false },
    classLabel: { type: String, required: false },
    showError: { type: Boolean, default: false },
    errorLabel: { type: String, required: false, default: '' },
})

const errorMessage = "Campo requerido"

const emit = defineEmits(['update:modelValue'])
function updateValue(value) {
    emit('update:modelValue', value)
}

</script>

<template>
    <div class="form-control">
        <label 
            v-if="props.label"
            :for="uuid" 
            :class="classLabel"
        >
            {{ props.label }}
        </label>
        <label class="error-label" v-if="errorLabel != ''">
            <img class="exclamation-img" :src="exclamationMark" alt="Validación incorrecta">
            {{ errorLabel}}
        </label>
        <input 
            :id="uuid" 
            v-bind="$attrs" 
            :placeholder="placeholder" 
            :class="className" 
            class="input-field"
            :value="modelValue" 
            @input="updateValue($event.target.value)" 
            :minlength="minLenght" 
            :maxlength="maxLength"
        >
        <p v-if="showError">{{ errorMessage }}</p>
    </div>
</template>

<!-- Script Attrs -->
<script>
export default {
    inheritAttrs: false
}
</script>

<style scoped>
label {
    display: block;
    margin: 0px 0px 3px 4px;
}

.error-label {
    background-color: var(--error-color);
    color: var(--font-text);
    padding: .6rem;
    border-radius: var(--border-radius);
    margin: auto;
    margin-bottom: .2rem;
    border: 1px solid var(--main-bg-color);
    display: flex;
}

.exclamation-img {
    width: 1rem;
    margin-right: .2rem;
}
</style>