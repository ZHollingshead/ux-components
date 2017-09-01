import { ViewResources, View } from 'aurelia-framework';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
export declare class UxTab implements Themable {
    readonly element: Element;
    readonly resources: ViewResources;
    private readonly styleEngine;
    selected: boolean;
    disabled: boolean;
    text: string | null;
    icon: string | null;
    theme: null;
    view: View;
    constructor(element: Element, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
}
