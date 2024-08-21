import { fetchCharacters, renderCards } from "../../index.js";
import { renderPagination } from "../nav-pagination/nav-pagination.js";

//TODO: fix carossell and build input for currentPage index…

// const prevButton = document.querySelector('[data-js="button-prev"]');
const navContainer = document.querySelector('[data-js="navigation"]');
navContainer.classList.add("navigation");

// export const createButton = async (appState, buttonData) => {
//   const prevButton = document.createElement("button");
//   const nextButton = document.createElement("button");

//   prevButton.textContent = `prev`;
//   nextButton.textContent = `next`;

//   prevButton.setAttribute("data-js", "button-prev");
//   nextButton.setAttribute("data-js", "button-next");
//   prevButton.classList.add("button", "button--prev");
//   nextButton.classList.add("button", "button--next");

//   prevButton.addEventListener("click", async () => {
//     handleButtonPagination(appState, "-");
//   });

//   nextButton.addEventListener("click", async () => {
//     handleButtonPagination(appState, "+");
//   });
//   navContainer.append(prevButton, nextButton);
//   navContainer.classList.add("navigation");
//   // handleUIState(appState);
// };

export const createButton = (appState, buttonData) => {
  console.log(buttonData.textContent);
  const button = document.createElement("button");

  button.textContent = buttonData.textContent;

  button.setAttribute("data-js", buttonData.dataJS);
  button.classList.add("button", buttonData.class);
  button.addEventListener("click", async () => {
    handleButtonPagination(appState, buttonData.upOrDown);
  });

  // handleUIState(appState);
};

async function handleButtonPagination(appState, upOrDown) {
  if (upOrDown === "-") {
    appState.currentPage = appState.currentPage - 1;
  } else {
    appState.currentPage = appState.currentPage + 1;
  }
  // handleUIState(appState);
  renderPagination(appState);

  const data = await fetchCharacters(appState);
  renderCards(data);
}

// export const handleUIState = (appState) => {
//   const prevButton = document.querySelector('[data-js="button-prev"]');
//   const nextButton = document.querySelector('[data-js="button-next"]');
//   prevButton.disabled = false;
//   nextButton.disabled = false;
//   if (appState.currentPage <= 1) {
//     prevButton.disabled = true;
//     //  appState.currentPage = appState.maxPage;
//     // const data = await fetchCharacters(appState);
//     // renderCards(data);
//     // renderPagination(appState)
//   } else if (appState.currentPage >= appState.maxPage) {
//     nextButton.disabled = true;
//     // appState.currentPage = 1;
//     // const data = await fetchCharacters(appState);
//     // renderCards(data);
//     // renderPagination(appState);
//   }
//   window.scroll({
//     top: 0,
//     behavior: "instant",
//   });
// };
