/**
 * route of app & children
 * by lzb
 */
// app
export const appRoute = {
  name: 'app',
  url: '',
  redirectTo: 'index',
  resolve: {
    index: ['storageService', iss => iss.init('data/index.json', 'index')],
  },
  views: {
    '!$default': {
      component: 'app',
    },
  },
};

// app/contactus
export const contactusRoute = {
  parent: 'app',
  name: 'contactus',
  url: '/contactus',
  resolve: {
    contactus: ['storageService', iss => iss.init('data/contactus.json', 'contactus')],
    aboutus: ['storageService', iss => iss.init('data/index.json', 'index').then(data => data.aboutus)],
  },
  data: {
    requiresAuth: true,
  },
  views: {
    app: {
      component: 'contactus',
    },
  },
};

// app/index
export const indexRoute = {
  parent: 'app',
  name: 'index',
  url: '/index',
  resolve: {
    banner: ['storageService', iss => iss.init('data/index.json', 'index').then(data => data.banner)],
    index: ['storageService', iss => iss.init('data/index.json', 'index')],
  },
  views: {
    banner: {
      component: 'banner',
    },
    app: {
      component: 'index',
    },
  },
};

// app/newscenter
export const newscenterRoute = {
  parent: 'app',
  name: 'newscenter',
  url: '/newscenter',
  resolve: {
    newscenter: ['storageService', iss => iss.init('data/newscenter.json', 'newscenter')],
  },
  data: {
    requiresAuth: true,
  },
  views: {
    banner: {
      component: '',
    },
    app: {
      component: 'newscenter',
    },
  },
};

// app/recruitment
export const recruitmentRoute = {
  parent: 'app',
  name: 'recruitment',
  url: '/recruitment',
  resolve: {
    recruitment: ['storageService', iss => iss.init('data/recruitment.json', 'recruitment')],
  },
  data: {
    requiresAuth: true,
  },
  views: {
    banner: {
      component: '',
    },
    app: {
      component: 'recruitment',
    },
  },
};

// shzr
export const shzrRoute = {
  parent: 'app',
  name: 'shzr',
  url: '/shzr',
  redirectTo: 'shzr-block',
  resolve: {
    banner: ['storageService', iss => iss.init('data/index.json', 'index').then(data => data.banner)],
    tabs: ['storageService', iss => iss.init('data/sidenav.json', 'sidenav').then(data => data.shzr)],
  },
  views: {
    banner: {
      component: 'banner',
    },
    app: {
      component: 'shzr',
    },
  },
  lazyLoad: (transition) => {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('../modules/block.module').then(mod => $ocLazyLoad.load(mod.default));
  },
};

// app/styleus
export const styleusRoute = {
  parent: 'app',
  name: 'styleus',
  url: '/styleus',
  resolve: {
    styleus: ['storageService', iss => iss.init('data/styleus.json', 'styleus')],
  },
  views: {
    banner: {
      component: '',
    },
    app: {
      component: 'styleus',
    },
  },
};

// app/sxy
export const sxyRoute = {
  parent: 'app',
  name: 'sxy',
  url: '/sxy',
  redirectTo: 'sxy-block',
  resolve: {
    banner: ['storageService', iss => iss.init('data/index.json', 'index').then(data => data.banner)],
    tabs: ['storageService', iss => iss.init('data/sidenav.json', 'sidenav').then(data => data.sxy)],
  },
  views: {
    banner: {
      component: 'banner',
    },
    app: {
      component: 'sxy',
    },
  },
  lazyLoad: (transition) => {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('../modules/block.module').then(mod => $ocLazyLoad.load(mod.default));
  },
};

// ywbk
export const ywbkRoute = {
  parent: 'app',
  name: 'ywbk',
  url: '/ywbk',
  redirectTo: 'ywbk-block',
  resolve: {
    banner: ['storageService', iss => iss.init('data/index.json', 'index').then(data => data.banner)],
    tabs: ['storageService', iss => iss.init('data/sidenav.json', 'sidenav').then(data => data.ywbk)],
  },
  views: {
    banner: {
      component: 'banner',
    },
    app: {
      component: 'ywbk',
    },
  },
  lazyLoad: (transition) => {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('../modules/block.module').then(mod => $ocLazyLoad.load(mod.default));
  },
};

// zjsj
export const zjsjRoute = {
  parent: 'app',
  name: 'zjsj',
  url: '/zjsj',
  redirectTo: 'zjsj-block',
  resolve: {
    banner: ['storageService', iss => iss.init('data/index.json', 'index').then(data => data.banner)],
    tabs: ['storageService', iss => iss.init('data/sidenav.json', 'sidenav').then(data => data.zjsj)],
  },
  views: {
    banner: {
      component: 'banner',
    },
    app: {
      component: 'zjsj',
    },
  },
  lazyLoad: (transition) => {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('../modules/block.module').then(mod => $ocLazyLoad.load(mod.default));
  },
};
