import { fetchCharactersByPage, renderCards } from "../../index.js";
import { renderPagination } from "../nav-pagination/nav-pagination.js";

//TODO: fix carossell and build input for currentPage index…

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export const initNavButtons = async (appState) => {
  prevButton.addEventListener("click", async () => {
    handleButtonPagination(appState, "-");
  });
  nextButton.addEventListener("click", async () => {
    handleButtonPagination(appState, "+");
  });
  handleUIState(appState);
};

async function handleButtonPagination(appState, upOrDown) {
  if (upOrDown === "-") {
    appState.currentPage = appState.currentPage - 1;
  } else {
    appState.currentPage = appState.currentPage + 1;
  }
  const data = await fetchCharactersByPage(appState);
  renderCards(data);
  renderPagination(appState);

  window.scroll({
    top: 0,
    behavior: "instant",
  });
  handleUIState(appState);
}
const handleUIState = (appState) => {
  prevButton.disabled = false;
  nextButton.disabled = false;
  if (appState.currentPage === 1) {
    prevButton.disabled = true;
    //  appState.currentPage = appState.maxPage;
    // const data = await fetchCharactersByPage(appState);
    // renderCards(data);
    // renderPagination(appState)
  } else if (appState.currentPage >= appState.maxPage) {
    nextButton.disabled = true;
    appState.currentPage = 1;
    // const data = await fetchCharactersByPage(appState);
    // renderCards(data);
    // renderPagination(appState);
  }
};
