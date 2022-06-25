import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(selector, handlerSubmitEvent) {
  super(selector);
  this._form = this._popup.querySelector('form')
  this._handlerSubmitEvent = handlerSubmitEvent;
  this._submitButton = this._form.querySelector('.popup__save-btn');
};

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', this._onSubmit.bind(this));
};
_onSubmit(event) {
  event.preventDefault();
  this._handlerSubmitEvent.call(event.target, this._getInputValues());
};

close() {
  super.close();
  this._form.reset();
};

_getInputValues() {
 const inputs = this._form.querySelectorAll('.popup__text');
 let inputValues = {};
 inputs.forEach((input) => {
  inputValues[input.id] = input.value;
  input.value = "";
 }
 )
 return inputValues;
}

setDefaultValues(values = {}) {
  const inputs = this._getInputValues();
  for (let input_id in values) {
    if (Object.keys(inputs).includes(input_id)) {
      const input = this._form.querySelector('#' + input_id);
      input.value = values[input_id]
    }
    
  }
}

loaderStart() {
  this._submitButton.innerText = 'Сохранение...';
}

loaderStop() {
  this._submitButton.innerText = 'Сохранить';
}

}
