import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchItems from '@/hooks/useFeatchItems';

const useNotesStore = defineStore('notesStore', () => {
  const { isLoading, error, limit, pageCount, totalCount, loading, unload, loaded, setOptions, setUrlParams } = useFeatchItems();
  const title = ref('');
  const items = ref([]);
  const formName = ref('formNotes');

  const dataFeatch = async (pageNumber = null) => {
    try {
      loading();

      const setParams = setUrlParams({
        _page: pageNumber
      });
      
      const { data, headers } = await axios.get('/notes', {
        params: {
          ...setParams,
          _sort: 'id',
          _order: 'desc'
        }
      });

      setOptions(data.meta, headers['x-total-count']);
      title.value = data.title;
      items.value = data.items;
    } catch (error) {
      unload(error);
    } finally {
      loaded();
    }
  }

  const itemAdd = async (formData) => {
    try {
      loading();
      
      await axios.post('/notes', formData);

      dataFeatch(1);
    } catch (error) {
      unload(error);
    } finally {
      loaded();
    }
  }

  const itemRemove = async (id) => {
    try {
      loading();
      
      await axios.delete(`/notes/${id}`);

      dataFeatch(1);
    } catch (error) {
      unload(error);
    } finally {
      loaded();
    }
  }

  return {
    title,
    items,
    formName,
    pageCount,
    isLoading,
    error,
    itemAdd,
    itemRemove,
    dataFeatch
  }
});

export default useNotesStore;