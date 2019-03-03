class Team {
  constructor(dataService) {
    this.class = "sj_zjsj sj_team";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/zjsj.json')
      .then(data => this.data = data.team)
  }
}

Team.$inject = ['dataService']

export default Team