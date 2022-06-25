
export default class UserInfo {
  constructor({nameSelector, dataSelector, avatarSelector}) {
this._nameSelector = nameSelector;
this._dataSelector  = dataSelector;
this._avatarSelector = avatarSelector;
};
 
getUserInfo() {
  return {title: this._nameSelector.innerText, subtitle: this._dataSelector.innerText, avatar: this._avatarSelector.src}
  }

setAvatar(avatar) {
  this._avatarSelector.style.backgroundImage = `url('${avatar}')`;
}

setUserInfo(title, subtitle) {
  this._nameSelector.innerText = title;
  this._dataSelector.innerText = subtitle;
}

}
