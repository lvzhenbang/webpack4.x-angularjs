import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';

import aboutus from './components/commons/aboutus/aboutus.js';
import banner from './components/commons/banner/banner.js';

import app from './app/app.js';

import contactus from './components/contactus/contactus.js';
import index from './components/index/index.js';
import newscenter from './components/newscenter/newscenter.js';
import recruitment from './components/recruitment/recruitment.js';
import shzr from './components/shzr/shzr.js';
import sxy from './components/sxy/sxy.js';
import styleus from './components/styleus/styleus.js';
import ywbk from './components/ywbk/ywbk.js';
import zjsj from './components/zjsj/zjsj.js';

let initModule = angular.module('init', [
  uiRouter,
  oclazyload,
  aboutus,
  banner,
  app,
  contactus,
  index,
  newscenter,
  recruitment,
  shzr,
  sxy,
  styleus,
  ywbk,
  zjsj
]);

import { loadingService, loadingRunBlock } from './service/loading.service.js';
import { serviceWorker, serviceWokerRunBlock } from './service/servicework.service.js';
import { dataService } from './service/data.service.js';
import { storageService } from './service/storage.service.js';

initModule.service('loadingService', loadingService);
initModule.service('serviceWorker', serviceWorker);
initModule.service('dataService', dataService);
initModule.service('storageService', storageService);

initModule.run(loadingRunBlock);
initModule.run(serviceWokerRunBlock)

export default initModule;