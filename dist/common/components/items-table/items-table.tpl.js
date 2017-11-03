'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('common/components/items-table/items-table.tpl.html', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('common/components/items-table/items-table.tpl.html', '<table class="table table-striped table-bordered"><tr><th>#</th><th>Name</th><th>Ingredients</th><th>Count</th><th>Price</th><th ng-if="!Table.preview">Action</th></tr><tr><td colspan="6" class="text-center" ng-if="!Table.items.length">Your cart is empty. Please, go to the <a href="#" ui-sref="main">Main page</a> and choose products.</td></tr><tr ng-repeat="item in Table.items"><td>{{$index + 1}}</td><td>{{item.name}}</td><td>{{item.ingredients.join(\', \')}}</td><td class="text-center"><button class="btn btn-default" ng-if="!Table.preview" ng-disabled="item.count < 2" ng-click="Table.remove(item)">-</button> {{item.count || 1}} <button class="btn btn-default" ng-if="!Table.preview" ng-click="Table.add(item)">+</button></td><td>{{item.totalPrice | currency : \'$\'}}</td><td ng-if="!Table.preview"><button class="btn btn-danger" ng-click="Table.remove(item, \'_remove\')">Remove from cart</button></td></tr><tr><td colspan="4"></td><td><b>Total: {{Table.totalPrice | currency}}</b></td><td ng-if="!Table.preview"></td></tr><tr ng-if="!Table.preview"><td colspan="6" class="text-center"><button class="btn btn-primary" ng-click="Table.onSubmit()" ng-disabled="!Table.items.length">Submit</button></td></tr></table>');
}]);