/**
 * service of http request with storage (localstorage)
 * by lzb
 */
export default class storageService {
  constructor($timeout, $q, $window, dataService) {
    this.$timeout = $timeout;
    this.$q = $q;
    this.storage = $window.localStorage;
    this.dataService = dataService;
    this.data = null;

    this.toJson = str => JSON.parse(str);
    this.toStr = json => JSON.stringify(json);
  }

  init(address, name) {
    const tData = this.getValue(name);

    if (tData) {
      return this.$q.resolve(tData);
    }
    return this.$timeout(() => this
      .dataService
      .getData(address)
      .then((data) => {
        this.storage.setItem(name, this.toStr(data));
        return this.$q.resolve(data);
      }), 3000);
  }

  getValue(name) {
    return this.toJson(this.storage.getItem(name));
  }
}

storageService.$inject = ['$timeout', '$q', '$window', 'dataService'];
