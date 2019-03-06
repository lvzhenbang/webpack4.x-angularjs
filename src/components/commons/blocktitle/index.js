/**
 * component of block-title
 * by lzb
 */
let blocktitleComponent = {
  bindings: { title: '<'},
  template: `
  <div class="sj_index-title">
    <span> {{ $ctrl.title.cn_name }} </span>
    <div></div>
    <span> {{ $ctrl.title.en_name }} </span>
  </div>
  `
};

export default blocktitleComponent;