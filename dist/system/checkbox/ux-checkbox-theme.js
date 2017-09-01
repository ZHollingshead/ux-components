System.register(["aurelia-ux"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_ux_1, UxCheckboxTheme;
    return {
        setters: [
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
            }
        ],
        execute: function () {
            UxCheckboxTheme = /** @class */ (function () {
                function UxCheckboxTheme() {
                    this.effect = 'ripple'; // ripple or none
                }
                UxCheckboxTheme = __decorate([
                    aurelia_ux_1.styles()
                ], UxCheckboxTheme);
                return UxCheckboxTheme;
            }());
            exports_1("UxCheckboxTheme", UxCheckboxTheme);
        }
    };
});
