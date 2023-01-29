<template>
  <LayoutMain>
    <h2>{{ $t('not.found') }}</h2>
    <p>{{ $t('go.back') }}</p>
    <p>
      <ButtonBase
        url="/"
      >
        {{ $t('home') }}
      </ButtonBase>
    </p>
  </LayoutMain>
</template>

<script setup>
import LayoutMain from '@/components/LayoutMain';
import ButtonBase from '@/components/ui/ButtonBase';
</script>