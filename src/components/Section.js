
export default class Section {
    constructor({items, renderer}, selector) {
        this._items = items;
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    };

       addItem = (element) => {
        this._selector.append(element);
    };

    // берем массив данных this._items и методом forEach (обрабатываем) применяем функцию renderer
    // к каждому элементу item этого массива items
    renderItems() {
      this._items.forEach(item => {
        this._renderer(item); 
      });
    }
};
