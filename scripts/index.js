import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const buttonEditPopup = document.querySelector('.profile__edit-btn');
const buttonAddElement = document.querySelector('.profile__add-btn');
const popupCloseButtons = document.querySelectorAll('.popup__close-btn');
const popupCloseOverlays = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add-newcard');
const popupImage = document.querySelector('.popup_image');
const imageBig = popupImage.querySelector('.popup__image-big');
const imageName = popupImage.querySelector('.popup__image-name');
const popupOpenedClass = ('popup_opened');
const popupText = document.querySelector('.popup__text');
const profileForm = popupEdit.querySelector('.popup__container');
const сardAddForm = popupAddCard.querySelector('.popup__container');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const nameInput = profileForm.querySelector('.popup__text_value_name');
const jobInput  = profileForm.querySelector('.popup__text_value_job');
const listElement = document.querySelector('.elements-list');
const template = document.querySelector('.template');
const inputValuePlace = document.querySelector('.popup__text_value_place');
const inputValueLink = document.querySelector('.popup__text_value_link');
const initialCards = [
  {
    title: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

import {newCardValidation} from "./validate.js";

export function openPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener('keydown', handleEscUp);
}

function closePopup(popup) {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener('keydown', handleEscUp);
}

function handleProfileFormSubmit (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value
  closePopup(popupEdit)
}

function setNewCard(title,image) {
  const card = new Card(title, image, '.template')
  listElement.prepend(card.generateCard())
};

function render() {
  initialCards.forEach((item) => {
    setNewCard(item.title, item.image)
  }); 
}
render()

export function handleRemoveElement(evt) { 
  const element = evt.target.closest('.element'); 
  element.remove(); 
} 

export function handleLikeElement(evt) { 
  evt.target.classList.toggle('element__icon_active'); 
} 

export function handleVeiwImage(event) {
    imageBig.src = event.target.src 
    imageBig.alt = event.target.src 
    imageName.textContent = event.target.alt 
    openPopup(popupImage) 
  }


function handleAddElement(event) {
  event.preventDefault();
  setNewCard(inputValuePlace.value, inputValueLink.value); 
  closePopup(popupAddCard);
  newCardValidation.endToggleButtonState()
  сardAddForm.reset();
};

buttonEditPopup.addEventListener('click', function() {
  openPopup(popupEdit)
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
});

buttonAddElement.addEventListener('click', function() {
  openPopup(popupAddCard)
});

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupCloseOverlays.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  })
});

const handleEscUp = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

profileForm.addEventListener('submit', handleProfileFormSubmit);
сardAddForm.addEventListener('submit', handleAddElement);