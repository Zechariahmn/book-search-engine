export const getSavedBookIds = () => {
    const savedBookIds = localStorage.getItem('SavedBooks')
      ? JSON.parse(localStorage.getItem('SavedBooks'))
      : [];
  
    return savedBookIds;
  };
  
  export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
      localStorage.setItem('SavedBooks', JSON.stringify(bookIdArr));
    } else {
      localStorage.removeItem('SavedBooks');
    }
  };
  
  export const removeBookId = (bookId) => {
    const savedBookIds = localStorage.getItem('SavedBooks')
      ? JSON.parse(localStorage.getItem('SavedBooks'))
      : null;
  
    if (!savedBookIds) {
      return false;
    }
  
    const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
    localStorage.setItem('SavedBooks', JSON.stringify(updatedSavedBookIds));
  
    return true;
  };