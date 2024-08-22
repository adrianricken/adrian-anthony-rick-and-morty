export const renderPagination = (appState) => {
  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.textContent = `${appState.currentPage} / ${appState.maxPage}`;

  return pagination;
};
