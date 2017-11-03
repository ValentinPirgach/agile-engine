import angular from 'angular'
import itemsTableTemplate from './items-table.tpl';

class ItemsTableController {
  /*@ngInject*/
  constructor () {

  }

  add ($item) {
    this.onAdd({$item});
  }

  remove ($item, $option) {
    this.onRemove({$item, $option});
  }
}

export default angular
  .module('app.items-table', [itemsTableTemplate.name])
  .component('itemsTable', {
    templateUrl: itemsTableTemplate.name,
    controller: ItemsTableController,
    controllerAs: 'Table',
    bindings: {
      items: '=',
      totalPrice: '=',
      preview: '=',
      onSubmit: '&',
      onAdd: '&',
      onRemove: '&'
    }
  })
