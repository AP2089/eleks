<template>
  <router-link
    v-if="url"
    :to="url"
    :class="classes"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    :type="type"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  url: {
    type: String
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  }
});

const classes = computed(() => ([
  'btn-extra',
  `btn-extra_${props.variant}`
]));
</script>

<style lang="scss" scoped>
.btn-extra {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  background-color: #FFFFFF;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  outline: none;
  padding: 7px 15px;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  &:hover {
    text-decoration: none;
    color: #FFFFFF;
  }

  &[disabled] {
    cursor: default !important;
    background-color: #FFFFFF !important;
    opacity: .7 !important;
  }

  &_primary {
    color: $color-primary;
    border-color: $color-primary;

    &:hover {
      background-color: $color-primary;
    }

    &[disabled] {
      color: $color-primary !important;;
    }
  }

  &_danger {
    color: $color-danger;
    border-color: $color-danger;

    &:hover {
      background-color: $color-danger;
    }

    &[disabled] {
      color: $color-danger !important;;
    }
  }
}
</style>