class Event {
  constructor(dataService) {
    this.class = "sj_zjsj sj_event";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/zjsj.json')
      .then(data => this.data = data.event)
  }
}

Event.$inject = ['dataService']

export default Event