export default class FormValidator {
    constructor(config, formElement) {
        this._formInput = config.formInput;
        this._buttonElement = config.buttonElement;
        this._saveBtnInactive = config.saveBtnInactive;
        this._textTypeError = config.textTypeError;
        this._formElement = formElement;
        this._inputList = null;
        this._elementSubmit = null;
    }

    _showInputError (inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._textTypeError);
        errorElement.textContent = errorMessage;
      };

    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._textTypeError);
        errorElement.textContent = '';
      };

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
          console.log(inputElement.validationMessage)
        } else {
          this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
    };

     toggleButtonState () {
        if (this._hasInvalidInput()) {
          this._elementSubmit.classList.add(this._saveBtnInactive);
          this._elementSubmit.setAttribute('disabled', 'disabled');
        } else {
            this._elementSubmit.classList.remove(this._saveBtnInactive);
            this._elementSubmit.removeAttribute('disabled');
        }
    };

    _getInputElements () {
        const that = this
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                that._checkInputValidity(inputElement);
                that.toggleButtonState();
            });
        });
    }

    _setEventListeners () {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formInput));
        this._elementSubmit = this._formElement.querySelector(this._buttonElement);
        this.toggleButtonState();
        this._getInputElements();
    };

     _addSubmitListener () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
          })
     }

    enableValidation () {
        this._addSubmitListener();
        this._setEventListeners();
    };

};