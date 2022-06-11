
export default class UserInfo {
  constructor({nameSelector, dataSelector}) {
this._nameSelector = nameSelector;
this._dataSelector  = dataSelector;
};
 
getUserInfo() {
  return {title: this._nameSelector.innerText , subtitle: this._dataSelector.innerText}
  }

setUserInfo(title, subtitle) {
  this._nameSelector.innerText = title;
  this._dataSelector.innerText = subtitle;
}

}
