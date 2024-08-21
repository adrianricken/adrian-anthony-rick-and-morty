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
export const manageLS = (action, appState) => {
  if (action === "set") {
    localStorage.setItem("appState", JSON.stringify(appState));
  } else if (action === "get") {
    const lastUserInteractionState = localStorage.getItem("appState");
    return JSON.parse(lastUserInteractionState);
  }
};
