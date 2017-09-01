var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "aurelia-ux", "aurelia-ux"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, aurelia_ux_1, aurelia_ux_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxList = /** @class */ (function () {
        function UxList(resources, styleEngine) {
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
        }
        UxList.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxList.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxList.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UxList.prototype, "theme", void 0);
        UxList = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
            aurelia_templating_1.customElement('ux-list'),
            aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
        ], UxList);
        return UxList;
    }());
    exports.UxList = UxList;
});
