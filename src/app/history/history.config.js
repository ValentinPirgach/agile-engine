/* @ngInject */
export default function ConfigureModule($stateProvider) {
  $stateProvider.state('history', {
    url: '/history',
    template: '<history></history>',
  });
}
