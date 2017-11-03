'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('app/main/main.tpl.html', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('app/main/main.tpl.html', '<div class="col-lg-3 margin-bottom"><input type="text" class="form-control" ng-model="Main.search.model" placeholder="Search by name"></div><div class="col-lg-12"><table class="table table-striped table-bordered"><tr><th>#</th><th>Name</th><th>Ingredients</th><th ng-click="Main.sortColumn(\'price\')">Price <i class="glyphicon glyphicon-triangle-top table__sort" ng-class="{\'reverse\': Main.reverse && Main.sortByProp === \'price\'}"></i></th><th>Action</th></tr><tr ng-repeat="item in Main.items | filter: {name: Main.search.model} | orderBy:Main.sortByProp:Main.reverse"><td>{{$index + 1}}</td><td>{{item.name}}</td><td>{{item.ingredients.join(\', \')}}</td><td>{{item.price | currency : \'$\'}}</td><td><button class="btn btn-primary" ng-click="Main.addToCard(item)">Add to cart</button></td></tr></table></div>');
}]);