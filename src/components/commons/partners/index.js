/**
 * component of partners
 * by lzb
 */
import '@css/partner/index.scss';

let partnersComponent = {
  bindings: { partners: '<' },
  template: `
  <div class="sj_partner sj_wrapper">
    <blocktitle title="$ctrl.partners.title"></blocktitle>

    <div class="sj_partner-list">
      <div class="sj_partner-item" ng-repeat="item in $ctrl.partners.list">
        <img ng-src="{{ item.img }}" alt="{{ item.alt }}">
      </div>
    </div>
  </div>
  `
};

export default partnersComponent;