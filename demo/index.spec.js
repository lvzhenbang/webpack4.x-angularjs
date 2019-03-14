describe('Unit testing great quotes', () => {
  let $compile, $rootScope;

  beforeEach(module('myApp'))

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    const tAdd = $compile("<t-add></t-add>")($rootScope);

    $rootScope.$digest();
    expect(tAdd.html()).toContain('123');
  });
});