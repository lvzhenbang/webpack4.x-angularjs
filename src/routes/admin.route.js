/**
 * route of admin
 * by lzb
 */
const loginRoute = {
  name: 'login',
  url: '/login',
  resolve: {
    tState: ['$transition$', ($transition$) => {
      if ($transition$.redirectedFrom() != null) {
        return $transition$.redirectedFrom().targetState();
      }
      const $state = $transition$.router.stateService;
      if ($transition$.from().name !== '') {
        return $state.target($transition$.from(), $transition$.params('from'));
      }
      return $state.target('index');
    }],
  },
  component: 'login',
};

export default loginRoute;
