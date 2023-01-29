import router from '@/router';
import getUrlParams from '@/helpers/getUrlParams';

const useUrlParams = (params) => {
  const urlParams = getUrlParams();
  const ignoreParams = ['_limit'];
  const queryParams = {};

  if (!params._page) {
    if (!urlParams._page) {
      urlParams._page = 1;
    }

    params = {
      ...params,
      ...urlParams
    }
  }

  for (const key in params) {
    const value = params[key];

    if (Array.isArray(value)) {
      if (value.length > 0) {
        queryParams[key] = value;
      }
    } else if (value) {
      queryParams[key] = value;
    }
  }

  const searchParams = Object.entries(queryParams)
    .filter(([key]) => !ignoreParams.includes(key))
    .map(([key, value]) => `${key}=${Array.isArray(value) ? `[${value}]` : value}`)
    .join('&');
  
  const url = window.location.pathname + (searchParams ? `?${searchParams}` : '');

  router.push(url);

  return queryParams;
}

export default useUrlParams;