import uiSchemaBuilderCms from '../app'

uiSchemaBuilderCms
.directive('foo', ()=>{
  return {
    restrict: 'E',
    template: "<pre>Hello world !</pre>"
  }
})