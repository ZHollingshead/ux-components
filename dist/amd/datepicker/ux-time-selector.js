var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "aurelia-ux", "aurelia-ux", "aurelia-binding", "moment"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, aurelia_ux_1, aurelia_ux_2, aurelia_binding_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTimeSelector = /** @class */ (function () {
        function UxTimeSelector(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.selectedAmPm = 'am';
        }
        UxTimeSelector.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxTimeSelector.prototype.bind = function () {
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
        };
        UxTimeSelector.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxTimeSelector.prototype.changeAmPm = function (newValue) {
            var value = this.value.clone();
            if (newValue === 'am' && this.value.hour() >= 12) {
                value.subtract('hours', 12);
            }
            if (newValue === 'pm' && this.value.hour() < 12) {
                value.add('hours', 12);
            }
            if (this.isValidTime(value)) {
                this.value = value;
            }
        };
        Object.defineProperty(UxTimeSelector.prototype, "hoursBelow", {
            get: function () {
                var hours = new Array();
                var counter = 1;
                while (hours.length < 2) {
                    var currentHour = this.value.clone().subtract(counter, 'hour');
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UxTimeSelector.prototype, "hoursAbove", {
            get: function () {
                var hours = new Array();
                var counter = 1;
                while (hours.length < 2) {
                    var currentHour = this.value.clone().add(counter, 'hour');
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UxTimeSelector.prototype, "minutesBelow", {
            get: function () {
                var minutes = new Array();
                var counter = 1;
                while (minutes.length < 2) {
                    var currentMinute = this.value.clone().subtract(counter, 'minute');
                    if (currentMinute.minute() === 59) {
                        return minutes;
                    }
                    minutes.splice(0, 0, currentMinute);
                    counter++;
                }
                return minutes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UxTimeSelector.prototype, "minutesAbove", {
            get: function () {
                var minutes = new Array();
                var counter = 1;
                while (minutes.length < 2) {
                    var currentMinute = this.value.clone().add(counter, 'minute');
                    if (currentMinute.minute() === 0) {
                        return minutes;
                    }
                    minutes.push(currentMinute);
                    counter++;
                }
                return minutes;
            },
            enumerable: true,
            configurable: true
        });
        UxTimeSelector.prototype.selectHour = function (hour) {
            if (this.isValidTime(hour)) {
                this.value = hour;
            }
        };
        UxTimeSelector.prototype.selectMinute = function (minute) {
            if (this.isValidTime(minute)) {
                this.value = minute;
            }
        };
        UxTimeSelector.prototype.hourScroll = function (event) {
            var value;
            if (event.deltaY > 0) {
                value = this.value.clone().add(1, 'hour');
            }
            else {
                value = this.value.clone().subtract(1, 'hour');
            }
            if (this.isValidTime(value)) {
                this.value = value;
            }
        };
        UxTimeSelector.prototype.minuteScroll = function (event) {
            var value;
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
        };
        UxTimeSelector.prototype.isValidTime = function (value) {
            var minHour = 0;
            var maxHour = 23;
            var minMinute = 0;
            var maxMinute = 59;
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
            var blank = null;
            return value.isBetween(this.value.clone()
                .hour(minHour)
                .minute(minMinute), this.value.clone()
                .hour(maxHour)
                .minute(maxMinute), blank, '[]');
        };
        Object.defineProperty(UxTimeSelector.prototype, "hour12", {
            get: function () {
                if (moment().format('LT').match(/am|pm/i)) {
                    return true;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            aurelia_templating_1.bindable
        ], UxTimeSelector.prototype, "theme", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxTimeSelector.prototype, "minTime", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxTimeSelector.prototype, "maxTime", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxTimeSelector.prototype, "value", void 0);
        __decorate([
            aurelia_binding_1.observable
        ], UxTimeSelector.prototype, "selectedAmPm", void 0);
        __decorate([
            aurelia_binding_1.computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
        ], UxTimeSelector.prototype, "hoursBelow", null);
        __decorate([
            aurelia_binding_1.computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
        ], UxTimeSelector.prototype, "hoursAbove", null);
        __decorate([
            aurelia_binding_1.computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
        ], UxTimeSelector.prototype, "minutesBelow", null);
        __decorate([
            aurelia_binding_1.computedFrom('minTime', 'maxTime', 'value', 'selectedAmPm')
        ], UxTimeSelector.prototype, "minutesAbove", null);
        UxTimeSelector = __decorate([
            aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
            aurelia_templating_1.customElement('ux-time-selector'),
            aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
        ], UxTimeSelector);
        return UxTimeSelector;
    }());
    exports.UxTimeSelector = UxTimeSelector;
});
