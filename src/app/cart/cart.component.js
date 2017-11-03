import MainPageConfig from './cart.config';
import cartTemplate from './cart.tpl';
import swal from 'sweetalert';
import './cart.css!'

class CartPageController {
  /*@ngInject*/
  constructor (Cart, History, $state) {
    this.Cart = Cart;
    this.History = History;
    this.$state = $state;
    this.items = [];
    this.totalPrice = 0;
  }

  $onInit () {
    this.items = this.Cart.items;
    this.calcTotal(this.items);

    this.Cart.listen(items => {
      this.calcTotal(items);
    })
  }

  calcTotal (items) {
    this.totalPrice = items.reduce((res, item) => res += item.totalPrice, 0);
  }

  remove (item, option) {
    if(option) {
      item[option] = true
    }

    this.Cart.remove(item)
  }

  add (item) {
    this.Cart.add(item)
  }

  submit () {
    this.History.push({items: this.Cart.items, totalPrice: this.totalPrice});
    this.Cart.clear();
    this.$state.go('history');
  }
}

export default angular
  .module('app.cart', [cartTemplate.name])
  .config(MainPageConfig)
  .component('cart', {
    templateUrl: cartTemplate.name,
    controller: CartPageController,
    controllerAs: 'Cart'
  });
