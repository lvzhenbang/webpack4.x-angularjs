/**
 * service of loading
 * by lzb
 */

export class loadingService {
  constructor() {
    this.showLoading = () => {
      let oDiv = document.querySelector('.spinner') || null;
      if (oDiv) {
        oDiv.classList.remove('hide');
      } else {
        oDiv = document.createElement('div');
        oDiv.classList.add('spinner');
        oDiv.innerHTML = `<div class="spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        `;
        document.body.appendChild(oDiv);
      }
    };
    this.hideLoading = () => {
      const spinner = document.querySelector('.spinner');
      spinner.classList.add('hide');
    };
  }
}

loadingService.$inject = ['$compile', '$rootScope'];

export function loadingRunBlock($transitions, lService) {
  $transitions.onStart({ /* match anything */ }, lService.showLoading);
  $transitions.onFinish({ /* match anything */ }, lService.hideLoading);
}

loadingRunBlock.$inject = ['$transitions', 'loadingService'];
