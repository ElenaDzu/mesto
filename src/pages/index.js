import Card from "../components/Card.js"
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import './index.css';

const buttonEditPopup = document.querySelector('.profile__edit-btn');
const buttonAddElement = document.querySelector('.profile__add-btn');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const avatarProfile = document.querySelector('.profile__avatar');

const userInfo = new UserInfo({nameSelector: nameProfile, dataSelector: jobProfile, avatarSelector:avatarProfile});
const popupWithSubmit = new PopupWithSubmit('.popup_confirm-removal', null);
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    'Content-Type': 'application/json'
  }
});
let myId = '';

let cardsList = new Section({items: [], renderer: (item) => {
  cardsList.addItem(createNewCard(item));
}});

api.getUserInfo().then(data => {
  userInfo.setUserInfo(data.name, data.about);
  userInfo.setAvatar(data.avatar);
  document.querySelector('.profile__id').innerText = data._id;
  myId = data._id;
  api.getInitialCards().then(cards =>  {
    cardsList = new Section({
      items: cards, renderer: (item) => {
        cardsList.addItem(createNewCard(item));
    }
    }, '.elements-list');
    cardsList.renderItems()
    .catch((err) => {
      console.log(err);
     })
  });
});


const validationConfig = {
  formInput: '.popup__text',
  buttonElement: '.popup__save-btn',
  saveBtnInactive:'popup__save-btn_inactive',
  textTypeError: 'popup__text_type_error',
  inputErrorActive: 'popup__input-error_active' 
};

let profileValidation = null;
let newCardValidation = null;

const editProfileFormValidator = (config) => {
  profileValidation = new FormValidator(config, document.querySelector('.popup_edit').querySelector('.popup__container'));
  profileValidation.enableValidation();
}

editProfileFormValidator(validationConfig);

const addCardFormValidator = (config) => {
  newCardValidation = new FormValidator(config, document.querySelector('.popup_add-newcard').querySelector('.popup__container'));
  newCardValidation.enableValidation();
}

addCardFormValidator(validationConfig);

const popupEditProfile = new PopupWithForm('.popup_edit', function(inputs) {
  //переделать на отсылку в api
  userInfo.setUserInfo(inputs['text-input'], inputs['job-input']);
  api.setUserInfo(inputs['text-input'], inputs['job-input']);
  popupEditProfile.close()
  .catch((err) => {
    console.log(err);
   })
});

//const popupUpdateProfile = new PopupWithForm('.popup_update-profile', function())

const popupAddCard = new PopupWithForm('.popup_add-newcard', function (inputs) {
  // cardsList.addItem(createNewCard({name: inputs['place-input'], link: inputs['link-input']}))
  let card = api.postCard(inputs['place-input'], inputs['link-input']).then(data => {
    console.log(data);
    cardsList.addItem(createNewCard(data))
    .catch((err) => {
     console.log(err);
    })
  });
  popupAddCard.close();
  newCardValidation.toggleButtonStateReopen();
});

const popupImage = new PopupWithImage('.popup_image');

const createNewCard = (item) => {
  let myCard = true;
  if (item.owner) {
    myCard = item.owner._id === myId;
  }

  let handleCardRemove = function() {
    popupWithSubmit.open();
    popupWithSubmit.setSubmitFunction(() => {
      api.deleteCard(item._id)
      .then(data => {this.remove();
      })
      .catch((err) => {
        console.log(err)
      })
    });
  };

  let handleCardLike = function() {};
  const card = new Card(item,'.template', popupImage.open.bind(popupImage), handleCardRemove, handleCardLike, myCard);
  const newCard = card.generateCard();
  return newCard;
}

buttonEditPopup.addEventListener('click', function() {
  const {title, subtitle} = userInfo.getUserInfo();
  popupEditProfile.setDefaultValues({'text-input': title, 'job-input': subtitle})
  popupEditProfile.open()
});

buttonAddElement.addEventListener('click', function() {
  popupAddCard.open()
});

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();

