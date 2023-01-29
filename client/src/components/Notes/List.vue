<template>
  <div class="notes__list">
    <div class="notes__items"
      v-if="items.length > 0"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="notes__item"
      >
        <div class="notes__title">{{ item.title }}</div>
        <div class="notes__description">{{ item.description }}</div>
        <div class="notes__control">
          <ButtonExtra
            :url="item.url"
            class="notes__control-btn"
          >
            {{ $t('open') }}
          </ButtonExtra>

          <ButtonExtra
            :disabled="globalStore.isLoading"
            variant="danger"
            class="notes__control-btn"
            @click="$emit('itemRemove', item.id)"
          >
            {{ $t('remove') }}
          </ButtonExtra>
        </div>
      </div>
    </div>

    <Message
      v-else
      :text="$t('no.articles')"
    />

    <Pagination
      v-if="paginationPageCount"
      :pageCount="paginationPageCount"
      @change="$emit('paginationChange', $event)"
    />
  </div>
</template>

<script setup>
import Message from '@/components/ui/Message';
import ButtonExtra from '@/components/ui/ButtonExtra';
import Pagination from '@/components/ui/Pagination';
import useGlobalStore from '@/stores/globalStore';

const props = defineProps([
  'items',
  'paginationPageCount'
]);

const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.notes {
  &__list {
    @include media('min', $viewport-post-md) {
      flex: 0 0 75%;
    }
  }

  &__items {
    display: grid; 
    gap: 20px 20px;

   @include media('min', $viewport-post-md) {
    grid-template-columns: 1fr 1fr 1fr; 
   }
   
   @include media(null, $viewport-post-sm, $viewport-md) {
    grid-template-columns: 1fr 1fr; 
   }
   
   @include media('max', $viewport-sm) {
    grid-template-columns: 1fr; 
   }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 16px;
    border: 1px solid $color-secondary;
    border-radius: 5px;
  }

  &__title {
    font-weight: bold;
    margin: 0 0 5px 0;
    width: 100%;
  }

  &__description {
    display: -webkit-box;
    width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 0 12px 0;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    width: 100%;
  }

  &__control-btn {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>