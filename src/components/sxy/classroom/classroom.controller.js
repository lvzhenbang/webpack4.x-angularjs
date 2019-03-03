class Classroom {
  constructor(dataService) {
    this.class = "sj_sxy sj_classroom";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/sxy.json')
      .then(data => this.data = data.classroom)
  }
}

Classroom.$inject = ['dataService']

export default Classroom