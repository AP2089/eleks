<template>
  <div
    :class="classes"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'info'
  }
});

const classes = computed(() => ([
  'message',
  `message_${props.variant}`
]));
</script>

<style lang="scss" scoped>
.message {
  font-size: 14px;
  line-height: 1.4;

  &_info {
    margin-bottom: 20px;
  }

  &_error {
    padding-top: 5px;
    color: $color-danger;
  }
}
</style>