/**
 * component of footer
 * by lzb
 */
import template from './footer.html';
import controller from './footer.controller';
import '@css/commons/footer.scss';

let footerComponent = {
  bindings: {
    nav: '<',
    qrcode: '<',
    service: '<'
  },
  template,
  controller
};

export default footerComponent;