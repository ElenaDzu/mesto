import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageBig = this._popup.querySelector('.popup__image-big');
    this._imageName = this._popup.querySelector('.popup__image-name');
  };

  open(event) {
    this._imageBig.src = event.target.src;
    this._imageBig.alt = event.target.alt;
    this._imageName.textContent = event.target.alt;
    super.open();
    }
}
