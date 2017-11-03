'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('common/components/nav/nav.tpl.html', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('common/components/nav/nav.tpl.html', '<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#">AgileEngine test</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li ui-sref-active="active"><a ui-sref="main" href="#"><i class="glyphicon glyphicon-th-list"></i>Main</a></li><li ui-sref-active="active"><a ui-sref="cart" href="#"><i class="glyphicon glyphicon-shopping-cart"></i>Cart <span class="badge" ng-if="Nav.cartCount > 0">{{Nav.cartCount}}</span></a></li><li ui-sref-active="active"><a ui-sref="history" href="#"><i class="glyphicon glyphicon-time"></i>History</a></li></ul></div></div></nav>');
}]);