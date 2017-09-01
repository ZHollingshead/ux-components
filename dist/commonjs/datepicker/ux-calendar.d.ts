import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { Moment } from 'moment';
import { DatepickerSettings } from './resources/datepicker-settings';
export declare class UxCalendar implements Themable {
    resources: ViewResources;
    private styleEngine;
    theme: null;
    weekdays: string[];
    minDate: Moment;
    maxDate: Moment;
    value: Moment;
    config: DatepickerSettings;
    view: View;
    private calendarRows;
    private displayMonth;
    constructor(resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    previousMonth(): void;
    nextMonth(): void;
    changeCalendarSelection(newDate: Moment): void;
    displayMonthChanged(newDate: Moment): void;
    private isValidDate(date);
}
