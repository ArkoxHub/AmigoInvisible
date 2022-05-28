<script setup>
const props = defineProps({
    label: String,
    placeholder: String,
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<template>
    <div class="form-control">
        <label v-if="props.label">{{ props.label }}</label>
        <input v-bind="$attrs" :placeholder="placeholder" class="input-field" :value="modelValue"
            @input="updateValue($event.target.value)">
    </div>
</template>

<style scoped>
label {
    display: block;
    margin: 0px 0px 3px 4px;
}

input {
    width: 250px;
    padding: 10px;
}
</style>