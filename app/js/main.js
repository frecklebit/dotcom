'use strict';

import $ from 'jquery'; //we need to load jquery first so angular boots with jquery selector support (angular.element(...))
import angular from 'angular';
import 'fullpage.js'; //load fullpage before angular-fullpage
import 'angular-fullpage.js';

// angular modules
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  'fullPage.js'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app'], {
  strictDi: true
});
