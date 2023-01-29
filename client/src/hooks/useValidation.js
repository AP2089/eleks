import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import translations from '@/translations';

const phone = helpers.regex(/^\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/);

export const setTranslation = (rule, message) => {
  return helpers.withMessage(translations.global.t(message), rule);
}

const useValidation = options => {
  const initialState = {};
  const state = {};

  const rules = {
    $autoDirty: true
  }

  for (const option in options) {
    const properties = options[option];

    initialState[option] = state[option] = '';
    rules[option] = {};

    for (const property in properties) {
      const data = properties[property];

      if (data) {
        if (property === 'required') {
          rules[option][property] = setTranslation(required, 'validation.error.required');
        } else if (property === 'email') {
          rules[option][property] = setTranslation(email, 'validation.error.email');
        } else if (property === 'phone') {
          rules[option][property] = setTranslation(phone, 'validation.error.phone');
        } else if (property === 'value') {
          initialState[option] = state[option] = data;
        }
      }
    }
  }

  const form = reactive(state);
  const v$ = useVuelidate(rules, form);

  const fromClear = () => {
    for (const key in form) {
      form[key] = '';
    }

    v$.value.$reset();
  }

  return {
    form,
    v$,
    fromClear
  }
}

export default useValidation;