const buttonEditPopup = document.querySelector('.profile__edit-btn');
const buttonClosePopup = document.querySelector('.popup__close-btn');
const buttonCloseEdit = document.querySelector('.popup__close-btn_edit');
const buttonCloseAdd = document.querySelector('.popup__close-btn_add');
<<<<<<< HEAD
const buttonCloseImage = document.querySelector('.popup__close-btn_image');
=======
const buttonCloseImage = document.querySelector('.popup__close-btn-image');
>>>>>>> Develope
const buttonAddElement = document.querySelector('.profile__add-btn');
const buttonSaveSbm = document.querySelector('.popup__save-btn');
const buttonCreateElement = document.querySelector('.popup__create-btn');
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add-newcard');
const popupImage = document.querySelector('.popup_image');
const popupOpenedClass = ('popup_opened');
const popupText = document.querySelector('.popup__text');
const formElement = document.querySelector('.popup__container');
<<<<<<< HEAD
const nameProfile = formElement.querySelector('.profile__title');
=======
const nameProfile = document.querySelector('.profile__title');
>>>>>>> Develope
const jobProfile = document.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup__text_value_name');
let jobInput  = formElement.querySelector('.popup__text_value_job');
const listElement = document.querySelector('.elements-list');
const template = document.querySelector('.template');
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

function popupOpen(popup) {
  popup.classList.add(popupOpenedClass);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function popupClose(popup) {
  popup.classList.remove(popupOpenedClass);
}

function formSubmitHandler (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value
  popupClose(popupEdit)
}

function render() {
<<<<<<< HEAD
  const html = initialCards.map(getElement);
  listElement.append(...html);
=======
  const elements = initialCards.map(getElement);
  listElement.append(...elements);
>>>>>>> Develope
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
<<<<<<< HEAD
  const buttonRemove = getElementTemplate.querySelector('.element__trash');
  const buttonLike = getElementTemplate.querySelector('.element__icon');
  const imageElement = getElementTemplate.querySelector('.element__image')
  const titleElement = getElementTemplate.querySelector('.element__title')
  imageElement.src = item.image;
  titleElement.textContent = item.title;
  buttonRemove.addEventListener('click', handleRemoveElement);
  buttonLike.addEventListener('click', handleLikeElement)
  imageElement.addEventListener('click', () => {popupOpen(popupImage)});
  return getElementTemplate;
=======
  const elementImage = getElementTemplate.querySelector('.element__image')
  const elementTitle = getElementTemplate.querySelector('.element__title')
  const buttonRemove = getElementTemplate.querySelector('.element__trash')
  const buttonLike = getElementTemplate.querySelector('.element__icon')
  elementImage.src = item.image
  elementImage.alt = item.title
  elementTitle.textContent = item.title
  elementImage.addEventListener('click',  function (event) {
    popupImage.querySelector('.popup__image-big').src = event.target.src
    popupImage.querySelector('.popup__image-name').textContent = event.target.alt
    popupOpen(popupImage)
  })
  buttonRemove.addEventListener('click', handleRemoveElement)
  buttonLike.addEventListener('click', handleLikeElement)
  return getElementTemplate
>>>>>>> Develope
}
render();

function handleRemoveElement(evt) {
  const element = evt.target.closest('.element');
  element.remove();
}

function handleLikeElement(evt) {
  evt.target.classList.toggle('element__icon_active');
}
<<<<<<< HEAD

=======
  
>>>>>>> Develope
function handleAddElement(event) {
  event.preventDefault();
  const inputValuePlace = document.querySelector('.popup__text_value_place').value;
  const inputValueLink = document.querySelector('.popup__text_value_link').value;
  const element = getElement({title: inputValuePlace, image: inputValueLink});
  popupClose(popupAddCard)
  listElement.prepend(element);
};



<<<<<<< HEAD
buttonEditPopup.addEventListener('click', () => {popupOpen(popupEdit)});
buttonAddElement.addEventListener('click', () => {popupOpen(popupAddCard)});
=======
buttonEditPopup.addEventListener('click', function() {
  popupOpen(popupEdit)
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
});
buttonAddElement.addEventListener('click', function() {
  popupAddCard.querySelector('.popup__text_value_place').value = 'Название'
  popupAddCard.querySelector('.popup__text_value_link').value = 'Ссылка на картинку'
  popupOpen(popupAddCard)
});
>>>>>>> Develope
buttonCloseEdit.addEventListener('click', () => {popupClose(popupEdit)});
buttonCloseAdd.addEventListener('click', () => {popupClose(popupAddCard)});
buttonCloseImage.addEventListener('click', () => {popupClose(popupImage)});
formElement.addEventListener('submit', formSubmitHandler);
popupAddCard.addEventListener('submit', handleAddElement);

