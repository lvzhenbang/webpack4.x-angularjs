class Culture {
  constructor(dataService) {
    this.class = "sj_zjsj sj_culture";
    dataService.getData('/data/zjsj.json').then(data => this.data = data.culture)
  }
}

Culture.$inject = ['dataService']

export default Culture