import { ViewResources, View } from 'aurelia-templating';
import { Logger } from 'aurelia-logging';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { UxIconTheme } from './ux-icon-theme';
export declare class UxIcon implements Themable {
    private element;
    resources: ViewResources;
    private styleEngine;
    private logger;
    size: string;
    theme: UxIconTheme;
    icon: any;
    view: View;
    constructor(element: HTMLElement, resources: ViewResources, styleEngine: StyleEngine, logger: Logger);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
    iconChanged(newValue: any): void;
    private changeIcon(icon);
}
