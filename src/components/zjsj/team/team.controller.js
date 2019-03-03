class Team {
  constructor(dataService) {
    this.class = "sj_zjsj sj_team";
    dataService.getData('/data/zjsj.json').then(data => this.data = data.team)
  }
}

Team.$inject = ['dataService']

export default Team