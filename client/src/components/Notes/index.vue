<template>
  <div class="notes">
    <h1
      v-if="title"
      class="notes__heading heading-base"
    >
      {{ title }}
    </h1>
    
    <div class="notes__wrap">
      <From
        :formName="formName"
        @formSubmit="$emit('formSubmit', $event)"
      />

      <List
        :items="items"
        :paginationPageCount="paginationPageCount"
        @paginationChange="$emit('paginationChange', $event)"
        @formSubmit="$emit('formSubmit', $event)"
        @itemRemove="$emit('itemRemove', $event)"
      />
    </div>

    <Notification
      :text="message"
      type="success"
    />
  </div>
</template>

<script setup>
import From from '@/components/Notes/Form';
import List from '@/components/Notes/List';

const props = defineProps({
  title: {
    type: String
  },
  items: {
    type: Array,
    required: true
  },
  formName: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  paginationPageCount: {
    type: Number
  }
});
</script>

<style lang="scss" scoped>
.notes {
  margin-bottom: 50px;

  &__wrap {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>