import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { Moment } from 'moment';
export declare class UxYearList implements Themable {
    element: Element;
    resources: ViewResources;
    private styleEngine;
    theme: null;
    view: View;
    minDate: Moment;
    maxDate: Moment;
    value: Moment;
    private today;
    constructor(element: Element, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    attached(): void;
    themeChanged(newValue: any): void;
    selectYear(year: number): void;
    readonly yearList: number[];
    private scrollToActive();
}
