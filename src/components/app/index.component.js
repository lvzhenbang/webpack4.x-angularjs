export const indexComponent = {
  bindings: {
    index: '<'
  },
  template: `
    <banner banner="$ctrl.index.banner"></banner>
    <products products="$ctrl.index.products"></products>
    <partners partners="$ctrl.index.partners"></partners>
    <aboutus aboutus="$ctrl.index.aboutus"></aboutus>
  `
}