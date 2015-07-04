import ko from 'knockout';
import './app';
import rootScope from './root-scope';


export function run() {
  'use strict';

  ko.applyBindings(rootScope, window.document.documentElement);
}
