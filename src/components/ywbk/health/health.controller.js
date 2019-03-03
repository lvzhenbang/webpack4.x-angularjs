class Health {
  constructor(dataService) {
    this.data = ywbk.health;
    this.class = "sj_ywbk sj_health";
    dataService.getData('/data/ywbk.json').then(data => this.data = data.health)
  }
}

Health.$inject = ['dataService']

export default Health