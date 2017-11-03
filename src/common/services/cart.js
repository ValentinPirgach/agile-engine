import angular from 'angular';
import find from 'lodash/find';

class Cart {
  /*@ngInject*/
  constructor(){
    this.items = [];
    this.callbacks = [];
  }

  add (item) {
    if(!this.items.some(i => i.name === item.name)) {
      this.items.push(item);
    }

    this.calcPrice(item);
    this.fireCallbacks(this.items);
  }

  remove (item) {
    const arrayItem = find(this.items, i => i.name === item.name);
    this.calcPrice(arrayItem , -1);

    if(arrayItem._remove) {
      const index = this.items.indexOf(arrayItem);
      this.items.splice(index, 1);
    }

    this.fireCallbacks(this.items);
  }

  calcPrice (item, dir = 1) {
    item.count = item.count != null ? item.count + dir : 1;
    item.totalPrice = item.price * item.count;
  }

  clear () {
    this.items = [];
    this.fireCallbacks(this.items);
  }

  listen (callback) {
    this.callbacks.push({
      func: callback
    })
  }

  fireCallbacks (data) {
    this.callbacks.forEach(callback => callback.func(data))
  }
};

export default angular
  .module('cart', [])
  .service('Cart', Cart);
