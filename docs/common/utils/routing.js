System.registerDynamic("common/utils/routing.js",["ui-router-extras","app/routes.json!"],!0,function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0}),a("ui-router-extras");var e=a("app/routes.json!"),f=d(e),g=function(a){return a.requires.push("ct.ui.router.extras.future"),["$stateProvider","$futureStateProvider",function(a,b){b.stateFactory("load",["$q","$ocLazyLoad","futureState",function(a,b,c){var d=a.defer();return console.log(c),System.import(c.src).then(function(a){var c=a;if(!a.name){var e=Object.keys(a);c=a[e[1]]}b.load(c).then(function(){d.resolve()},function(){console.log("error loading: "+a.name)})}),d.promise}]),f.default.forEach(function(a){b.futureState(a)})}]};return b.default=g,c.exports});