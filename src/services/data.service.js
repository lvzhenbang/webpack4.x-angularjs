/**
 * service of data-http
 * by lzb
 */
export class dataService {
  constructor($http, $timeout, $q) {
    this.$http = $http
    this.$timeout = $timeout
    this.$q = $q
  }

  getData(address) {
    return this.$http.get(address).then(res =>res.data)
  }
}

dataService.$inject = ['$http', '$timeout', '$q']