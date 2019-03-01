'use strict';

import products from '@data/products.js';

class Products {
  constructor() {
    this.cn_name = products.cn_name;
    this.en_name = products.en_name;
    this.list = products.list;
  }
}

export default Products;