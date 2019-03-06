/**
 * service of loading
 * by lzb
 */
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
  serviceWorker.registerWorker('./service-worker.js')
}

serviceWokerRunBlock.$inject = ['serviceWorker'];