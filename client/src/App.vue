<template>
  <router-view></router-view>

  <Loader
    :isLoading="globalStore.isLoading"
  />

  <Notification
    v-for="error in globalStore.errors"
    :title="$t('error')"
    :text="error"
    type="error"
  />
</template>

<script setup>
import useGlobalState from '@/stores/globalStore';

const globalStore = useGlobalState();
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
