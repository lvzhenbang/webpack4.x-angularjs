class Styleus {
  constructor(dataService) {
    dataService
      .getData('/data/styleus.json')
      .then(data => {
        this.cn_name = styleus.cn_name;
        this.en_name = styleus.en_name;
        this.list = styleus.list;
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