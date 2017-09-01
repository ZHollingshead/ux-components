System.register(["aurelia-templating", "aurelia-logging", "aurelia-binding", "aurelia-dependency-injection", "aurelia-ux", "./ux-icon-map"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_logging_1, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_ux_1, aurelia_ux_2, ux_icon_map_1, UxIcon;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
                aurelia_ux_2 = aurelia_ux_1_1;
            },
            function (ux_icon_map_1_1) {
                ux_icon_map_1 = ux_icon_map_1_1;
            }
        ],
        execute: function () {
            UxIcon = /** @class */ (function () {
                function UxIcon(element, resources, styleEngine, logger) {
                    this.element = element;
                    this.resources = resources;
                    this.styleEngine = styleEngine;
                    this.logger = logger;
                    this.icon = undefined;
                }
                UxIcon.prototype.created = function (_, myView) {
                    this.view = myView;
                };
                UxIcon.prototype.bind = function () {
                    if (this.size) {
                        this.theme.size = this.size;
                    }
                    if (this.theme) {
                        this.styleEngine.applyTheme(this, this.theme);
                    }
                    if (this.icon) {
                        this.changeIcon(this.icon);
                    }
                };
                UxIcon.prototype.themeChanged = function (newValue) {
                    this.styleEngine.applyTheme(this, newValue);
                };
                UxIcon.prototype.iconChanged = function (newValue) {
                    this.changeIcon(newValue);
                };
                UxIcon.prototype.changeIcon = function (icon) {
                    var iconSet = ux_icon_map_1.default.Map.find(function (set) { return set.name === icon; });
                    if (iconSet) {
                        // todo: add logic to switch set being used based on design language
                        // after adding icon sets for said languages such as ios
                        this.element.innerHTML = iconSet.material;
                    }
                    else {
                        this.logger.error('ux-icon: no matching icon found', this.element);
                    }
                };
                __decorate([
                    aurelia_templating_1.bindable
                ], UxIcon.prototype, "size", void 0);
                __decorate([
                    aurelia_templating_1.bindable
                ], UxIcon.prototype, "theme", void 0);
                __decorate([
                    aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
                ], UxIcon.prototype, "icon", void 0);
                UxIcon = __decorate([
                    aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine, aurelia_logging_1.Logger),
                    aurelia_templating_1.customElement('ux-icon'),
                    aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
                ], UxIcon);
                return UxIcon;
            }());
            exports_1("UxIcon", UxIcon);
        }
    };
});
