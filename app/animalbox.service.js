System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimalboxService;
    return {
        setters:[],
        execute: function() {
            AnimalboxService = (function () {
                function AnimalboxService() {
                }
                AnimalboxService.prototype.getAnimalbox = function () {
                    return ["Lion"];
                };
                return AnimalboxService;
            }());
            exports_1("AnimalboxService", AnimalboxService);
        }
    }
});
//# sourceMappingURL=animalbox.service.js.map