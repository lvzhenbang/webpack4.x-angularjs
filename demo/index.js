const app = angular.module('myApp', []);

app.directive('tAdd', () => ({
  restrict: 'E',
  replace: true,
  template: '<h1>123</h1>',
}));
