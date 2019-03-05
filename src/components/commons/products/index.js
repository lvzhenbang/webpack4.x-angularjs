import template from './products.html';
import '@css/product/index.scss';

let productsComponent = {
  bindings: { products: '<' },
  template
};

export default productsComponent;