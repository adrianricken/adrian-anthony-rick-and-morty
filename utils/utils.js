export const manageLS = () => {
  localStorage.setItem("appState", JSON.stringify(appState));
  const lastUserInteractionState = localStorage.getItem("appState");
  console.log(JSON.parse(lastUserInteractionState));
};
