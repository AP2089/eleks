<template>
  <div class="note">
    <Breadcrumb
      v-if="breadcrumb.length > 0"
      :items="breadcrumb"
      class="note__breadcrumb"
    />

    <h1 class="note__heading heading-base">{{ title }}</h1>
    <div class="note__description" v-html="description"></div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/ui/Breadcrumb';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  breadcrumb: {
    type: Array
  }
});
</script>

<style lang="scss" scoped>
.note {
  margin-bottom: 50px;
}
</style>