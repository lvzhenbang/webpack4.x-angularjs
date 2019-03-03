class Styleus {
  constructor(dataService) {
    dataService
      .getData('/data/styleus.json')
      .then(data => {
        this.cn_name = data.cn_name;
        this.en_name = data.en_name;
        this.list = data.list;
      })
  }

  itemStyle(width, height) {
    return {
      "width": width + 'px',
      "height": height + 'px'
    }
  }
}

Styleus.$inject = ['dataService']

export default Styleus