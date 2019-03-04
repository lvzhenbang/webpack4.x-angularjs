loadingService.$inject = ['$compile', '$rootScope'];
loadingRunBlock.$inject = ['$transitions', 'loadingService'];

export function loadingService () {
  this.showLoading = showLoading
  this.hideLoading = hideLoading
  
  function showLoading() {
    let oDiv = document.querySelector('.spinner') || null
    if (oDiv) {
      oDiv.classList.remove('hide')
    } else {
      oDiv = document.createElement('div')
      oDiv.classList.add('spinner')
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
      `
     document.body.appendChild(oDiv)
    }
  }
  
  function hideLoading() {
    let spinner = document.querySelector('.spinner');
    spinner.classList.add('hide');
  }
}

export function loadingRunBlock($transitions, loadingService) {
  $transitions.onError({}, function($transition) {
    console.log($transition.error().message, $transition.error().redirected)
  });
  $transitions.onStart({ /* match anything */ }, loadingService.showLoading);
  $transitions.onFinish({ /* match anything */ }, loadingService.hideLoading);
}