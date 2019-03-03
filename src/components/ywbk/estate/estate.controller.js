class Estate {
  constructor(dataService) {
    this.class = "sj_ywbk sj_estate";
    dataService.getData('/data/ywbk.json').then(data => this.data = data.estate)
  }
}

Estate.$inject = ['dataService']

export default Estate