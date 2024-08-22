import { fetchCharacters, manageLS } from "./utils/utils.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { renderPagination } from "./components/nav-pagination/nav-pagination.js";
import {
  createSearchBar,
  initSearchBar,
} from "./components/search-bar/search-bar.js";
import { renderCards } from "./components/cards-list/cards-list.js";
// import arrowLeft from "./assets/arrow-left-3099.png";
// import arrowRight from "./assets/arrow-right-3098.png";

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
  // iconPNG: arrowLeft,
};
const buttonDataNext = {
  class: "button--next",
  upOrDown: "+",
  textContent: "next",
  dataJS: "button-next",
  // iconPNG: arrowRight,
};

const initApp = async () => {
  manageLS("get", appState);
  console.log(appState);

  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const h1Title = document.createElement("h1");
  h1Title.textContent = "Rick and More";
  h1Title.classList.add("title");

  const navContainer = document.querySelector('[data-js="navigation"]');
  const searchBarContainer = document.createElement("div");
  const cardContainer = document.createElement("ul");

  searchBarContainer.classList.add("search-bar-container");
  cardContainer.setAttribute("data-js", "card-container");
  cardContainer.classList.add("card-container");

  const fetchedData = await fetchCharacters(appState);

  const prevButton = createButton(appState, cardContainer, buttonDataPrev);
  const nextButton = createButton(appState, cardContainer, buttonDataNext);
  const pagination = renderPagination(appState);
  const searchBar = createSearchBar(appState, cardContainer);
  initSearchBar(appState, searchBar, cardContainer);

  const cardsList = renderCards(fetchedData, cardContainer);

  navContainer.append(prevButton, pagination, nextButton);
  searchBarContainer.append(searchBar);
  header.append(h1Title, searchBarContainer);
  main.append(cardsList);

  manageLS("set", appState);
};
initApp();
