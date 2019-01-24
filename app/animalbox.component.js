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
                        template: "\n    <svg height=\"500\" width=\"1000\">\n        <g>\n            <rect x=\"50\" y=\"150\" width=\"200\" height=\"50\" rx=\"5\" ry=\"5\" style=\"stroke: rgb(102, 102, 204);\" fill=\"white\"> Test </rect>\n            <text x=\"65\" y=\"170\" font-family=\"Trebuchet MS\" font-size=\"20\" style=\"fill: rgb(102, 102, 204);\"> Hippopotamus </text>\n        </g>\n        <g>\n            <rect width=\"200\" height=\"50\" x=\"300\" y=\"150\" rx=\"5\" ry=\"5\" style=\"stroke: rgb(102, 102, 204);\" fill=\"white\"></rect>\n            <text x=\"315\" y=\"170\" font-family=\"Trebuchet MS\" font-size=\"20\" style=\"fill: rgb(102, 102, 204);\"> Hippopotamus </text>\n        </g>\n        <g>\n            <rect width=\"200\" height=\"50\" x=\"550\" y=\"150\" rx=\"5\" ry=\"5\" style=\"stroke: rgb(102, 102, 204);\" fill=\"white\"></rect>\n            <text x=\"565\" y=\"170\" font-family=\"Trebuchet MS\" font-size=\"20\" style=\"fill: rgb(102, 102, 204);\"> Hippopotamus </text>\n        </g>\n        <g>\n            <rect style=\"stroke: rgb(256, 256, 256);\" width=\"500\" x=\"150\" y=\"120\" height=\"5\"></rect>\n        </g>\n        <g>\n            <rect width=\"200\" height=\"50\" x=\"300\" y=\"50\" rx=\"5\" ry=\"5\" style=\"stroke: rgb(102, 102, 204);\" fill=\"white\"></rect>\n            <text x=\"315\" y=\"70\" font-family=\"Trebuchet MS\" font-size=\"20\" style=\"fill: rgb(102, 102, 204);\"> Hippopotamus </text>\n        </g>\n    </svg>\n        ",
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