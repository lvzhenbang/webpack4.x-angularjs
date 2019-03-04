// app
export const appRoute = {
  name: 'app',
  redirectTo: 'index',
  component: 'app'
}

// app/contactus
export const contactusRoute = {
  parent: 'app',
  name: 'contactus',
  url: '/contactus',
  views: {
    app: {
      component: 'contactus'
    }
  }
}

// app/index
export const indexRoute = {
  parent: 'app',
  name: 'index',
  url: '/index',
  views: {
    app: {
      component: 'index'
    }
  }  
}

// app/newscenter
export const newscenterRoute = {
  parent: 'app',
  name: 'newscenter',
  url: '/newscenter',
  views: {
    app: {
      component: 'newscenter'
    }
  }  
}

// app/recruitment
export const recruitmentRoute = {
  parent: 'app',
  name: 'recruitment',
  url: '/recruitment',
  views: {
    app: {
      component: 'recruitment'
    }
  }
}

// shzr
export const shzrRoute = {
  parent: 'app',
  name: 'shzr',
  url: '/shzr',
  redirectTo: 'system',
  views: {
    app: {
      component: 'shzr'
    }
  },
  lazyLoad: function(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
    return import('../modules/shzr.module').then(mod => {
      $ocLazyLoad.load(mod.shzrModule)
    })
  }
}

// app/styleus
export const styleusRoute = {
  parent: 'app',
  name: 'styleus',
  url: '/styleus',
  views: {
    app: {
      component: 'styleus'
    }
  } 
}

// app/sxy
export const sxyRoute = {
  parent: 'app',
  name: 'sxy',
  url: '/sxy',
  redirectTo: 'school',
  views: {
    app: {
      component: 'sxy'
    }
  },
  lazyLoad: function(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
    return import('../modules/sxy.module').then(mod => {
      $ocLazyLoad.load(mod.sxyModule)
    })
  }
}

// ywbk
export const ywbkRoute = {
  parent: 'app',
  name: 'ywbk',
  url: '/ywbk',
  redirectTo: 'finance',
  views: {
    app: {
      component: 'ywbk'
    }
  },
  lazyLoad: function(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
    return import('../modules/ywbk.module').then(mod => {
      $ocLazyLoad.load(mod.ywbkModule)
    })
  }
}

// zjsj
export const zjsjRoute = {
  parent: 'app',
  name: 'zjsj',
  url: '/zjsj',
  redirectTo: 'investment',
  views: {
    app: {
      component: 'zjsj'
    }
  },
  lazyLoad: function(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
    return import('../modules/zjsj.module').then(mod => {
      $ocLazyLoad.load(mod.zjsjModule)
    })
  }
}