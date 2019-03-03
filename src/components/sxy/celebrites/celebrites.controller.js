class Celebrites {
  constructor(dataService) {
    this.class = "sj_sxy sj_celebrites";
    dataService.getData('/data/sxy.json').then(data => this.data = data.celebrites)
  }
}

Celebrites.$inject = ['dataService']

export default Celebrites