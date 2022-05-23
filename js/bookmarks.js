export function bookmarks() {
  const addBookmark = document.querySelector('[data-js="add-bookmark"]');
  const removeBookmark = document.querySelector('[data-js="remove-bookmark"]');

  addBookmark.addEventListener('click', () => {
    removeBookmark.classList.toggle('bookmark__add--active');
  });
}
