import Card from "../components/Card.js"
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import {newCardValidation} from "../pages/validate.js"
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';

const buttonEditPopup = document.querySelector('.profile__edit-btn');
const buttonAddElement = document.querySelector('.profile__add-btn');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const userInfo = new UserInfo({nameSelector: nameProfile, dataSelector: jobProfile});
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

const popupEdit = new PopupWithForm('.popup_edit', function(event) {
  event.preventDefault();
  let nameInput = this.querySelector('#text-input');
  let jobInput = this.querySelector('#job-input');
  userInfo.setUserInfo(nameInput.value, jobInput.value);
  popupEdit.closePopup();

});
const popupAddCard = new PopupWithForm('.popup_add-newcard', function (event) {
  event.preventDefault();
  let title = this.querySelector('#place-input');
  let link = this.querySelector('#link-input');
  cardsList.addItem(createNewCard({title: title.value, image: link.value}))
  title.value = "";
  link.value = "";
  popupAddCard.closePopup();
  newCardValidation.toggleButtonStateReopen();
});
const popupImage = new PopupWithImage('.popup_image');

const createNewCard = (item) => {
  const card = new Card(item.title, item.image,'.template',
  popupImage.openPopup.bind(popupImage)
  );
  const newCard = card.generateCard();
  return newCard;
}
 
const cardsList = new Section({
  items: initialCards,renderer: (item) => {
    cardsList.addItem(createNewCard(item));
}
}, '.elements-list');
cardsList.renderItems();

buttonEditPopup.addEventListener('click', function() {
  let {title, subtitle} = userInfo.getUserInfo();
  popupEdit.setDefaultValues({'text-input': title, 'job-input': subtitle})
  popupEdit.openPopup(popupEdit)
});

buttonAddElement.addEventListener('click', function() {
  popupAddCard.openPopup(popupAddCard)
});
