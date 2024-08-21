export const renderPagination = (appState) => {
  console.log(appState.currentPage);

  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.textContent = `${appState.currentPage} / ${appState.maxPage}`;
};
