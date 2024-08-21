const navContainer = document.querySelector('[data-js="navigation"]');
const createPagination = document.createElement("span");

navContainer;

export const renderPagination = (appState) => {
  // console.log(appState.currentPage);
  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.textContent = `${appState.currentPage} / ${appState.maxPage}`;
};
