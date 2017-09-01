import { ViewResources, View, BindingEngine } from 'aurelia-framework';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { UxTab } from './ux-tab';
export declare class UxTabs implements Themable {
    private readonly element;
    readonly resources: ViewResources;
    private readonly styleEngine;
    private readonly bindingEngine;
    private autoSelectUsing;
    theme: null;
    tabs: UxTab[];
    view: View;
    private selection;
    private animator;
    constructor(element: Element, resources: ViewResources, styleEngine: StyleEngine, bindingEngine: BindingEngine);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
    autoSelectUsingChanged(): void;
    tabsChanged(): void;
    unbind(): void;
}
