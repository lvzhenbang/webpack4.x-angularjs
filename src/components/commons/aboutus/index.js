/**
 * component of aboutus
 * by lzb
 */
import '~css/aboutus/index.scss';

export default {
  bindings: { aboutus: '<' },
  template: `
  <div class="about-us sj_wrapper">
    <blocktitle title="$ctrl.aboutus.title"></blocktitle>

    <div class="about-list">
      <div class="about-item" ng-repeat="item in $ctrl.aboutus.list">
        <div class="icon"></div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
  `,
};
