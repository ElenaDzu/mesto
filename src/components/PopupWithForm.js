import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selector, handlerSubmitEvent) {
  super(selector);

  this._form = this._popup.querySelector('.popup__container')
  this._handlerSubmitEvent = handlerSubmitEvent;
};

setEventListeners() {
  super.setEventListeners();
  this._popupCloseButtons.addEventListener('click', this.closePopup);
};

closePopup() {

};

}

/*Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm 
должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита
 формы.
Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё 
и сбрасываться.
Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
класс PopupWithForm:
наследуется от Popup, вызывает его конструктор, в который передает нужный параметр. 
При этом принимает еще и второй параметр - колбэк сабмита формы.
Создаем два экземпляра этого класса, в каждый передаем свой коллебек
 (помимо селектора попапа). В одном случае форма редактирует данные пользователя на странице, 
 во втором - добавляет новую карточку. В качестве идеи - попробуйте совместить функцию 
 коллбека при сабмите формы добавления карточки с аргументом renderer у класса Section*/