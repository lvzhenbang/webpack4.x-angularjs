/**
 * component of recruitment
 * by lzb
 */
import '@css/recruitment/index.scss'

class RecruitmentContoller {
  constructor(storageService) { }

  isActive(index) {
    return index===0 ? true : false
  }

  detailStyle(index) {
    return index===0 ? { 'display': 'block' } : {}
  }
}

RecruitmentContoller.$inject = ['storageService']

export const recruitmentComponent = {
  bindings: { recruitment: '<' },
  controller: RecruitmentContoller,
  template: `
  <div class="sj_recruitment">
    <img ng-src="{{ $ctrl.recruitment.img }}">

    <div class="sj_wrapper shadow">
      <div class="sj_second-title">
        <span> {{ $ctrl.recruitment.cn_name }} </span>
        <span> {{ $ctrl.recruitment.en_name }} </span>
      </div>
    </div>
      
    <div class="sj_table">
      <div class="sj_table-header">
        <div class="sj_table-th" ng-repeat="item in $ctrl.recruitment.thead">
          <span> {{ item.cn_name }} </span>
          <span> {{ item.en_name }} </span>
        </div>
      </div>
      
      <div class="sj_table-body">
        <div class="sj_table-tr" ng-repeat="item in $ctrl.recruitment.list">
          <div class="sj-table-tt">
            <div class="sj_table-td"> {{ item.position}} </div>
            <div class="sj_table-td"> {{ item.num }} </div>
            <div class="sj_table-td"> {{ item.address }} </div>
            <div
              class="sj_table-td sj_arrow-more"
              ng-class="{ active: $ctrl.isActive(index)}">
              <span></span>
            </div>
          </div>

          <div class="sj_table-details" ng-style="$ctrl.detailStyle(index)">
            <div class="sj_recruit-list">
              <div class="sj_recruit-item sj_horizontal">
                <div class="sj_recruit-title">待遇</div>
                <div class="sj_recruit-content"> {{ item.details.pay }} </div>
              </div>
              <div class="sj_recruit-item">
                <div class="sj_recruit-title">岗位职责</div>
                <div class="sj_recruit-content">
                  <p ng-repeat="(num, value) in item.details.responsibilities">
                    {{ (num+1)  + ' 、' + value }}
                  </p> 
                </div>
              </div>
              <div class="sj_recruit-item">
                <div class="sj_recruit-title">任职要求</div>
                <div class="sj_recruit-content">
                  <p ng-repeat="(num, value) in item.details.job_requirements">
                    {{ (num+1) + ' 、' + value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}