import { fetchCharacters, manageLS } from "./utils/utils.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { renderPagination } from "./components/nav-pagination/nav-pagination.js";
import {
  createSearchBar,
  initSearchBar,
} from "./components/search-bar/search-bar.js";
import { renderCards } from "./components/cards-list/cards-list.js";

const appState = {
  maxPage: null,
  currentPage: 1,
  searchQuery: "",
};
const buttonDataPrev = {
  class: "button--prev",
  upOrDown: "-",
  textContent: "prev",
  dataJS: "button-prev",
};
const buttonDataNext = {
  class: "button--next",
  upOrDown: "+",
  textContent: "next",
  dataJS: "button-next",
};

const initApp = async () => {
  manageLS("get", appState);
  const body = document.querySelector("body");
  const navContainer = document.querySelector('[data-js="navigation"]');
  const searchBarContainer = document.createElement("div");
  const cardContainer = document.createElement("ul");

  searchBarContainer.classList.add("search-bar-container");
  cardContainer.setAttribute("data-js", "card-container");

  const fetchedData = await fetchCharacters(appState);

  const prevButton = createButton(appState, cardContainer, buttonDataPrev);
  const nextButton = createButton(appState, cardContainer, buttonDataNext);
  const pagination = renderPagination(appState);
  const searchBar = createSearchBar(appState, cardContainer);
  initSearchBar(appState, searchBar, cardContainer);

  const cardsList = renderCards(fetchedData, cardContainer);

  navContainer.append(prevButton, pagination, nextButton);
  searchBarContainer.append(searchBar);
  body.append(searchBarContainer, cardsList);
};
initApp();
