/* @ngInject */
export default function ConfigureModule($stateProvider) {
  $stateProvider.state('main', {
    url: '/main',
    template: '<main></main>',
  });
}
