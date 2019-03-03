import template from './partners.html';
import controller from './partners.controller';
import '@css/partner/index.scss';

let partnersComponent = {
  bindings: { partners: '<' },
  template
};

export default partnersComponent;