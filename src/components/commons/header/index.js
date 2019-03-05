import '@css/commons/header.scss';

let headerComponent = {
  bindings: {
    logo: '<',
    nav: '<'
  },
  template: `
  <div class="sj_nav">
    <div class="sj_wrapper">
      <div class="sj_logo">
        <a ui-sref="index">
          <img ng-src="{{ $ctrl.logo.img }}" alt="{{ $ctrl.logo.alt }}">
        </a>
      </div>
      <div class="sj_navbar">
        <div class="sj_navbar-container">
          <ul class="sj_navbar-box">
            <li ui-sref-active="active">
              <a ui-sref="index">首页</a>
            </li>
            <li ng-repeat="item in $ctrl.nav" ui-sref-active="active">
              <a ui-sref="{{ item.href }}">  {{ item.text }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
};

export default headerComponent;