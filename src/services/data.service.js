/**
 * service of data-http
 * by lzb
 */
export default class dataService {
  constructor($http, $timeout, $q) {
    this.$http = $http;
    this.$timeout = $timeout;
    this.$q = $q;
  }

  getData(address) {
    return this
      .$http
      .get(address)
      .then(res => this.$timeout(() => this.$q.resolve(res.data), 3000));
  }
}

dataService.$inject = ['$http', '$timeout', '$q'];
