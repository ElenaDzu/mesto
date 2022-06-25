import Popup from "./Popup.js";
export default class PopupWithSubmit extends Popup {
  constructor(selector, handlerSubmitEvent) {
    super(selector);
    this._form = this._popup.querySelector('form')
    this._handlerSubmitEvent = handlerSubmitEvent;
    this.setEventListeners();
  };

  setSubmitFunction(f) {
    this._handlerSubmitEvent = f;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._onSubmit.bind(this));
  };
  _onSubmit(event) {
    event.preventDefault();
    this._handlerSubmitEvent.call(event.target);
    this.close();
  };
  
  close() {
    super.close();
    this._form.reset();
  };
  
  }