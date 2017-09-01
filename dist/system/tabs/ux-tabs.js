System.register(["aurelia-framework", "aurelia-pal", "aurelia-dependency-injection", "aurelia-ux", "./selection/auto-selection-strategy", "./selection/selection-manager", "./selection/animator"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_pal_1, aurelia_dependency_injection_1, aurelia_ux_1, aurelia_ux_2, auto_selection_strategy_1, selection_manager_1, animator_1, UxTabs;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
                aurelia_ux_2 = aurelia_ux_1_1;
            },
            function (auto_selection_strategy_1_1) {
                auto_selection_strategy_1 = auto_selection_strategy_1_1;
            },
            function (selection_manager_1_1) {
                selection_manager_1 = selection_manager_1_1;
            },
            function (animator_1_1) {
                animator_1 = animator_1_1;
            }
        ],
        execute: function () {
            UxTabs = /** @class */ (function () {
                function UxTabs(element, resources, styleEngine, bindingEngine) {
                    this.element = element;
                    this.resources = resources;
                    this.styleEngine = styleEngine;
                    this.bindingEngine = bindingEngine;
                    this.autoSelectUsing = auto_selection_strategy_1.autoSelectionStrategies.nearest;
                    this.theme = null;
                    this.animator = new animator_1.SelectionAnimator(this.element);
                }
                UxTabs.prototype.created = function (_, myView) {
                    this.view = myView;
                };
                UxTabs.prototype.bind = function () {
                    var _this = this;
                    if (this.theme) {
                        this.styleEngine.applyTheme(this, this.theme);
                    }
                    this.selection = new selection_manager_1.SelectionManager(this.bindingEngine, function (oldTab, newTab) {
                        if (oldTab && newTab) {
                            _this.animator.transition(oldTab.element, newTab.element);
                        }
                    });
                    this.autoSelectUsingChanged();
                };
                UxTabs.prototype.themeChanged = function (newValue) {
                    this.styleEngine.applyTheme(this, newValue);
                };
                UxTabs.prototype.autoSelectUsingChanged = function () {
                    if (typeof this.autoSelectUsing === 'string') {
                        if (this.autoSelectUsing in auto_selection_strategy_1.autoSelectionStrategies) {
                            this.selection.autoSelectionStrategy = auto_selection_strategy_1.autoSelectionStrategies[this.autoSelectUsing];
                        }
                        // TODO else: log error?
                    }
                    else {
                        this.selection.autoSelectionStrategy = this.autoSelectUsing;
                    }
                };
                UxTabs.prototype.tabsChanged = function () {
                    this.selection.setTabs(this.tabs);
                };
                UxTabs.prototype.unbind = function () {
                    this.selection.dispose();
                };
                __decorate([
                    aurelia_framework_1.bindable
                ], UxTabs.prototype, "autoSelectUsing", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], UxTabs.prototype, "theme", void 0);
                __decorate([
                    aurelia_framework_1.children('ux-tab')
                ], UxTabs.prototype, "tabs", void 0);
                UxTabs = __decorate([
                    aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element, aurelia_framework_1.ViewResources, aurelia_ux_1.StyleEngine, aurelia_framework_1.BindingEngine),
                    aurelia_framework_1.customElement('ux-tabs'),
                    aurelia_framework_1.processAttributes(aurelia_ux_2.processDesignAttributes)
                ], UxTabs);
                return UxTabs;
            }());
            exports_1("UxTabs", UxTabs);
        }
    };
});
