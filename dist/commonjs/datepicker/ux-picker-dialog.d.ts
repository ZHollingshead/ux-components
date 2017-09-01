import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { Moment } from 'moment';
import { DatepickerSettings } from './resources/datepicker-settings';
export declare class UxPickerDialog implements Themable {
    resources: ViewResources;
    private styleEngine;
    theme: null;
    type: string;
    display: string;
    weekdays: any;
    config: DatepickerSettings;
    initialDate: any;
    minTime: Moment;
    maxTime: Moment;
    minDate: Moment;
    maxDate: Moment;
    value: Date | null;
    closeDialog: () => {};
    view: View;
    private selectedDate;
    constructor(resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    valueChanged(newDate: Date): void;
    selectDate(): void;
    changeView(view: string): void;
}
