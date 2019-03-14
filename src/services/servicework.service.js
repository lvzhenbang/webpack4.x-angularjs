/**
 * service of loading
 * by lzb
 */
export class serviceWorker {
  constructor() {
    this.check = () => {
      if ('serviceWorker' in window.navigator) return true;
      return false;
    };
  }

  register(worker) {
    if (this.check()) {
      window.navigator.serviceWorker.register(worker);
    }
  }
}

serviceWorker.$inject = ['$compile', '$rootScope'];

export function serviceWokerRunBlock(sw) {
  sw.register('./service-worker.js');
}

serviceWokerRunBlock.$inject = ['serviceWorker'];
