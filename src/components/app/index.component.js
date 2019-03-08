/**
 * component of index
 * by lzb
 */
export default {
  bindings: {
    index: '<',
  },
  template: `
    <products products="$ctrl.index.products"></products>
    <partners partners="$ctrl.index.partners"></partners>
    <aboutus aboutus="$ctrl.index.aboutus"></aboutus>
  `,
};
