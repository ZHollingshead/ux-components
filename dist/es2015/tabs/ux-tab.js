var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject, customElement, bindable, bindingMode, processAttributes, ViewResources } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';
import { StyleEngine } from 'aurelia-ux';
import { processDesignAttributes } from 'aurelia-ux';
let UxTab = class UxTab {
    constructor(element, resources, styleEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.selected = false;
        this.disabled = false;
        this.text = null;
        this.icon = null;
        this.theme = null;
    }
    created(_, myView) {
        this.view = myView;
    }
    bind() {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
    }
    themeChanged(newValue) {
        this.styleEngine.applyTheme(this, newValue);
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], UxTab.prototype, "selected", void 0);
__decorate([
    bindable
], UxTab.prototype, "disabled", void 0);
__decorate([
    bindable
], UxTab.prototype, "text", void 0);
__decorate([
    bindable
], UxTab.prototype, "icon", void 0);
__decorate([
    bindable
], UxTab.prototype, "theme", void 0);
UxTab = __decorate([
    inject(DOM.Element, ViewResources, StyleEngine),
    customElement('ux-tab'),
    processAttributes(processDesignAttributes)
], UxTab);
export { UxTab };
