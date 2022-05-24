import {popupImage, imageBig, imageName, openPopup} from "./index.js";

export default class Card {
    constructor(title, image, selector) {
        this._title = title;
        this._image = image;
        this._selector = selector;
    };

    _setEventListeners = () => {
        this._cardLikebutton.addEventListener('click', this._handleLikeElement);
        this._cardRemovebutton.addEventListener('click', this._handleRemoveElement);
        this._elementImage.addEventListener('click', this._handleVeiwImage);
    };

    _handleLikeElement = () => {
        this._cardLikebutton.classList.toggle('element__icon_active');
    };

    _handleRemoveElement = () => {
        this._itemElement.remove();
        this._itemElement = null;
    };

    _handleVeiwImage(event) {
        imageBig.src = event.target.src;
        imageBig.alt = event.target.src;
        imageName.textContent = event.target.alt;
        openPopup(popupImage);
    };

    _getTemplate(selector) {
        const cardElement = document
          .querySelector(selector)
          .content
          .cloneNode(true);
        return cardElement;
    };
                                                                                    
    generateCard() {
        this._element = this._getTemplate(this._selector);
        this._itemElement = this._element.querySelector('.element');
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._image;
        this._elementImage.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;
        this._cardRemovebutton = this._element.querySelector('.element__trash');
        this._cardLikebutton = this._element.querySelector('.element__icon');
        this._setEventListeners();
        return this._element;
    };
};