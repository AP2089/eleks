<template>
  <LayoutMain>
    <Note
      :title="noteStore.title"
      :description="noteStore.description"
      :breadcrumb="noteStore.breadcrumb"
    />
  </LayoutMain>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutMain from '@/components/LayoutMain';
import Note from '@/components/Note';
import useNoteStore from '@/stores/noteStore';

const noteStore = useNoteStore();

onMounted(() => {
  noteStore.dataFeatch();
});
</script>