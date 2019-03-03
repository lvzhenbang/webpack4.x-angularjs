export class storageService {
  constructor(dataService, $q) {
    this.storage = window.localStorage
    this.dataService = dataService
    this.$q = $q
  }

  init(address, name) {
    let _data = this.getValue(name)
    if (_data) {
      return this.$q.resolve(_data)
    } else {
      return this
        .dataService
        .getData(address)
        .then(data => {
          this.storage.setItem(name, this.toStr(data))
          return data
        })
    }
  }

  toJson(str) {
    return JSON.parse(str)
  }

  toStr(json) {
    return JSON.stringify(json)
  }

  getValue(name) {
    return this.toJson(this.storage.getItem(name))
  }
}

storageService.$inject = ['dataService', '$q']