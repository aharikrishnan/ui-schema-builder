import angular from 'angular';
import 'angular-ui-bootstrap'
import 'angular-formly'
import 'angular-formly-templates-bootstrap'
                      
import 'bootstrap/dist/css/bootstrap.css';

// console.log(uiBootstrap, '=')
let UiSchemaBuilder = angular.module('ui.schemaBuilder', ['ui.bootstrap', 'formly', 'formlyBootstrap'])

export default UiSchemaBuilder