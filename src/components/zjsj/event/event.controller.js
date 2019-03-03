class Event {
  constructor(dataService) {
    this.class = "sj_zjsj sj_event";
    dataService.getData('/data/zjsj.json').then(data => this.data = data.event)
  }
}

Event.$inject = ['dataService']

export default Event