class Career {
  constructor(dataService) {
    this.class = "sj_shzr sj_career";
    dataService.getData('/data/shzr.json').then(data => this.data = data.career)
  }
}

Career.$inject = ['dataService']

export default Career