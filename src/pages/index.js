import Card from "../components/Card.js"
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {buttonEditPopup, buttonAddElement, nameProfile, jobProfile, avatarProfile, validationConfig} from '../utilc/constants.js';
import './index.css';

const userInfo = new UserInfo({nameSelector: nameProfile, dataSelector: jobProfile, avatarSelector:avatarProfile});
const popupWithSubmit = new PopupWithSubmit('.popup_confirm-removal', null);
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    'Content-Type': 'application/json'
  }
});
let myId = '';

const cardsList = new Section((item) => {
  cardsList.addItem(createNewCard(item));
}, '.elements-list');

api.getUserInfo().then(data => {
  userInfo.setUserInfo(data.name, data.about);
  userInfo.setAvatar(data.avatar);
  myId = data._id;
  api.getInitialCards().then(cards =>  {
    cardsList.renderItems(cards)
  }).catch((err) => {
    console.log(err);
   })
})
.catch((err) => {
  console.log(err);
 })

let profileValidation = null;
let newCardValidation = null;
let avatarValidation = null;

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

const updateAvatarFormValidator = (config) => {
  avatarValidation = new FormValidator(config, document.querySelector('.popup_update-avatar').querySelector('.popup__container'));
  avatarValidation.enableValidation();
}

updateAvatarFormValidator(validationConfig);

const popupEditProfile = new PopupWithForm('.popup_edit', function(inputs) {
  popupEditProfile.loaderStart();
  api.setUserInfo(inputs['text-input'], inputs['job-input'])
  .then(data => {
    userInfo.setUserInfo(data.name, data.about);
    popupEditProfile.close()
  })
  .catch((err) => {
    console.log(err);
   })
   .finally(() => {
    popupEditProfile.loaderStop();
  })
});

const popupUpdateAvatar = new PopupWithForm('.popup_update-avatar', function(avatar) {
  popupUpdateAvatar.loaderStart();
  api.setAvatar(avatar['link-inp']).then (data => {
    popupUpdateAvatar.close();
    userInfo.setAvatar(data.avatar);
  })
  .catch((err) => {
    console.log(err);
   })
  .finally(() => {
    popupUpdateAvatar.loaderStop();
  })
})

const popupAddCard = new PopupWithForm('.popup_add-newcard', function (inputs) {
  popupAddCard.loaderStart();
  api.postCard(inputs['place-input'], inputs['link-input']).then(data => {
    cardsList.addItem(createNewCard(data))
    popupAddCard.close();
  })
  .catch((err) => {
    console.log(err);
   })
   .finally(() => {
    popupAddCard.loaderStop();
  });
  newCardValidation.toggleButtonStateReopen();
});

const popupImage = new PopupWithImage('.popup_image');

const createNewCard = (item) => {
  let myCard = true;
  if (item.owner) {
    myCard = item.owner._id === myId;
  }
  let myLike = false;
  if (item.likes.filter((like) => like._id == myId).length > 0) {
    myLike = true;
  }

  const handleCardRemove = function() {
    popupWithSubmit.open();
    popupWithSubmit.setSubmitFunction(() => {
      api.deleteCard(item._id)
      .then(data => {this.remove();
        popupWithSubmit.close();
      })
      .catch((err) => {
        console.log(err)
      })
    });
  };

  const handleCardLike = function() {
    if (this.haveMyLike()) {
      api.UnlikeCard(this.id).then( res => {
        this.unsetLike();
      })
      .catch((err) => {
        console.log(err);
       })
    }  
     else {
      api.likeCard(this.id).then( res => {
        this.setLike(res.likes);
      })
      .catch((err) => {
        console.log(err);
       })
    }
  };
  const card = new Card(item,'.template', popupImage.open.bind(popupImage), handleCardRemove, handleCardLike, myCard, myLike);
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

avatarProfile.addEventListener('click', function() {
  popupUpdateAvatar.open()
});

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupUpdateAvatar.setEventListeners();

