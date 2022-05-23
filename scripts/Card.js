import {handleRemoveElement, handleLikeElement, handleVeiwImage} from "./index.js";

export default class Card {
    constructor(title, image, selector) {
        this._title = title;
        this._image = image;
        this._selector = selector;
    }

    _setEventListeners() {
        this._cardLikebutton.addEventListener('click', handleLikeElement);
        this._cardRemovebutton.addEventListener('click', handleRemoveElement);
        this._elementImage.addEventListener('click', handleVeiwImage);
    }

    _getTemplate(selector) {
        const cardElement = document
          .querySelector(selector)
          .content
          .cloneNode(true);
        return cardElement;
    }
                                                                                    
    generateCard() {
        this._element = this._getTemplate(this._selector);
        this._elementImage = this._element.querySelector('.element__image')
        this._elementImage.src = this._image;
        this._elementImage.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;
        this._cardRemovebutton = this._element.querySelector('.element__trash');
        this._cardLikebutton = this._element.querySelector('.element__icon');
        this._setEventListeners();
        return this._element;
      } 
};