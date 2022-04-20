const buttonEditPopup = document.querySelector('.profile__edit-btn');
const buttonClosePopup = document.querySelector('.popup__close-btn');
const buttonCloseEdit = document.querySelector('.popup__close-btn_edit');
const buttonCloseAdd = document.querySelector('.popup__close-btn_add');
const buttonCloseImage = document.querySelector('.popup__close-btn_image');
const buttonAddElement = document.querySelector('.profile__add-btn');
const popupEdit = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add-newcard');
const popupImage = document.querySelector('.popup_image');
const imageBig = popupImage.querySelector('.popup__image-big')
const imageName = popupImage.querySelector('.popup__image-name')
const popupOpenedClass = ('popup_opened');
const popupText = document.querySelector('.popup__text');
const popupContainer = document.querySelector('.popup__container');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const nameInput = popupContainer.querySelector('.popup__text_value_name');
const jobInput  = popupContainer.querySelector('.popup__text_value_job');
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

function openPopup(popupContainer) {
  popupContainer.classList.add(popupOpenedClass);
}

function closePopup(popupContainer) {
  popupContainer.classList.remove(popupOpenedClass);
}

function submitProfileHandler (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value
  closePopup(popupEdit)
}

function render() {
  const elements = initialCards.map(getElement);
  listElement.append(...elements);
}


function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const elementImage = getElementTemplate.querySelector('.element__image')
  const elementTitle = getElementTemplate.querySelector('.element__title')
  const buttonRemove = getElementTemplate.querySelector('.element__trash')
  const buttonLike = getElementTemplate.querySelector('.element__icon')
  elementImage.src = item.image
  elementImage.alt = item.title
  elementTitle.textContent = item.title
  elementImage.addEventListener('click',  function (event) {
  imageBig.src = event.target.src
  imageBig.alt = event.target.src
  imageName.textContent = event.target.alt
  openPopup(popupImage)
  })
  buttonRemove.addEventListener('click', removeElementHandler)
  buttonLike.addEventListener('click', likeElementHandler)
  return getElementTemplate
}
render();

function removeElementHandler(evt) {
  const element = evt.target.closest('.element');
  element.remove();
}

function likeElementHandler(evt) {
  evt.target.classList.toggle('element__icon_active');
}
  
function addElementHandler(event) {
  event.preventDefault();
  const element = getElement({title: inputValuePlace.value, image: inputValueLink.value});
  closePopup(popupAddCard)
  listElement.prepend(element);
  popupAddCard.querySelector('.popup__container').reset();
};

buttonEditPopup.addEventListener('click', function() {
  openPopup(popupEdit)
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
});
buttonAddElement.addEventListener('click', function() {
  openPopup(popupAddCard)
});
buttonCloseEdit.addEventListener('click', () => {closePopup(popupEdit)});
buttonCloseAdd.addEventListener('click', () => {closePopup(popupAddCard)});
buttonCloseImage.addEventListener('click', () => {closePopup(popupImage)});
popupContainer.addEventListener('submit', submitProfileHandler);
popupAddCard.addEventListener('submit', addElementHandler);

