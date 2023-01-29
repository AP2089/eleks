<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li
        v-for="item in items"
        :key="item.id"
        class="breadcrumb__item"
      >
        <router-link
          v-if="item.url"
          :to="item.url"
          class="breadcrumb__link"
        >
          {{ item.title }}
        </router-link>

        <span
          v-else
          class="breadcrumb__current"
        >
          {{ item.title }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss">
.breadcrumb {
  margin-bottom: 20px;

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: inline;
    vertical-align: top;
    padding: 0;
    margin: 0;

    &:after {
      content: '/';
      padding: 0 7px;
    }

    &:last-child:after {
      display: none;
    }
  }

  &__link {
    color: $color-primary;
    text-decoration: underline;

    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }
}
</style>