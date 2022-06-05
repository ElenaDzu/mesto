import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageBig = document.querySelector('.popup__image-big');
    this._imageName = document.querySelector('.popup__image-name');
  };

  openPopup(event) {
    this._imageBig.src = event.target.src;
    this._imageBig.alt = event.target.src;
    this._imageName.textContent = event.target.alt;
    super.openPopup();
    }
}
