var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-ux", "aurelia-ux", "aurelia-dependency-injection", "moment"], function (require, exports, aurelia_templating_1, aurelia_ux_1, aurelia_ux_2, aurelia_dependency_injection_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxPickerDialog = /** @class */ (function () {
        function UxPickerDialog(resources, styleEngine) {
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.type = 'datetime';
            this.display = 'month';
        }
        UxPickerDialog.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxPickerDialog.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.value != null) {
                this.selectedDate = moment(this.value);
            }
            else {
                this.selectedDate = this.initialDate;
                if (this.minDate != null && this.selectedDate.isBefore(this.minDate)) {
                    this.selectedDate = moment(this.minDate).clone();
                }
                if (this.maxDate != null && this.selectedDate.isBefore(this.maxDate)) {
                    this.selectedDate = moment(this.minDate).clone();
                }
                if (this.minTime != null) {
                    if (this.selectedDate.hour() < this.minTime.hour()) {
                        this.selectedDate.hour(this.minTime.hour());
                    }
                    if (this.selectedDate.minute() < this.minTime.minute()) {
                        this.selectedDate.minute(this.minTime.minute());
                    }
                }
                if (this.maxTime != null) {
                    if (this.selectedDate.hour() > this.maxTime.hour()) {
                        this.selectedDate.hour(this.maxTime.hour());
                    }
                    if (this.selectedDate.minute() > this.maxTime.minute()) {
                        this.selectedDate.minute(this.maxTime.minute());
                    }
                }
            }
        };
        UxPickerDialog.prototype.valueChanged = function (newDate) {
            this.selectedDate = moment(newDate);
        };
        UxPickerDialog.prototype.selectDate = function () {
            if (this.selectedDate != null) {
                this.value = this.selectedDate.toDate();
            }
        };
        UxPickerDialog.prototype.changeView = function (view) {
            this.display = view;
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "theme", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "type", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "display", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "weekdays", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "config", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "initialDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "minTime", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "maxTime", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "minDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "maxDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "value", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxPickerDialog.prototype, "closeDialog", void 0);
        UxPickerDialog = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
            aurelia_templating_1.customElement('ux-picker-dialog'),
            aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
        ], UxPickerDialog);
        return UxPickerDialog;
    }());
    exports.UxPickerDialog = UxPickerDialog;
});
