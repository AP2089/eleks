<template>
  <div class="inputbox-base">
    <div
      class="inputbox-base__label"
      v-if="label"
    >
      {{ label }}
    </div>

    <input
      type="text"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="inputChange"
    />

    <Message
      v-if="validation.$dirty && validation.$errors.length > 0"
      :text="validation.$errors[0].$message"
      variant="error"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Message from '@/components/ui/Message';

const props = defineProps({
  label: {
    type: String
  },
  modelValue: {
    type: [String, Number]
  },
  placeholder: {
    type: String
  },
  validation: {
    type: Object,
    default: {}
  },
  readonly: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  'update:modelValue'
]);

const inputClasses = computed(() => {
  return [
    'inputbox-base__field',
    {error: props.validation.$dirty && props.validation.$invalid}
  ];
});

const inputChange = (event) => {
  const value = event.target.value;

  emit('update:modelValue', value);
}
</script>

<style lang="scss" scoped>
.inputbox-base {
  $rs: &;

  &__label {
    font-size: 14px;
    line-height: 1.4;
    color: $color-global;
    margin-bottom: 5px;
  }

  &__field {
    display: block;
    width: 100%;
    border: 1px solid $color-secondary;
    border-radius: 4px;
    font-style: normal;
    font-size: 14px;
    color: $color-global;
    height: 36px;
    padding: 0 10px;
    outline: none;
    transition: border-color .5s ease 0s, color .5s ease 0s;

    &:hover,
    &:focus {
      border-color: $color-global;
    }

    &.error {
      border-color: $color-danger;
      color: $color-danger;
    }

    &[readonly] {
      border-color: $color-secondary !important;
    }
  }

  &_sm {
    #{$rs}__field {
      height: 40px;
      padding: 0 10px;
    }
  }
}
</style>