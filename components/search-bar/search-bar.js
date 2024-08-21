import { fetchCharacters, manageLS } from "../../utils/utils.js";
import { renderCards } from "../cards-list/cards-list.js";
import { renderPagination } from "../nav-pagination/nav-pagination.js";

function isCursorInInputField() {
  const activeElement = document.activeElement;
  return (
    activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA"
  );
}

// Example usage

export const createSearchBar = (appState, cardContainer) => {
  const searchBar = document.createElement("form");
  const input = document.createElement("input");
  const submitButton = document.createElement("button");
  const icon = document.createElement("img");

  input.name = "query";
  input.placeholder = "search characters";
  icon.src = "../../assets/magnifying-glass.png";

  searchBar.setAttribute("data-js", "search-bar");

  searchBar.classList.add("search-bar");
  input.classList.add("search-bar__input");
  submitButton.classList.add("search-bar__button");
  icon.classList.add("search-bar__icon");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit(appState, cardContainer);
  });

  submitButton.append(icon);
  searchBar.append(input, submitButton);

  return searchBar;
};

export const initSearchBar = (appState, searchBar, cardContainer) => {
  searchBar.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;

    if (isCursorInInputField()) {
      console.log("Cursor is in an input field!");
      cardContainer.classList.add("blur");
    } else {
      console.log("Cursor is not in an input field.");
      cardContainer.classList.remove("blur");
    }
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
