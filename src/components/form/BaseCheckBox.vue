<script setup>
import UniqueID from '../../features/UniqueID';
const uuid = UniqueID().getID();

function getUID() {
    console.log(UniqueID);
}
</script>

<template>
<div class="checkbox-container">
  <input
    :id="uuid"
    class="checkbox-field"
    type="checkbox"
    v-bind="$attrs"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />

  <label v-if="label != ''" :for="uuid"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
input {
    display: inline-block;
    margin-right: 5px;
    width: 22px;
    height: 22px;

    &:hover {
        cursor: pointer;
    }
}

.checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.checkbox-container:last-child {
    margin-bottom: 0;
}
</style>