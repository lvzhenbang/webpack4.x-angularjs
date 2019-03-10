/**
 * service of auth
 * by lzb
 */
export class authService {
  constructor(dataService, $q) {
    this.dataService = dataService;
    this.$q = $q;
    this.isLogin = false;
    this.errorMessage = '';
  }

  auth(loginInfo) {
    return this.dataService
      .getData('data/users.json')
      .then((data) => {
        if (data && data.username !== loginInfo.username) {
          this.errorMessage = '错误-用户名不存在!';
          return false;
        }

        if (data && data.password !== loginInfo.password) {
          this.errorMessage = '错误-密码不正确!';
          return false;
        }

        this.errorMessage = '错误-登录成功.';
        return true;
      })
      .then((isLogin) => {
        this.isLogin = isLogin;
        return this.$q.resolve(this.errorMessage);
      });
  }
}

authService.$inject = ['dataService', '$q'];

export function authRunBlock($transitions) {
  $transitions.onBefore(
    {
      to: state => state.data && state.data.requiresAuth,
    },
    (transition) => {
      const AS = transition.injector().get('authService');
      if (!AS.isLogin) {
        return transition
          .router
          .stateService
          .target('login', undefined, { location: false });
      }
      return true;
    },
    { priority: 10 },
  );
}

authRunBlock.$inject = ['$transitions'];
