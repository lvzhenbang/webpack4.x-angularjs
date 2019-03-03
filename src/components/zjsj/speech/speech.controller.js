class Speech {
  constructor(dataService) {
    this.class = "sj_zjsj sj_speech";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/zjsj.json')
      .then(data => this.data = data.speech)
  }
}

Speech.$inject = ['dataService']

export default Speech