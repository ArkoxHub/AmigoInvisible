<script setup>
const props = defineProps({
    label: String,
    placeholder: String,
    options: Array,
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
        <select :value="modelValue" class="field" v-bind="$attrs" @change="updateValue($event.target.value)">
            <option v-for=" option in options" :value="option" :key="option" :selected="option === modelValue">
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
    width: 250px;
    padding: 10px;
}
</style>