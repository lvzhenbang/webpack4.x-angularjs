/**
 * component of app
 * by lzb
 */
import '@css/index.scss';
import '@css/commons/tabs.scss'

export const appComponent = {
  bindings: { index: '<' },
  template: `
  <header logo="$ctrl.index.logo" nav="$ctrl.index.nav"></header>
  <header logo="$ctrl.index.logo" nav="$ctrl.index.nav" class="sj_nav-fixed" navfixed></header>

  <div ui-view="banner"></div>
  <div ui-view="app"></div>
  
  <map></map>
  <footer nav="$ctrl.index.nav" qrcode="$ctrl.index.qrcode" service="$ctrl.index.service"></footer>
  <backtop></backtop>
  `
}