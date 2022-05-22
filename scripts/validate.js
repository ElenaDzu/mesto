
import Validate from "./FormValidator.js";

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.form));
  formList.forEach((formElement) => {
    const currentValidation = new Validate(config, formElement)
    currentValidation.enableValidation()
  });
};

enableValidation({
  form: '.popup__container',
  formInput: '.popup__text',
  buttonElement: '.popup__save-btn',
  saveBtnInactive:'popup__save-btn_inactive',
  textTypeError: 'popup__text_type_error',
  inputErrorActive: 'popup__input-error_active' 
});


 