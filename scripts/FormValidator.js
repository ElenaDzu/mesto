export default class Validate {
    constructor(config, formElement) {
        this._formInput = config.formInput;
        this._buttonElement = config.buttonElement;
        this._saveBtnInactive = config.saveBtnInactive;
        this._textTypeError = config.textTypeError;
        this._formElement = formElement;
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

    _hasInvalidInput (inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
    };

    _toggleButtonState (inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._saveBtnInactive);
          buttonElement.setAttribute('disabled', 'disabled');
        } else {
          buttonElement.classList.remove(this._saveBtnInactive);
          buttonElement.removeAttribute('disabled');
        }
    };

    _getInputElements (inputList,submitElement) {
        const that = this
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                that._checkInputValidity(inputElement);
                that._toggleButtonState(inputList, submitElement);
            });
        });
    }

    _setEventListeners () {
        const inputList = Array.from(this._formElement.querySelectorAll(this._formInput));
        const submitElement = this._formElement.querySelector(this._buttonElement);
        this._toggleButtonState(inputList, submitElement);
        this._getInputElements(inputList,submitElement)
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