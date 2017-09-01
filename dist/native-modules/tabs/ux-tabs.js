var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable, processAttributes, children, ViewResources, BindingEngine } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from 'aurelia-ux';
import { processDesignAttributes } from 'aurelia-ux';
import { autoSelectionStrategies } from './selection/auto-selection-strategy';
import { SelectionManager } from './selection/selection-manager';
import { SelectionAnimator } from './selection/animator';
var UxTabs = /** @class */ (function () {
    function UxTabs(element, resources, styleEngine, bindingEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.bindingEngine = bindingEngine;
        this.autoSelectUsing = autoSelectionStrategies.nearest;
        this.theme = null;
        this.animator = new SelectionAnimator(this.element);
    }
    UxTabs.prototype.created = function (_, myView) {
        this.view = myView;
    };
    UxTabs.prototype.bind = function () {
        var _this = this;
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
        this.selection = new SelectionManager(this.bindingEngine, function (oldTab, newTab) {
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
            if (this.autoSelectUsing in autoSelectionStrategies) {
                this.selection.autoSelectionStrategy = autoSelectionStrategies[this.autoSelectUsing];
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
        bindable
    ], UxTabs.prototype, "autoSelectUsing", void 0);
    __decorate([
        bindable
    ], UxTabs.prototype, "theme", void 0);
    __decorate([
        children('ux-tab')
    ], UxTabs.prototype, "tabs", void 0);
    UxTabs = __decorate([
        inject(DOM.Element, ViewResources, StyleEngine, BindingEngine),
        customElement('ux-tabs'),
        processAttributes(processDesignAttributes)
    ], UxTabs);
    return UxTabs;
}());
export { UxTabs };
