export function createCharacterCard(element) {
  console.log(element.type);

  // copy html block of first card
  // const newCharacterCard = `<li class="card">
  //         <div class="card__image-container">
  //           <img
  //             class="card__image"
  //             src="${element.image}"
  //             alt="${element.name}"
  //           />
  //           <div class="card__image-gradient"></div>
  //         </div>
  //   <div class="card__content">
  //     <h2 class="card__title">${element.name}</h2>
  //     <dl class="card__info">
  //       <dt class="card__info-title">Status</dt>
  //       <dd class="card__info-description">${element.status}</dd>
  //       <dt class="card__info-title">Type</dt>
  //       <dd class="card__info-description">${element.type}</dd>
  //       <dt class="card__info-title">Occurrences</dt>
  //       <dd class="card__info-description">${element.episode.length}</dd>
  //     </dl>
  //   </div>;
  //       </li>`;
  const newCharacterCard = document.createElement("li");
  newCharacterCard.classList.add("card");

  const newCharacterImageContainer = document.createElement("div");
  newCharacterImageContainer.classList.add("card__image-container");

  const newCharacterImage = document.createElement("img");
  newCharacterImage.classList.add("card__image");
  newCharacterImage.src = element.image;

  const newCharacterGradient = document.createElement("div");
  newCharacterGradient.classList.add("card__image-gradient");

  const newCharacterContent = document.createElement("div");
  newCharacterContent.classList.add("card__content");

  const newCharacterTitle = document.createElement("h2");
  newCharacterTitle.classList.add("card__title");
  newCharacterTitle.innerHTML = element.name;

  const newCharacterInfo = document.createElement("dl");
  newCharacterInfo.classList.add("card__info");

  // <dt class="card__info-title">Status</dt>
  const newCharacterInfoStatus = document.createElement("dt");
  newCharacterInfoStatus.classList.add("card__info-title");
  newCharacterInfoStatus.innerHTML = "Status";

  // <dd class="card__info-description">${element.status}</dd>
  const newCharacterInfoStatusDescription = document.createElement("dd");
  newCharacterInfoStatusDescription.classList.add("card__info-description");
  newCharacterInfoStatusDescription.innerHTML = element.status;

  const newCharacterInfoType = document.createElement("dt");
  newCharacterInfoType.classList.add("card__info-title");
  newCharacterInfoType.innerHTML = "Type";

  const newCharacterInfoTypeDescription = document.createElement("dd");
  newCharacterInfoTypeDescription.classList.add("card__info-description");
  newCharacterInfoTypeDescription.innerHTML = element.type;

  const newCharacterInfoOccurences = document.createElement("dt");
  newCharacterInfoOccurences.classList.add("card__info-title");
  newCharacterInfoOccurences.innerHTML = "Occurences";

  const newCharacterInfoOccurencesDescription = document.createElement("dd");
  newCharacterInfoOccurencesDescription.classList.add("card__info-description");
  newCharacterInfoOccurencesDescription.innerHTML = element.episode.length;

  newCharacterImageContainer.append(newCharacterImage);
  newCharacterContent.append(newCharacterTitle);
  newCharacterInfo.append(
    newCharacterInfoStatus,
    newCharacterInfoStatusDescription,
    newCharacterInfoType,
    newCharacterInfoTypeDescription,
    newCharacterInfoOccurences,
    newCharacterInfoOccurencesDescription
  );
  newCharacterContent.append(newCharacterInfo);

  newCharacterCard.append(newCharacterImageContainer, newCharacterContent);

  return newCharacterCard;
}
