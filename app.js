import angular from 'angular';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './uiSchemaBuilderCms'

// Create and bootstrap application
const requires = [
  'ui.schemaBuilder.cms'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);