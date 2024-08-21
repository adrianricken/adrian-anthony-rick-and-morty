import { createCharacterCard } from "./components/card/card.js";
import { initNavButtons } from "./components/nav-button/nav-button.js";
import { renderPagination } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
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
  searchQuery: "rick",
};

//TODO: refactor into utils.js:
export const fetchCharactersByPage = async (appState) => {
  console.log(appState.currentPage);
  const url = `https://rickandmortyapi.com/api/character/?page=${appState.currentPage}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    appState.maxPage = data.info.pages;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchCharactersByName = async (appState) => {};

const fetchedData = await fetchCharactersByPage(appState);

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

//TODO: write pagination fn:
renderCards(fetchedData);
initNavButtons(appState);
renderPagination(appState);
//TODO: write user input fn:
// handleUserInput();
