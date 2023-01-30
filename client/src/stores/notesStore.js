import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import translations from '@/translations';
import useFeatchItems from '@/hooks/useFeatchItems';

const useNotesStore = defineStore('notesStore', () => {
  const { isLoading, error, pageCount, message, loading, unload, loaded, setOptions, setUrlParams, showMessage } = useFeatchItems();
  const title = ref('');
  const items = ref([]);
  const formName = ref('formNotes');

  const dataFeatch = async (pageNumber = null, message = null) => {
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

      if (message) {
        showMessage(message);
      }
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

      dataFeatch(1, translations.global.t('item.add'));
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

      dataFeatch(1, translations.global.t('item.remove'));
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
    message,
    isLoading,
    error,
    itemAdd,
    itemRemove,
    dataFeatch
  }
});

export default useNotesStore;