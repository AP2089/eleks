<template>
  <Paginate
    v-model="pageActive"
    :page-count="pageCount"
    :click-handler="pageChange"
    prev-text="&larr;"
    next-text="&rarr;"
    v-if="pageCount > 1"
  />
</template>

<script setup>
import { ref, watch } from 'vue';
import Paginate from 'vuejs-paginate-next';
import { useRoute } from 'vue-router';

const props = defineProps({
  pageCount: {
    type: Number,
    default: 0,
    required: true
  }
});

const emit = defineEmits([
  'change'
]);

const route = useRoute();
const pageActive = ref(Number(route.query._page) || 1);

const pageChange = (pageNumber) => {
  emit('change', pageNumber);
  window.scrollTo(0, 0);
}

watch(() => route.query._page, (value) => {
  pageActive.value = Number(value) || 1;
});
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 30px 0 0 0;
  list-style: none;

  .page-item {
    margin: 0 4px;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    color: $color-primary;
    user-select: none;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .page-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    min-height: 30px;
    padding: 2px;
    margin: 0;
    color: $color-primary;
    cursor: pointer;
    border: 1px solid $color-primary;
    background-color: transparent;
    border-radius: 50%;
    transition: color .5s ease 0s, background-color .5s ease 0s, border-color .5s ease 0s;
  }

  .page-item:first-child .page-link,
  .page-item:last-child .page-link {
    font-size: 16px;
    align-items: flex-start;
    padding-top: 4px;
  }

  .page-item .page-link:hover,
  .page-item.active .page-link {
    color: #ffffff;
    background-color: $color-primary;
  }

  .page-item.disabled .page-link {
    cursor: default;
    color: rgba(54, 54, 54, 0.35) !important;
    background-color: transparent !important;
    opacity: .5;
  }
}
</style>