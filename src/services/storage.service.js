export class storageService {
  constructor($timeout, $q, dataService) {
    this.$timeout = $timeout
    this.$q = $q
    this.storage = window.localStorage
    this.dataService = dataService
  }

  init(address, name) {
    let _data = this.getValue(name)

    if(!_data){
     this
        .dataService
        .getData(address)
        .then(data => {
          this.storage.setItem(name, this.toStr(data))
          _data = data
        })
    }

    return this.$timeout(() => _data, 3000)
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