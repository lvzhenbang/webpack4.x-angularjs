/**
 * block route
 * by lzb
 */
// shzr-block route
export const shzrBlockRoute = {
  parent: 'shzr',
  name: 'shzr-block',
  url: '/:type',
  params: {
    type: 'system'
  },
  resolve: {
    data: ['storageService', '$transition$', (iss, $transition$) => iss
      .init('data/shzr.json', 'shzr')
      .then(data => data[$transition$.params().type])
    ]
  },
  views: {
    block: {
      component: 'block'
    }
  }
}

// sxy-block route
export const sxyBlockRoute = {
  parent: 'sxy',
  name: 'sxy-block',
  url: '/:type',
  params: {
    type: "school"
  },
  resolve: {
    data: ['storageService', '$transition$', (iss, $transition$) => iss
      .init('data/sxy.json', 'sxy')
      .then(data => data[$transition$.params().type])
    ]
  },
  views: {
    block: {
      component: 'block'
    }
  }
}

export const ywbkBlockRoute = {
  parent: 'ywbk',
  name: 'ywbk-block',
  url: '/:type',
  params: {
    type: "finance"
  },
  resolve: {
    data: ['storageService', '$transition$', (iss, $transition$) => iss
      .init('data/ywbk.json', 'ywbk')
      .then(data => data[$transition$.params().type])
    ]
  },
  views: {
    block: {
      component: 'block'
    }
  }
}

// zjsj-block route
export const zjsjBlockRoute = {
  parent: 'zjsj',
  name: 'zjsj-block',
  url: '/:type',
  params: {
    type: "investment"
  },
  resolve: {
    data: ['storageService', '$transition$', (iss, $transition$) => iss
      .init('data/zjsj.json', 'zjsj')
      .then(data => data[$transition$.params().type])
    ]
  },
  views: {
    block: {
      component: 'block'
    }
  }
}