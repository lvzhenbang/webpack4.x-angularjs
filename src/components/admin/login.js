/**
 * component of login
 * by lzb
 */
import '~css/commons/login.scss';

class loginController {
  constructor(authService, $state) {
    this.loginInfo = {
      username: '',
      password: '',
    };

    this.authService = authService;
    this.$state = $state;
    this.clickAble = false;
  }

  // 实际开发中这样做不正确，这里只是为了演示
  login() {
    // only login-component self to check
    // if (!this.check()) return;

    this.clickAble = true;

    this
      // requset server to check
      .authService
      .auth(this.loginInfo)
      // fetch server error
      .then((errorMessage) => {
        this.errorMessage = errorMessage;
      })
      // $state.go() depend on this.tState
      .then(() => {
        this.redirectTo();
      })
      // catch unexcepted error
      .catch((error) => {
        this.errorMessage = error;
      })
      .finally(() => {
        this.clickAble = false;
      });
  }

  check(type) {
    if (type && this.loginInfo[type].trim().length <= 0) {
      this.errorMessage = `验证错误-${type}不能为空！`;
      return false;
    }

    if (this.loginInfo[type].trim().length >= 3) {
      this.errorMessage = `验证通过-${type}的长度已满足至少3位的要求。`;
    } else {
      this.errorMessage = `验证错误-${type}的长度至少需要3位！`;
      return false;
    }

    return true;
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
      <p class="form-message" ng-show="$ctrl.errorMessage">
        <strong>{{ $ctrl.errorMessage.split('-')[0] }} ：</strong>
        <i>{{ $ctrl.errorMessage.split('-')[1] }}</i>
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
        <button class="btn" type="button" ng-click="$ctrl.login()" ng-disabled="$ctrl.clickAble"> 登录 </button>
      </div>
    </div>
  </div>
  `,
  controller: loginController,
};
