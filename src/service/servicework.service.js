export function serviceWorker () {
  this.registerWorker = registerWorker
  
  function checkServiceWorker() {
    if ('serviceWorker' in navigator) return true
    return false
  }

  function registerWorker(worker) {
    if(checkServiceWorker()){
      navigator.serviceWorker.register(worker);
    }
  }
}

serviceWorker.$inject = ['$compile', '$rootScope'];

export function serviceWokerRunBlock(serviceWorker) {
  serviceWorker.registerWorker('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/service-worker.js')
}

serviceWokerRunBlock.$inject = ['serviceWorker'];