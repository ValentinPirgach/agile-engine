'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('app/history/history.tpl.html', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('app/history/history.tpl.html', '<h2 class="text-center">History is empty</h2><div class="container" ng-repeat="item in History.items | orderBy: \'-date\'"><div class="col-lg-12"><h3>Ordered {{item.dateString}}</h3><items-table items="item.items" total-price="item.totalPrice" preview="true"></items-table></div></div>');
}]);