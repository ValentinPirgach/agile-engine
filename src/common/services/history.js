import angular from 'angular';

class History {
  /*@ngInject*/
  constructor() {
    this.items = [];
  }

  push (item) {
    this.items.push({...item, date: new Date()})
  }
};

export default angular
  .module('history', [])
  .service('History', History);
