class System {
  constructor(dataService) {
    this.class = "sj_shzr sj_system";
    dataService.getData('/data/shzr.json').then(data => this.data = data.system)
  }
}

System.$inject = ['dataService']

export default System