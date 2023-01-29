import { computed } from 'vue';
import { defineStore, getActivePinia } from 'pinia';

const useGlobalStore = defineStore('globalStore', () => {
  const storesActive = getActivePinia();

  const isLoading = computed(() => {
    if (storesActive) {
      const data = storesActive.state.value;
      const values = [];

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          values.push(data[key].isLoading);
        }
      }
  
      return values.includes(true);
    }

    return false;
  });

  const errors = computed(() => {
    if (storesActive) {
      const data = storesActive.state.value;
      const values = [];

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          values.push(data[key].error);
        }
      }
  
      return values.filter(v => !!v);
    }

    return [];
  });

  return {
    isLoading,
    errors
  }
});

export default useGlobalStore;