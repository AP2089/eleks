import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import router from '@/router';
import formatText from '@/helpers/formatText';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useNoteStore = defineStore('noteStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const title = ref('');
  const description = ref('');
  const breadcrumb = ref([]);

  const dataFeatch = async () => {
    try {
      loading();

      const { data } = await axios.get(`/notes/${router.currentRoute.value.params.id}`);

      setMeta(data.meta);
      title.value = data.title;
      description.value = formatText(data.description);
      breadcrumb.value = data.breadcrumb;
    } catch (error) {
      unload(error);
    } finally {
      loaded();
    }
  }

  return {
    title,
    description,
    breadcrumb,
    isLoading,
    error,
    dataFeatch
  }
});

export default useNoteStore;