export class storageService {
  constructor(dataService) {
    this.storage = window.localStorage
    this.dataService = dataService
  }

  init(address, name) {
    if (!this.storage.getItem(name)) {
      this.dataService.getData(address).then(data => {
        Object.keys(data).map(key => this.storage.setItem(key, this.toStr(data[key])))
      })
    }
    else {
      return
    }
  }

  toJson(str) {
    return JSON.parse(str)
  }

  toStr(json) {
    return JSON.stringify(json)
  }

  getValue(name) {
    return this.storage.getItem(name)
  }
}

storageService.$inject = ['dataService']