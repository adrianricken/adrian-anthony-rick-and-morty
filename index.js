import { createCharacterCard } from "./components/card/card.js";
// import { prevPage, nextPage } from "./button/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

export const fetchCharacters = async (page) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchedData = await fetchCharacters(page);
console.log(fetchedData.results);

fetchedData?.results?.forEach((element) => {
  const newCharacterCard = createCharacterCard(element);
  console.log(newCharacterCard);

  // const card = document.createElement("div");
  // card.innerHTML = newCharacterCard;
  cardContainer.append(newCharacterCard);
});

// prevPage();
// nextPage();
