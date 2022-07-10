<script setup>
import UniqueID from '../../features/UniqueID';
const uuid = UniqueID().getID();

const props = defineProps({
    label: String,
    placeholder: String,
    options: [Array, Object],
    modelValue: [String, Number],
    defaultValue: String
})

const emit = defineEmits(['update:modelValue'])
function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<template>
    <div class="form-control">

        <label 
            :for="uuid" 
            v-if="props.label"
        >
            {{ props.label }}
        </label>

        <select 
            :id="uuid" 
            class="input-field" 
            :value="modelValue" 
            v-bind="$attrs"
            @change="updateValue($event.target.value)"
        >

        <!-- Default option -->
        <option v-if="defaultValue" value="">{{ defaultValue }}</option>

        <option 
            v-for="option in options" 
            :key="option" 
            :value="option" 
            :selected="option === modelValue"
        >
            {{ option }}
        </option>
        </select>
    </div>
</template>

<style scoped>
label {
    display: block;
    margin: 0px 0px 3px 4px;
}

select {
    font-size: 1.1rem;
    letter-spacing: .2px;
    cursor: pointer;
}

span {
    cursor: pointer;
}
</style>