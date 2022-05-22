import {popupImage, imageBig,imageName, openPopup} from "./index.js";

export default class Card {
    constructor(title, image, selector) {
        this._title = title;
        this._image = image;
        this._selector = selector;
    }

    /**Определение шаблона */ 
    _getTemplate(selector) {
        const cardElement = document
          .querySelector(selector)
          .content
          .cloneNode(true);
        return cardElement;
    }
    
    /**Слушатель удаления */                                                                                      
    _getButtonRemoveLisener (element) {
        element
        .querySelector('.element__trash')
        .addEventListener('click', function (event){
            const element = event.target.closest('.element');
            element.remove();
        })
    }

    /**Слушатель лайка */ 
    _getButtonLikeLisener (element) {
        element
        .querySelector('.element__icon')
        .addEventListener('click', function (event){
            event.target.classList.toggle('element__icon_active');
        })
    }
    /**Слушатель увеличения картинки */ 
    _getBigView (element){
        element
        .addEventListener('click', function (event){
            imageBig.src = event.target.src
            imageBig.alt = event.target.src
            imageName.textContent = event.target.alt
            openPopup(popupImage)
        })   
    }
    /**Возвращение готовой карточки*/ 
    generateCard() {
        this._element = this._getTemplate(this._selector);
        const elementImage = this._element.querySelector('.element__image')
        elementImage.src = this._image;
        elementImage.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;
        this._getButtonRemoveLisener(this._element);
        this._getButtonLikeLisener(this._element);
        this._getBigView(elementImage)

        return this._element;
      } 
};