import { fetchCharacters, manageLS } from "../../utils/utils.js";
import { renderCards } from "../cards-list/cards-list.js";
import { renderPagination } from "../nav-pagination/nav-pagination.js";

//TODO: fix carossell and build input for currentPage index…

const navContainer = document.querySelector('[data-js="navigation"]');
navContainer.classList.add("navigation");

export const createButton = (appState, cardContainer, buttonData) => {
  const button = document.createElement("button");

  button.textContent = buttonData.textContent;

  button.setAttribute("data-js", buttonData.dataJS);
  button.classList.add("button", buttonData.class);
  button.addEventListener("click", async () => {
    handleButtonPagination(appState, cardContainer, buttonData.upOrDown);
  });

  // handleUIState(appState);
  return button;
};

async function handleButtonPagination(appState, cardContainer, upOrDown) {
  if (upOrDown === "-") {
    appState.currentPage = appState.currentPage - 1;
  } else {
    appState.currentPage = appState.currentPage + 1;
  }
  handleUIState(appState);
  renderPagination(appState);

  const data = await fetchCharacters(appState);
  renderCards(data, cardContainer);
  manageLS("set", appState);
}

export const handleUIState = (appState) => {
  const prevButton = document.querySelector('[data-js="button-prev"]');
  const nextButton = document.querySelector('[data-js="button-next"]');
  prevButton.disabled = false;
  nextButton.disabled = false;
  if (appState.currentPage <= 1) {
    prevButton.disabled = true;
    //  appState.currentPage = appState.maxPage;
    // const data = await fetchCharacters(appState);
    // renderCards(data);
    // renderPagination(appState)
  } else if (appState.currentPage >= appState.maxPage) {
    nextButton.disabled = true;
    // appState.currentPage = 1;
    // const data = await fetchCharacters(appState);
    // renderCards(data);
    // renderPagination(appState);
  }
  window.scroll({
    top: 0,
    behavior: "instant",
  });
};
