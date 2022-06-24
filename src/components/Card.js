
export default class Card {
    constructor(title, image, selector,handleCardClick, likes = []) {
        this._title = title;
        this._image = image;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._likes = likes;
    };

    _setEventListeners = () => {
        this._cardLikebutton.addEventListener('click', this._handleLikeElement);
        this._cardRemovebutton.addEventListener('click', this._handleRemoveElement);
        this._elementImage.addEventListener('click', this._handleCardClick);
    };

    _handleLikeElement = () => {
        this._cardLikebutton.classList.toggle('element__icon_active');
    };

    _handleRemoveElement = () => {
        this._itemElement.remove();
        this._itemElement = null;
    };

    _getTemplate() {
        const cardElement = document
          .querySelector(this._selector)
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
        this._likesElement = this._element.querySelector('.element__counter');
        this._likesElement.innerText = this._likes.length;
        this._setEventListeners();
        return this._element;
    };
};