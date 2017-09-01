"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_pal_1 = require("aurelia-pal");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_ux_1 = require("aurelia-ux");
var aurelia_ux_2 = require("aurelia-ux");
var auto_selection_strategy_1 = require("./selection/auto-selection-strategy");
var selection_manager_1 = require("./selection/selection-manager");
var animator_1 = require("./selection/animator");
var UxTabs = /** @class */ (function () {
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
exports.UxTabs = UxTabs;
