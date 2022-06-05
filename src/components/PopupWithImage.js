import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageBig = document.querySelector('.popup__image-big');
    this._imageName = document.querySelector('.popup__image-name');
  };

  openPopup(event) {
    console.log(this);
    this._imageBig.src = event.target.src;
    this._imageBig.alt = event.target.src;
    this._imageName.textContent = event.target.alt;
    super.openPopup();
    }
}

/*Создайте класс PopupWithImage, который наследует от Popup.
 1) Этот класс должен перезаписывать родительский метод open. 
 В методе open класса PopupWithImage нужно вставлять в попап картинку с
  src изображения и подписью к картинке.
2) класс PopupWithImage:
наследуется от Popup, вызывает его конструктор, в который передает нужный параметр 
- смотреть в сторону super.
используя логику полиморфизма надо перезаписать метод open, сначала сделать в нем то 
что описано в ТЗ, а потом вызвать метод родительского класса чтобы открыть попап

3) handleCardClick - функция, которая описывает поведение при нажатии на карточку. 
Внутри должен быть вызов публичного метода экземпляра класса PopupWithImage 
(о котором написано ниже)
так как логика открытия попапа описывается теперь в аргументе handleCardClick,
 то все костыли которые раньше были связаны с этим (импортирование внешних функций 
  в класс Card) можно убрать*/