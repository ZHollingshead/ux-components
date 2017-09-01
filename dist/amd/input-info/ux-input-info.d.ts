import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
export declare class UxInputInfo implements Themable {
    private element;
    resources: ViewResources;
    private styleEngine;
    target: Element;
    uxInputCounter: null;
    theme: null;
    inputElementModel: any;
    view: View;
    constructor(element: Element, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
    private findAndSetTarget(element);
}
