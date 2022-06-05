
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtons = this._popup.querySelector('.popup__close-btn');
    this._popupCloseOverlays = this._popup;
};
 
openPopup() {
  this._popup.classList.add('popup_opened');
  document.addEventListener('keydown', this._handleEscClose);
  this.setEventListeners();
}

closePopup = () => {
  this._popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', this._handleEscClose);
}

_handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    this.closePopup('popup_opened');
  };
};

setEventListeners() {
  console.log(this._popupCloseOverlays);
  this._popupCloseButtons.addEventListener('click', this.closePopup);
  this._popupCloseOverlays.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.closePopup(this._popup); 
    }
  });
};

}

/*Принимает в конструктор единственный параметр — селектор попапа.
Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
 Модальное окно также закрывается при клике на затемнённую область вокруг формы.
 класс Popup:
Аргумент: popupSelector
popupSelector - селектор конкретного попапа
должно быть 4 метода, описанных в ТЗ, исходя из принципа, 
что более общий класс должен описывать поведение всех попапов. 
А конкретизация каких-то методов должна происходить уже на уровне дочерних классов
 - PopupWithImage и PopupWithForm*/