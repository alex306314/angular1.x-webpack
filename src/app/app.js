import {
  testDirective,
} from './directives'
import {
  AppController
} from './controllers'

import '../style/app.css';

var app = angular.module('app', [])
  .directive('testDirective', testDirective)
  .controller('AppController', AppController);

export default app;