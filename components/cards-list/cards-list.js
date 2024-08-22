import { createCharacterCard } from "../card/card.js";

export const renderCards = (data, cardContainer) => {
  cardContainer.innerHTML = "";
  data?.results?.forEach((element) => {
    const newCharacterCard = createCharacterCard(element);

    cardContainer.append(newCharacterCard);
  });
  return cardContainer;
};
