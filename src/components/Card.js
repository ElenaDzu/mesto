export default class Card {
    constructor(card, selector, handleCardClick, handleCardRemove, handleCardLike, myCard, myLike = false) {
        this._title = card.name;
        this._image = card.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._handleCardLike = handleCardLike;
        this._ownerId = card.owner._id;
        this._myCard = myCard;
        this.id = card._id;
        this._likes = card.likes;
        this._mylike = myLike;
    };

    _setEventListeners = () => {
        this._cardLikebutton.addEventListener('click', this._handleLikeElement);
        this._cardLikebutton.addEventListener('click', this._handleCardLike.bind(this));
        this._cardRemovebutton.addEventListener('click', this._handleRemoveElement);
        this._elementImage.addEventListener('click', this._handleCardClick);
    };

    _handleLikeElement = () => {
        this._cardLikebutton.classList.toggle('element__icon_active');
    };

    _handleRemoveElement = () => {
        this._handleCardRemove();
    };

    haveMyLike() {
        return this._mylike;
    }

    setLike(likes) {
        this._cardLikebutton.classList.add('element__icon_active');
        this._likes = likes;
        this._likesElement.innerText = this._likes.length;
        this._mylike = true;
    }

    unsetLike() {
        this._cardLikebutton.classList.remove('element__icon_active');
        this._likesElement.innerText = parseInt(this._likesElement.innerText) - 1;
        this._mylike = false;
    }

    remove() {
        this._itemElement.remove();
    }

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
        if (this._mylike) {
            this._cardLikebutton.classList.add('element__icon_active');
        };
        this._likesElement.innerText = this._likes.length;
        this._setEventListeners();
        if  (this._myCard) { 
            this._cardRemovebutton.classList.add('element__trash_visible');
        }
        return this._element;
    };
};