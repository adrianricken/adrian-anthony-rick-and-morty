import { fetchCharacters, renderCards } from "../../index.js";
import { renderPagination } from "../nav-pagination/nav-pagination.js";
import { handleUIState } from "../nav-button/nav-button.js";

const searchBar = document.querySelector('[data-js="search-bar"]');
const submitButton = document.querySelector(
  '[data-js="search-bar__submit-button"]'
);

export const initSearchBar = (appState) => {
  searchBar.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
  });
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit(appState);
  });
};

export const handleSubmit = async (appState) => {
  appState.currentPage = 1;
  const data = await fetchCharacters(appState);
  appState.maxPage = data.info.pages;
  handleUIState(appState);
  renderPagination(appState);
  renderCards(data);
};
