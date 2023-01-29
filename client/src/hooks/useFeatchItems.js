import { ref, computed } from 'vue';
import useFeatchEvent from '@/hooks/useFeatchEvent';
import useUrlParams from '@/hooks/useUrlParams';

const useFeatchItems = () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const limit = ref(9);
  const totalCount = ref(0);

  const pageCount = computed(() => {
    return Math.ceil(totalCount.value / limit.value);
  });

  const setOptions = (meta, count) => {
    if (meta) {
      setMeta(meta);
    }

    if (count) {
      totalCount.value = Number(count);
    }
  }

  const setUrlParams = (params) => {
    return useUrlParams({
      ...params,
      _limit: limit.value
    });
  }

  return {
    isLoading,
    error,
    pageCount,
    totalCount,
    loading,
    unload,
    loaded,
    limit,
    setOptions,
    setUrlParams
  }
}

export default useFeatchItems;