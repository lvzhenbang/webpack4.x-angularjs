import template from './banner.html';
import controller from './banner.controller';
import '@css/commons/banner.scss';

let bannerComponent = {
  bindings: { banner: '<'},
  template,
  controller
};

export default bannerComponent;