System.registerDynamic("common/components/nav/nav.component.js",["angular","./nav.tpl","./nav.css!"],!0,function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(b,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=a("angular"),h=d(g),i=a("./nav.tpl"),j=d(i);a("./nav.css!");var k=function(){function a(b){e(this,a),this.Cart=b,this.cartCount=0}return a.$inject=["Cart"],f(a,[{key:"$onInit",value:function(){var a=this;this.Cart.listen(function(b){a.cartCount=b.length})}}]),a}();return b.default=h.default.module("app.nav",[j.default.name]).component("navMenu",{templateUrl:j.default.name,controller:k,controllerAs:"Nav"}),c.exports});