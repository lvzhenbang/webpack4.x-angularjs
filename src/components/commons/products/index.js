/**
 * component of products
 * by lzb
 */
import '@css/product/index.scss';

let productsComponent = {
  bindings: { products: '<' },
  template: `
  <div class="sj_loan_product sj_wrapper">
    <blocktitle title="$ctrl.products.title"></blocktitle>

    <div class="sj_product-list">
        <div class="sj_product-item" ng-repeat="item in $ctrl.products.list">
          <a href="{{ item.href }}">
            <div class="sj_left">
              <div class="sj_top">
                <div>  {{ item.cn_name }} </div>
                <div>  {{ item.en_name }} </div>
              </div>
                
              <div class="sj_bottom">
                <div class="sj_more">
                  <span>MORE</span>
                </div>
              </div>
            </div>
            <div class="sj_right">
              <img ng-src="{{ item.img }}" alt="{{ item.cn_name }}">
            </div>
          </a>
        </div>
    </div>
  </div>
  `
};

export default productsComponent;