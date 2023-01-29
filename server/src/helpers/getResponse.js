module.exports = (route, result) => {
  if (route === 'notes') {
    const title = 'Заметки';

    const items = result.map(element => ({
      ...element,
      url: `/notes/${element.id}`
    }));

    return {
      meta: {
        title
      },
      title,
      items
    }
  } else if (route === 'note') {
    if (Object.keys(result).length > 0) {
      const title = result.title;

      const breadcrumb = [
        { id: 1, title: 'Главная', url: '/' },
        { id: 2, title, url: null }
      ];
  
      return {
        meta: {
          title
        },
        ...result,
        breadcrumb
      }
    } else {
      return null;
    }
  }
}