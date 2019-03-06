/**
 * service of http request with storage (localstorage)
 * by lzb
 */
export class storageService {
  constructor($timeout, $q, dataService) {
    this.$timeout = $timeout
    this.$q = $q
    this.storage = window.localStorage
    this.dataService = dataService,
    this._data = null
  }

  init(address, name) {
    let _data = this.getValue(name)
    // this._data = _data ? this.$q.resolve(_data) : this
    //   .dataService
    //   .getData(address)
    //   .then(data => {
    //     this.storage.setItem(name, this.toStr(data))
    //     return this.$q.resolve(data) 
    //   })

    // return this.$timeout(() => this._data, 3000)

    if(_data) {
      return this.$q.resolve(_data)
    } else {
      return this.$timeout(() => this
        .dataService
        .getData(address)
        .then(data => {
          this.storage.setItem(name, this.toStr(data))
          return this.$q.resolve(data) 
        }), 3000)
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

storageService.$inject = ['$timeout', '$q', 'dataService']