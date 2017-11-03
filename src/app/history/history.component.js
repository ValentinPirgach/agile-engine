import MainPageConfig from './history.config';
import historyTemplate from './history.tpl';
import moment from 'moment';
import './history.css!'

class HistoryPageController {
  /*@ngInject*/
  constructor (History) {
    this.History = History;
    this.items = [];
  }

  $onInit () {
    this.items = this.History.items.map(item => {
      item.dateString = moment(item.date).format('MMM.DD.YYYY [at] hh:mm:ss a');
      return item;
    });
  }
}

export default angular
  .module('app.history', [historyTemplate.name])
  .config(MainPageConfig)
  .component('history', {
    templateUrl: historyTemplate.name,
    controller: HistoryPageController,
    controllerAs: 'History'
  });
