class Restaurant {
  constructor(dataService) {
    this.class = "sj_ywbk sj_restaurant";
    dataService.getData('/data/ywbk.json').then(data => this.data = data.Restaurant)
  }
}

Restaurant.$inject = ['dataService']

export default Restaurant