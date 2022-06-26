
import FormValidator from "../components/FormValidator.js";
export let profileValidation = null;
export let newCardValidation = null;
export let avatarValidation = null;

export const enableValidation = (config) => {
  profileValidation = new FormValidator(config, document.querySelector('.popup_edit').querySelector('.popup__container'));
  newCardValidation = new FormValidator(config, document.querySelector('.popup_add-newcard').querySelector('.popup__container'));
  avatarValidation = new FormValidator(config, document.querySelector('.popup_update-avatar').querySelector('.popup__container'));
  profileValidation.enableValidation();
  newCardValidation.enableValidation();  
  avatarValidation.enableValidation();

};

enableValidation({
  formInput: '.popup__text',
  buttonElement: '.popup__save-btn',
  saveBtnInactive:'popup__save-btn_inactive',
  textTypeError: 'popup__text_type_error',
  inputErrorActive: 'popup__input-error_active' 
});