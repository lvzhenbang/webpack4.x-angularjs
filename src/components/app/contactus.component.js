/**
 * component of contactus
 * by lzb
 */
import '~css/contactus/index.scss';

export default {
  bindings: {
    contactus: '<',
    aboutus: '<',
  },
  template: `
  <div id="contactus" class="sj_contactus">
    <div class="sj_second-title">
      <span> {{ $ctrl.contactus.cn_name }} </span>
      <span> {{ $ctrl.contactus.en_name }} </span>
    </div>

    <div class="sj_wrapper">
      <!-- tag -->
      <img class="sj_tag" ng-src="{{ $ctrl.contactus.img }}">

      <div class="sj_left">
        <div class="sj_ct-logo">
          <img ng-src="{{ $ctrl.contactus.company.img }}" alt="{{ $ctrl.contactus.company.alt }}">
          <span> {{ $ctrl.contactus.company.name }} </span>
        </div>
        <ul class="sj_ct-list">
          <li class="sj_ct-item" ng-repeat="item in $ctrl.contactus.list">
            <img ng-src="{{ item.img }}">
            <span> {{ item.text }} </span>
          </li>
        </ul>
      </div>
      
      <div class="sj_right">
        <ul class="sj_qr-list">
          <li class="sj_qr-item" ng-repeat="item in $ctrl.contactus.qr_list">
            <img ng-src="{{ item.img }}" alt="{{ item.alt }}">
            <div class="sj_qr-des">
              <span> {{ item.name }} </span>
              <span> {{ item.qname }} </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <aboutus aboutus="$ctrl.aboutus"></aboutus>
  `,
};
