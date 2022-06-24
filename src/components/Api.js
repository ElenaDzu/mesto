
export default class Api {
  baseUrl = '';
  headers = null;
  constructor(options) {
   this.baseUrl = options.baseUrl;
   this.headers = options.headers;
  }

  getInitialCards() {
    let url = '/cards';
    return fetch(this.baseUrl + url, {headers: this.headers})
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
    }

  getUserInfo() {
    let url = '/users/me';
    return fetch(this.baseUrl + url, {headers: this.headers})
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

   setUserInfo(name, about) {
    let url = '/users/me';
    return fetch(this.baseUrl + url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about
      })})
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  
  }

  postCard(name, link)  {
    let url = '/cards';
    return fetch(this.baseUrl + url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        link
      })})
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  
  }
  deleteCard() {

  }
  likeCard() {

  }

  getLike() {

  }

  async setAvatar() {
    let url = '/users/me/avatar';
    let result = await fetch(this.baseUrl + url,
       {method: 'PATCH', body: (this.avatar)}, {headers: this.headers})
    let json = await result.json();
    return json;
  }

} 
