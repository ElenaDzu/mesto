const buttonEditPopup = document.querySelector('.profile__edit-btn');
const buttonClosePopup = document.querySelector('.popup__close-btn');
const buttonSaveSbm = document.querySelector('.popup__save-btn')
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const formElement = document.querySelector('.popup__container')
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup__text_value_name');
let jobInput  = formElement.querySelector('.popup__text_value_job');

function popupOpen(event) {
  popup.classList.add(popupOpenedClass);
}

function popupClose(event) {
  popup.classList.remove(popupOpenedClass);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value
  popupClose();
}

buttonEditPopup.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
