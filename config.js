System.config({
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "typescriptOptions": {
    "typeCheck": true,
    "module": "system"
  },
  "paths": {
    "github:*": "jspm_packages/github/*"
  },
  "packages": {
    "app": {
      "main": "boot",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "typescript"
        }
      }
    }
  }
});

System.config({
  "map": {
    "css": "github:systemjs/plugin-css@0.1.13",
    "html": "github:systemjs/plugin-text@0.0.2",
    "jquery": "github:components/jquery@2.1.4",
    "knockout": "github:knockout/knockout@3.3.0",
    "knockout-paging": "github:ErikSchierboom/knockout-paging@0.2.1",
    "knockout-postbox": "github:rniemeyer/knockout-postbox@0.5.2",
    "knockout-punches": "github:mbest/knockout.punches@0.5.1",
    "knockout-switch-case": "github:mbest/knockout-switch-case@2.1.0",
    "knockout-validation": "github:Knockout-Contrib/Knockout-Validation@2.0.3",
    "typescript": "github:mhegazy/typescript@v1.5-beta2",
    "github:Knockout-Contrib/Knockout-Validation@2.0.3": {
      "knockout": "github:knockout/knockout@3.3.0"
    }
  }
});

