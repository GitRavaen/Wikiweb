System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.title = "The title of courses page";
                    this.isActive = false;
                }
                HeaderComponent.prototype.onSave = function ($event) {
                    console.log("Test", $event);
                };
                HeaderComponent.prototype.onDivClicked = function () {
                    console.log("div");
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        template: "\n    <div id=\"header\">\n\n\t\t\t<ul class=\"vertical border\">\n\t\t\t\t<li style=\"float:left\"><a class=\"title\">Wiki Web</a></li>\n\t\t\t\t<li><a class=\"indent\"></a></li>\n\t\t\t\t<li><a href=\"\">The Web</a></li>\n\t\t\t\t<li><a href=\"about.html\">About</a></li>\n\t\t\t\t<li><a href=\"home.html\">Home</a></li>\n\t\t\t</ul>\t\n\t\t</div>\n        ",
                        styleUrls: ['app/header.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map