<template>
  <router-link
    v-if="url"
    :to="url"
    class="btn-base"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    :type="type"
    class="btn-base"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String
  },
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<style lang="scss" scoped>
.btn-base {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  background-color: $color-primary;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
  color: #FFFFFF;
  border: 1px solid $color-primary;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  &:hover {
    text-decoration: none;
    color: $color-primary;
    background-color: #FFFFFF;
  }

  &[disabled] {
    cursor: default !important;
    color: #FFFFFF !important;
    background-color: $color-primary !important;
    opacity: .7 !important;
  }
}
</style>