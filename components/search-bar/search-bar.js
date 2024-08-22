import { fetchCharacters, manageLS } from "../../utils/utils.js";
import { renderCards } from "../cards-list/cards-list.js";
import { renderPagination } from "../nav-pagination/nav-pagination.js";

// Set Input outside for other components
const input = document.createElement("input");

export const createSearchBar = (appState, cardContainer) => {
  // Create Elements
  const searchBar = document.createElement("form");
  const submitButton = document.createElement("button");
  const icon = document.createElement("img");

  // Set Attributes
  input.name = "query";
  input.placeholder = "search characters";
  icon.src = "../../assets/magnifying-glass.png";
  searchBar.setAttribute("data-js", "search-bar");

  // Set Classes
  searchBar.classList.add("search-bar");
  input.classList.add("search-bar__input");
  submitButton.classList.add("search-bar__button");
  icon.classList.add("search-bar__icon");

  // Set Event Listeners
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit(appState, cardContainer);
  });

  // Append Elements
  submitButton.append(icon);
  searchBar.append(input, submitButton);

  return searchBar;
};

export const initSearchBar = (appState, searchBar, cardContainer) => {
  input.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
  });

  // Set Detection for Blur Class
  input.addEventListener("focus", () => {
    cardContainer.classList.add("blur");
  });
  input.addEventListener("blur", () => {
    cardContainer.classList.remove("blur");
  });
};

export const handleSubmit = async (appState, cardContainer) => {
  appState.currentPage = 1;
  const data = await fetchCharacters(appState);
  appState.maxPage = data.info.pages;
  // handleUIState(appState);
  renderPagination(appState);
  renderCards(data, cardContainer);

  if (isCursorInInputField()) {
    console.log("Cursor is in an input field!");
    cardContainer.classList.add("blur");
  } else {
    console.log("Cursor is not in an input field.");
    cardContainer.classList.remove("blur");
  }
  manageLS("set", appState);
};
