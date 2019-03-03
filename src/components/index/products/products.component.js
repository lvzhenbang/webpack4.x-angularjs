import template from './products.html';
import controller from './products.controller';
import '@css/product/index.scss';

let productsComponent = {
  bindings: { products: '<' },
  template
};

export default productsComponent;