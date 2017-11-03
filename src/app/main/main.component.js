import MainPageConfig from './main.config';
import mainTemplate from './main.tpl';
import data from './data';
import { sortBy, capitalize } from 'lodash';
import swal from 'sweetalert';
import './main.css!'

class MainPageController {
  /*@ngInject*/
  constructor ($filter, Cart) {
    this.items = data;
    this.sortByProp = 'price';
    this.sortReverse = true;
    this.search = { model: '' };
    this.$filter = $filter;
    this.Cart = Cart;
  }

  sortColumn (col) {
    this.reverse = this.sortByProp === col ? !this.reverse : false;
    this.sortByProp = col;
  }

  addToCard (item) {
    const message = `${capitalize(item.name)} has been added to cart with price ${this.$filter('currency')(item.price)}`;
    swal("Good job!", message, "success");
    this.Cart.add(item);
  }
}

export default angular
  .module('app.main', [mainTemplate.name])
  .config(MainPageConfig)
  .component('main', {
    templateUrl: mainTemplate.name,
    controller: MainPageController,
    controllerAs: 'Main'
  });
