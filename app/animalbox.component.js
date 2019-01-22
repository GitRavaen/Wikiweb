System.register(['angular2/core', './animalbox.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animalbox_service_1;
    var AnimalboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animalbox_service_1_1) {
                animalbox_service_1 = animalbox_service_1_1;
            }],
        execute: function() {
            AnimalboxComponent = (function () {
                function AnimalboxComponent(animalboxService) {
                    this.title = "The title of courses page";
                    this.isActive = false;
                    this.animalbox = animalboxService.getAnimalbox();
                }
                AnimalboxComponent.prototype.onSave = function ($event) {
                    console.log("Test", $event);
                };
                AnimalboxComponent.prototype.onDivClicked = function () {
                    console.log("div");
                };
                AnimalboxComponent = __decorate([
                    core_1.Component({
                        selector: 'animalbox',
                        template: "\n        <rect width=\"200\" height=\"50\" x=\"-100\" y=\"-25\" rx=\"5\" ry=\"5\" style=\"stroke: rgb(102, 102, 204);\"></rect>\n        ",
                        providers: [animalbox_service_1.AnimalboxService],
                    }), 
                    __metadata('design:paramtypes', [animalbox_service_1.AnimalboxService])
                ], AnimalboxComponent);
                return AnimalboxComponent;
            }());
            exports_1("AnimalboxComponent", AnimalboxComponent);
        }
    }
});
//# sourceMappingURL=animalbox.component.js.map