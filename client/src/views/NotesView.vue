<template>
  <LayoutMain>
    <Notes
      :title="notesStore.title"
      :items="notesStore.items"
      :paginationPageCount="notesStore.pageCount"
      :formName="notesStore.formName"
      @paginationChange="notesStore.dataFeatch"
      @formSubmit="notesStore.itemAdd"
      @itemRemove="notesStore.itemRemove"
    />
  </LayoutMain>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutMain from '@/components/LayoutMain';
import Notes from '@/components/Notes';
import useNotesStore from '@/stores/notesStore';

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.dataFeatch();
});
</script>