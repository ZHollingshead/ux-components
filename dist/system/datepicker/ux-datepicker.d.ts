import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { DatepickerSettings } from './resources/datepicker-settings';
export declare class UxDatepicker implements Themable {
    resources: ViewResources;
    private styleEngine;
    theme: null;
    type: string;
    initialDate: any;
    minTime: any;
    maxTime: any;
    minDate: any;
    maxDate: any;
    placeholder: any;
    config: DatepickerSettings;
    formatters: {
        date: string;
        time: string;
        datetime: string;
    };
    parsers: {
        time: string[];
    };
    value: any;
    view: View;
    private textboxValue;
    private showDialog;
    private display;
    constructor(resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
    toggleDialog(display: string): void;
    valueChanged(newValue: Date): void;
    minDateChanged(newValue: any): void;
    maxDateChanged(newValue: any): void;
    minTimeChanged(newValue: any): void;
    maxTimeChanged(newValue: any): void;
    changeTextboxValue(): void;
}
