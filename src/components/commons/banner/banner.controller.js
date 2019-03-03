class Banner {
  constructor() {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

Banner.$inject = ['dataService']

export default Banner;