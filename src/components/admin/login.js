/**
 * component of login
 * by lzb
 */
import '~css/commons/login.scss';

class loginController {
  constructor(authService, $state) {
    this.authService = authService;
    this.$state = $state;

    this.loginInfo = {
      username: '',
      password: '',
    };
    this.disableClick = true;
    this.hideError = true;
    this.errorTitle = '';
    this.errorBody = '';
    this.loginState = {
      password: false,
      username: false,
    };
  }

  // 实际开发中这样做不正确，这里只是为了演示
  login() {
    this
      // requset server to check
      .authService
      .auth(this.loginInfo)
      // fetch server error
      .then(() => {
        if (this.authService.isLogin) {
          this.redirectTo();
        } else {
          this.hideError = false;
          this.setError(this.authService.errorMessage);
        }
      })
      // catch unexcepted error
      .catch((error) => {
        this.hideError = false;
        this.setError(`错误-${error}`);
      })
      .finally(() => {
        this.disableClick = false;
      });
  }

  check(type) {
    if (type && this.loginInfo[type].trim().length <= 0) {
      this.hideError = false;
      this.loginState[type] = false;
      this.setError(`${type}验证错误-${type}不能为空！`);
    }

    if (this.loginInfo[type].trim().length >= 3) {
      this.hideError = false;
      this.loginState[type] = true;
      this.setError(`${type}验证通过-${type}的长度已满足至少3位的要求。`);
    } else {
      this.hideError = false;
      this.loginState[type] = false;
      this.setError(`${type}验证错误-${type}的长度至少需要3位！`);
    }

    if (this.loginState.password && this.loginState.username) {
      this.setError(`验证通过-${type}用户名和密码输入合法。`);
      this.disableClick = false;
    } else {
      this.disableClick = true;
    }
  }

  setError(message) {
    [this.errorTitle, this.errorBody] = message.split('-');
  }

  redirectTo() {
    return this.$state.go(
      this.tState.state(),
      this.tState.params(),
      {
        ...this.tState.options(),
        reload: true,
      },
    );
  }
}

loginController.$inject = ['authService', '$state'];

export default {
  bindings: { tState: '<' },
  template: `
  <div class="box">
    <div class="form">
      <div class="form-header">
        <img src="assets/init/favicon-144.png"/>
        <h3> webpack-angularjs </h3>
      </div>
      <p class="form-message" ng-hide="$ctrl.hideError">
        <strong>{{ $ctrl.errorTitle }} ：</strong>
        <i>{{ $ctrl.errorBody }}</i>
      </p>
      <div class="form-content">
        <div class="text-input">
          <label for="username">用户名：</label>
          <input id="username" type="text" name="username" placeholder="请输入用户名" ng-keyup="$ctrl.check('username')" ng-model="$ctrl.loginInfo.username">
        </div>
        <div class="text-input">
          <label for="password">密码：</label>
          <input type="password" name="password" placeholder="请输入密码" ng-keyup="$ctrl.check('password')" ng-model="$ctrl.loginInfo.password">
        </div>
        <button class="btn" type="button" ng-click="$ctrl.login()" ng-disabled="$ctrl.disableClick"> 登录 </button>
      </div>
    </div>
  </div>
  `,
  controller: loginController,
};
