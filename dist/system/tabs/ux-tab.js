System.register(["aurelia-framework", "aurelia-pal", "aurelia-ux"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_pal_1, aurelia_ux_1, aurelia_ux_2, UxTab;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
                aurelia_ux_2 = aurelia_ux_1_1;
            }
        ],
        execute: function () {
            UxTab = /** @class */ (function () {
                function UxTab(element, resources, styleEngine) {
                    this.element = element;
                    this.resources = resources;
                    this.styleEngine = styleEngine;
                    this.selected = false;
                    this.disabled = false;
                    this.text = null;
                    this.icon = null;
                    this.theme = null;
                }
                UxTab.prototype.created = function (_, myView) {
                    this.view = myView;
                };
                UxTab.prototype.bind = function () {
                    if (this.theme) {
                        this.styleEngine.applyTheme(this, this.theme);
                    }
                };
                UxTab.prototype.themeChanged = function (newValue) {
                    this.styleEngine.applyTheme(this, newValue);
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
                ], UxTab.prototype, "selected", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], UxTab.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], UxTab.prototype, "text", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], UxTab.prototype, "icon", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], UxTab.prototype, "theme", void 0);
                UxTab = __decorate([
                    aurelia_framework_1.inject(aurelia_pal_1.DOM.Element, aurelia_framework_1.ViewResources, aurelia_ux_1.StyleEngine),
                    aurelia_framework_1.customElement('ux-tab'),
                    aurelia_framework_1.processAttributes(aurelia_ux_2.processDesignAttributes)
                ], UxTab);
                return UxTab;
            }());
            exports_1("UxTab", UxTab);
        }
    };
});
