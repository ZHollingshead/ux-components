var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable, ViewResources, processAttributes } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from 'aurelia-ux';
import { processDesignAttributes } from 'aurelia-ux';
import { observable, computedFrom } from 'aurelia-binding';
import * as moment from 'moment';
let UxTimeSelector = class UxTimeSelector {
    constructor(element, resources, styleEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.theme = null;
        this.selectedAmPm = 'am';
    }
    created(_, myView) {
        this.view = myView;
    }
    bind() {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
        if (this.hour12 === true) {
            if (this.value.hour() > 12) {
                this.selectedAmPm = 'pm';
            }
            else {
                this.selectedAmPm = 'am';
            }
        }
    }
    themeChanged(newValue) {
        this.styleEngine.applyTheme(this, newValue);
    }
    changeAmPm(newValue) {
        const value = this.value.clone();
        if (newValue === 'am' && this.value.hour() >= 12) {
            value.subtract('hours', 12);
        }
        if (newValue === 'pm' && this.value.hour() < 12) {
            value.add('hours', 12);
        }
        if (this.isValidTime(value)) {
            this.value = value;
        }
    }
    get hoursBelow() {
        const hours = new Array();
        let counter = 1;
        while (hours.length < 2) {
            const currentHour = this.value.clone().subtract(counter, 'hour');
            if (this.hour12 && this.value.hour() >= 12 && currentHour.hour() === 11) {
                return hours;
            }
            else if (currentHour.hour() === 23) {
                return hours;
            }
            hours.splice(0, 0, currentHour);
            counter++;
        }
        return hours;
    }
    get hoursAbove() {
        const hours = new Array();
        let counter = 1;
        while (hours.length < 2) {
            const currentHour = this.value.clone().add(counter, 'hour');
            if (this.hour12 && this.value.hour() < 12 && currentHour.hour() === 12) {
                return hours;
            }
            else if (currentHour.hour() === 0) {
                return hours;
            }
            hours.push(currentHour);
            counter++;
        }
        return hours;
    }
    get minutesBelow() {
        const minutes = new Array();
        let counter = 1;
        while (minutes.length < 2) {
            const currentMinute = this.value.clone().subtract(counter, 'minute');
            if (currentMinute.minute() === 59) {
                return minutes;
            }
            minutes.splice(0, 0, currentMinute);
            counter++;
        }
        return minutes;
    }
    get minutesAbove() {
        const minutes = new Array();
        let counter = 1;
        while (minutes.length < 2) {
            const currentMinute = this.value.clone().add(counter, 'minute');
            if (currentMinute.minute() === 0) {
                return minutes;
            }
            minutes.push(currentMinute);
            counter++;
        }
        return minutes;
    }
    selectHour(hour) {
        if (this.isValidTime(hour)) {
            this.value = hour;
        }
    }
    selectMinute(minute) {
        if (this.isValidTime(minute)) {
            this.value = minute;
        }
    }
    hourScroll(event) {
        let value;
        if (event.deltaY > 0) {
            value = this.value.clone().add(1, 'hour');
        }
        else {
            value = this.value.clone().subtract(1, 'hour');
        }
        if (this.isValidTime(value)) {
            this.value = value;
        }
    }
    minuteScroll(event) {
        let value;
        if (event.deltaY > 0) {
            value = this.value.clone().add(1, 'minute');
        }
        else {
            value = this.value.clone().subtract(1, 'minute');
        }
        if (this.isValidTime(value) === false || this.value.isSame(value, 'hour') === false) {
            return;
        }
        this.value = value;
    }
    isValidTime(value) {
        let minHour = 0;
        let maxHour = 23;
        let minMinute = 0;
        let maxMinute = 59;
        if (this.hour12 === true) {
            maxHour = value.hour() < 12 ? 11 : 23;
            minHour = value.hour() < 12 ? 0 : 12;
        }
        if (this.maxTime != null && maxHour > this.maxTime.hour()) {
            maxHour = this.maxTime.hour();
        }
        if (this.minTime != null && minMinute < this.minTime.minute()) {
            minMinute = this.minTime.minute();
        }
        if (this.maxTime != null && maxMinute > this.maxTime.minute()) {
            maxMinute = this.maxTime.minute();
        }
        if (this.minTime != null && minHour < this.minTime.hour()) {
            minHour = this.minTime.hour();
        }
        // This gets rid of a typescript caused by passing null into a moment comparison
        const blank = null;
        return value.isBetween(this.value.clone()
            .hour(minHour)
            .minute(minMinute), this.value.clone()
            .hour(maxHour)
            .minute(maxMinute), blank, '[]');
    }
    get hour12() {
        if (moment().format('LT').match(/am|pm/i)) {
            return true;
        }
        else {
            return false;
        }
    }
};
__decorate([
    bindable
], UxTimeSelector.prototype, "theme", void 0);
__decorate([
    bindable
], UxTimeSelector.prototype, "minTime", void 0);
__decorate([
    bindable
], UxTimeSelector.prototype, "maxTime", void 0);
__decorate([
    bindable
], UxTimeSelector.prototype, "value", void 0);
__decorate([
    observable
], UxTimeSelector.prototype, "selectedAmPm", void 0);
__decorate([
    computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
], UxTimeSelector.prototype, "hoursBelow", null);
__decorate([
    computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
], UxTimeSelector.prototype, "hoursAbove", null);
__decorate([
    computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
], UxTimeSelector.prototype, "minutesBelow", null);
__decorate([
    computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
], UxTimeSelector.prototype, "minutesAbove", null);
UxTimeSelector = __decorate([
    inject(Element, ViewResources, StyleEngine),
    customElement('ux-time-selector'),
    processAttributes(processDesignAttributes)
], UxTimeSelector);
export { UxTimeSelector };
