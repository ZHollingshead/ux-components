var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable, ViewResources, processAttributes } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from 'aurelia-ux';
import { processDesignAttributes } from 'aurelia-ux';
import * as moment from 'moment';
import { DatetimeUtility } from './resources/datetime-utility';
var UxDatepicker = /** @class */ (function () {
    function UxDatepicker(resources, styleEngine) {
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.theme = null;
        this.type = 'datetime';
        this.formatters = {
            date: 'L',
            time: 'LT',
            datetime: 'L LT'
        };
        this.parsers = {
            time: ['h:m a', 'H:m']
        };
        this.showDialog = false;
        this.display = 'month';
    }
    UxDatepicker.prototype.created = function (_, myView) {
        this.view = myView;
    };
    UxDatepicker.prototype.bind = function () {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
        if (this.initialDate != null) {
            var dateParse = moment(this.initialDate);
            if (dateParse.isValid()) {
                this.initialDate = dateParse;
            }
        }
        else {
            this.initialDate = moment();
        }
        if (this.minDate != null) {
            var dateParse = moment(this.minDate);
            if (dateParse.isValid()) {
                this.minDate = dateParse;
            }
            else {
                this.minDate = null;
            }
        }
        if (this.maxDate != null) {
            var dateParse = moment(this.maxDate);
            if (dateParse.isValid()) {
                this.maxDate = dateParse;
            }
            else {
                this.maxDate = null;
            }
        }
        if (this.minTime != null) {
            var dateParse = moment(this.minTime, this.parsers.time);
            if (dateParse.isValid()) {
                this.minTime = dateParse;
            }
            else {
                this.minTime = null;
            }
        }
        if (this.maxTime != null) {
            var dateParse = moment(this.maxTime, this.parsers.time);
            if (dateParse.isValid()) {
                this.maxTime = dateParse;
            }
            else {
                this.maxTime = null;
            }
        }
    };
    UxDatepicker.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(this, newValue);
    };
    UxDatepicker.prototype.toggleDialog = function (display) {
        if (this.showDialog) {
            this.showDialog = false;
            return;
        }
        this.display = display;
        this.showDialog = true;
    };
    UxDatepicker.prototype.valueChanged = function (newValue) {
        if (newValue == null) {
            return;
        }
        if (this.type.toLowerCase() === 'datetime') {
            this.textboxValue = moment(newValue).format(this.formatters.datetime);
        }
        if (this.type.toLowerCase() === 'date') {
            this.textboxValue = moment(newValue).format(this.formatters.date);
        }
        if (this.type.toLowerCase() === 'time') {
            this.textboxValue = moment(newValue).format(this.formatters.time);
        }
        this.showDialog = false;
    };
    UxDatepicker.prototype.minDateChanged = function (newValue) {
        if (newValue != null && newValue instanceof moment === false) {
            var dateParse = moment(newValue);
            if (dateParse.isValid()) {
                this.minDate = dateParse;
            }
            else {
                this.minDate = null;
            }
        }
    };
    UxDatepicker.prototype.maxDateChanged = function (newValue) {
        if (newValue != null && newValue instanceof moment === false) {
            var dateParse = moment(newValue);
            if (dateParse.isValid()) {
                this.maxDate = dateParse;
            }
            else {
                this.maxDate = null;
            }
        }
    };
    UxDatepicker.prototype.minTimeChanged = function (newValue) {
        if (newValue != null && newValue instanceof moment === false) {
            var dateParse = moment(newValue, this.parsers.time);
            if (dateParse.isValid()) {
                this.minTime = dateParse;
            }
            else {
                this.minTime = null;
            }
        }
    };
    UxDatepicker.prototype.maxTimeChanged = function (newValue) {
        if (newValue != null && newValue instanceof moment === false) {
            var dateParse = moment(newValue, this.parsers.time);
            if (dateParse.isValid()) {
                this.maxTime = dateParse;
            }
            else {
                this.maxTime = null;
            }
        }
    };
    UxDatepicker.prototype.changeTextboxValue = function () {
        if (!this.textboxValue) {
            this.value = null;
            return;
        }
        var parseValue;
        if (this.type === 'time') {
            parseValue = moment(this.textboxValue, this.parsers.time);
        }
        else {
            parseValue = moment(this.textboxValue);
        }
        if (parseValue.isValid() &&
            DatetimeUtility.dateOutOfRange(parseValue, this.minDate, this.maxDate, this.config) === false) {
            this.value = parseValue.toDate();
        }
        else {
            this.value = null;
            this.textboxValue = '';
        }
    };
    __decorate([
        bindable
    ], UxDatepicker.prototype, "theme", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "type", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "initialDate", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "minTime", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "maxTime", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "minDate", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "maxDate", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "placeholder", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "config", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "formatters", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "parsers", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay })
    ], UxDatepicker.prototype, "value", void 0);
    UxDatepicker = __decorate([
        inject(ViewResources, StyleEngine),
        customElement('ux-datepicker'),
        processAttributes(processDesignAttributes)
    ], UxDatepicker);
    return UxDatepicker;
}());
export { UxDatepicker };
