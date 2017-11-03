import angular from 'angular'
import navTemplate from './nav.tpl';
import './nav.css!'

class NavController {
  /*@ngInject*/
  constructor (Cart) {
    this.Cart = Cart;
    this.cartCount = 0;
  }

  $onInit () {
    this.Cart.listen((items) => {
      this.cartCount = items.length;
    })
  }
}

export default angular
  .module('app.nav', [navTemplate.name])
  .component('navMenu', {
    templateUrl: navTemplate.name,
    controller: NavController,
    controllerAs: 'Nav'
  })
