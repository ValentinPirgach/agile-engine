'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('app/cart/cart.tpl.html', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('app/cart/cart.tpl.html', '<div class="container"><div class="col-lg-12"><items-table items="Cart.items" on-add="Cart.add($item)" on-remove="Cart.remove($item, $option)" on-submit="Cart.submit()" total-price="Cart.totalPrice"></items-table></div></div>');
}]);