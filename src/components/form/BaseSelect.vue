<template>
  <label :for="uuid" v-if="label">
    {{ label }}
  </label>
  <select
    :id="uuid"
    class="input-field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
  >
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
</template>

<script>
import UniqueID from '../../features/UniqueID';

export default {
  props: {
    label: {
      type: [String, Object],
      default: "",
      required: false
    },
    defaultValue: {
      type: [String],
      default: "",
      required: false,
    },
    modelValue: {
      type: [String, Number],
      default: "Otros",
    },
    options: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<style scoped>
label {
    display: block;
    margin: 0px 0px 3px 4px;
}

select {
    text-transform: capitalize;
    font-size: 1.1rem;
    letter-spacing: .2px;
    cursor: pointer;
}

span {
    cursor: pointer;
}
</style>