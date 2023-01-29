<template>
  <form
    class="notes__from"
    @submit.prevent="formSubmit"
  >
    <InputboxBase
      :label="$t('title')"
      :validation="v$.title"
      v-model.trim="form.title"
      class="notes__from-row"
    />

    <TextareaBase
      :label="$t('description')"
      :validation="v$.description"
      v-model.trim="form.description"
      class="notes__from-row"
    />

    <ButtonBase
      type="submit"
      class="notes__from-row"
    >
      {{ $t('add') }}
    </ButtonBase>
  </form>
</template>

<script setup>
import { reactive, watch, onBeforeMount } from 'vue';
import InputboxBase from '@/components/ui/InputboxBase';
import TextareaBase from '@/components/ui/TextareaBase';
import ButtonBase from '@/components/ui/ButtonBase';
import useValidation from '@/hooks/useValidation';

const emit = defineEmits([
  'formChange',
  'formSubmit'
]);

const props = defineProps([
  'formName'
]);

const formDataLocal = reactive(JSON.parse(localStorage.getItem(props.formName)) || {});

const formData = reactive({
  title: {
    required: true,
    value: formDataLocal.title
  },
  description: {
    required: true,
    value: formDataLocal.description
  }
});

const {form, v$, fromClear} = useValidation(formData);

onBeforeMount(() => {
  if (!localStorage.getItem(props.formName)) {
    const data = Object.keys(formData).reduce((acc, key) => {
      acc[key] = '';

      return acc;
    }, {});

    localStorage.setItem(props.formName, JSON.stringify(data));
  }
});

watch(() => form, (data) => {
  localStorage.setItem(props.formName, JSON.stringify(data));
}, {
  deep: true
});

const formSubmit = () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    emit('formSubmit', form);
    fromClear();
  }
}
</script>

<style lang="scss" scoped>
.notes {
  &__from {
    @include media('min', $viewport-post-md) {
      flex: 0 0 25%;
      padding-right: 20px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 30px;
    }
  }

  &__from-row {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>