import uiSchemaBuilderCms from "../../app";

class SchemaBuilderCmsCtrl {
  constructor($scope) {
    "ngInject";
    var vm = this;
    vm.name = "AngularJS";
    vm.model = {
      name: {
        first: "Gandalf",
        last: "The Gray"
      },
      email: "gandalf@example.com",
      username: "yoiamgandalf"
    };

    vm.fields = [
      {
        key: "first",
        type: "input",
        model: vm.model.name,
        templateOptions: {
          label: "First Name"
        }
      },
      {
        key: "last",
        type: "input",
        model: vm.model.name,
        templateOptions: {
          label: "Last Name"
        }
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          label: "Email Address",
          type: "email"
        }
      },
      {
        key: "username",
        type: "input",
        templateOptions: {
          label: "Username"
        }
      },
      {
        key: "other",
        type: "input",
        templateOptions: {
          label: "Other model"
        },
        expressionProperties: {
          "templateOptions.disabled": "!options.data.modelLoaded"
        },
        data: {
          modelLoaded: false
        }
      }
    ];

    // vm.formData = {
    //   custom: "Hey! I am a custom value!"
    // };

    // vm.formFields = [
    //   {
    //     key: "custom",
    //     type: "custom",
    //     noFormControl: true,
    //     templateOptions: {
    //       label: "Field 1",
    //       placeholder: "Formly is terrific!"
    //     }
    //   }
    // ];
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
