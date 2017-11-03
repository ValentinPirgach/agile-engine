import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import * as components from 'common/core';
import routing from 'common/utils/routing';
import 'github:twbs/bootstrap@3.3.7/css/bootstrap.min.css!'
import './styles.css!'
// import 'github:twbs/bootstrap@3.3.7/css/bootstrap-theme.min.css!'

let app = angular.module('demo',
  [
    'ui.router',
    'oc.lazyLoad',
    components.NavModule.name,
    components.CartModule.name,
    components.HistoryModule.name,
    components.ItemsTableModule.name,
  ]
);

app.config(routing(app));

app.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider', '$ocLazyLoadProvider', '$stateProvider', function ($urlRouterProvider, $locationProvider, $compileProvider, $logProvider, $httpProvider, $ocLazyLoadProvider, $stateProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/main');

  if(window.prod){
    $logProvider.debugEnabled(false);
    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $compileProvider.debugInfoEnabled(false);
  }

  $ocLazyLoadProvider.config({
    debug: true
  });
}]);

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ], {
    strictDi: true
  });
});

export default app;
