import uiSchemaBuilderCms from "../../app";

class SchemaBuilderCmsCtrl {
  constructor($scope) {
    "ngInject";

  }

  onSubmit() {
    alert(JSON.stringify(this.model), null, 2);
  }
}

uiSchemaBuilderCms.directive("schemaBuilderCms", () => {
  return {
    restrict: "E",
    controller: SchemaBuilderCmsCtrl,
    controllerAs: "$ctrl",
    templateUrl: "./template.html"
  };
});

export default SchemaBuilderCmsCtrl;
