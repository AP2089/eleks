const getUrlParams = () => {
  const search = window.location.search;
  let params = {};

  if (search) {
    const data = search
      .replace(/^\?/, '')
      .split('&')
      .filter(v => v)
      .reduce((acc, v) => {
        const [key, val] = v.split('=');

        return [...acc, `"${key}":${val}`];
      }, [])
      .join(',');

    if (data) {
      params = JSON.parse(`{${data}}`);
    }
  }

  return params;
}

export default getUrlParams;