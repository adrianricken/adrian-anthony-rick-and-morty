import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { renderPagination } from "./components/nav-pagination/nav-pagination.js";
import { initSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
// const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// // States
// const maxPage = 1;
// const page = 1;
// const searchQuery = "";

const appState = {
  maxPage: null,
  currentPage: 1,
  searchQuery: "",
};

//TODO: refactor into utils.js:
export const fetchCharacters = async (appState) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${appState.currentPage}&name=${appState.searchQuery}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // initialize maxPage from data response
    appState.maxPage = data.info.pages;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchedData = await fetchCharacters(appState);

//TODO: refactor into cardsList.js:
export const renderCards = (data) => {
  cardContainer.innerHTML = "";
  data?.results?.forEach((element) => {
    const newCharacterCard = createCharacterCard(element);

    // const card = document.createElement("div");
    // card.innerHTML = newCharacterCard;
    cardContainer.append(newCharacterCard);
  });
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

createButton(appState, buttonDataPrev);
// const prevButton =
// const nextButton = createButton(appState, buttonDataNext);
const pagination = renderPagination(appState);
const navContainer = document.querySelector('[data-js="navigation"]');

// navContainer.append(prevButton, pagination, nextButton);

initSearchBar(appState);
renderCards(fetchedData);
