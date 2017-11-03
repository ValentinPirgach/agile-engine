/* @ngInject */
export default function ConfigureModule($stateProvider) {
  $stateProvider.state('cart', {
    url: '/cart',
    template: '<cart></cart>',
  });
}
