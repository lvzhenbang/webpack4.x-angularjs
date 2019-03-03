class School {
  constructor(dataService) {
    this.class = "sj_sxy sj_school";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/sxy.json')
      .then(data => this.data = data.school)
  }
}

School.$inject = ['dataService']

export default School