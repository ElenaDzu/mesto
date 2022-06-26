
export default class Api {
  baseUrl = '';
  headers = null;
  token = '16d5d399-f287-4ea5-b24b-9feae8ea6a1a';

  constructor(options) {
   this.baseUrl = options.baseUrl;
   this.headers = options.headers;
   this.headers.authorization = this.token;
  }

  _getResult(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    const url = '/cards';
    return fetch(this.baseUrl + url, {headers: this.headers})
    .then(this._getResult);
  }

  getUserInfo() {
    const url = '/users/me';
    return fetch(this.baseUrl + url, {headers: this.headers})
    .then(this._getResult);
  }

  setUserInfo(name, about) {
    const url = '/users/me';
    return fetch(this.baseUrl + url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about
      })})
      .then(this._getResult);
  }

  postCard(name, link)  {
    const url = '/cards';
    return fetch(this.baseUrl + url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        link
      })})
    .then(this._getResult);
  }

  deleteCard(cardId) {
    const url = `/cards/${cardId}`;
    return fetch(this.baseUrl + url, {
      method: 'DELETE',
      headers: this.headers,
      })
    .then(this._getResult);
  }
  
  likeCard(cardId) {
    const url = `/cards/${cardId}/likes`;
    return fetch(this.baseUrl + url, {
      method: 'PUT',
      headers: this.headers,
      })
    .then(this._getResult);
  }

  UnlikeCard(cardId) {
    const url = `/cards/${cardId}/likes`;
    return fetch(this.baseUrl + url, {
      method: 'DELETE',
      headers: this.headers,
      })
    .then(this._getResult);
  }

  setAvatar(avatar) {
    const url = '/users/me/avatar';
    return fetch(this.baseUrl + url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar
      })})
    .then(this._getResult);
  }
} 
