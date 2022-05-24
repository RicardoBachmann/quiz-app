export function bookmarks() {
  const addBookmark = document.querySelector('[data-js="add-bookmark"]');
  const removeBookmark = document.querySelector('[data-js="remove-bookmark"]');

  addBookmark.addEventListener('click', toggleBookmark);
  removeBookmark.addEventListener('click', toggleBookmark);

  function toggleBookmark() {
    removeBookmark.classList.toggle('hidden');
    addBookmark.classList.toggle('hidden');
  }
}
