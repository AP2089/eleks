<template>
  <Notifications />
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useNotification } from '@kyvg/vue3-notification';

const { notify } = useNotification();

const props = defineProps({
  title: {
    type: String
  },
  text: {
    type: String
  },
  type: {
    type: String,
    default: 'warn'
  }
});

const show = () => {
  if (props.text) {
    notify({
      title: props.title,
      text: props.text,
      type: props.type,
      duration: 3000,
    });
  }
}

onMounted(() => {
  show();
});

watch(() => props.text, () => {
  show();
});
</script>