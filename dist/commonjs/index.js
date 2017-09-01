"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var ux_button_theme_1 = require("./button/ux-button-theme");
exports.UxButtonTheme = ux_button_theme_1.UxButtonTheme;
var ux_input_theme_1 = require("./input/ux-input-theme");
exports.UxInputTheme = ux_input_theme_1.UxInputTheme;
var ux_input_info_theme_1 = require("./input-info/ux-input-info-theme");
exports.UxInputInfoTheme = ux_input_info_theme_1.UxInputInfoTheme;
var ux_textarea_theme_1 = require("./textarea/ux-textarea-theme");
exports.UxTextareaTheme = ux_textarea_theme_1.UxTextareaTheme;
var ux_form_theme_1 = require("./form/ux-form-theme");
exports.UxFormTheme = ux_form_theme_1.UxFormTheme;
var ux_field_theme_1 = require("./form/ux-field-theme");
exports.UxFieldTheme = ux_field_theme_1.UxFieldTheme;
var ux_chip_input_theme_1 = require("./chip-input/ux-chip-input-theme");
exports.UxChipInputTheme = ux_chip_input_theme_1.UxChipInputTheme;
var ux_tag_theme_1 = require("./chip-input/ux-tag-theme");
exports.UxTagTheme = ux_tag_theme_1.UxTagTheme;
var ux_chip_theme_1 = require("./chip-input/ux-chip-theme");
exports.UxChipTheme = ux_chip_theme_1.UxChipTheme;
var ux_checkbox_theme_1 = require("./checkbox/ux-checkbox-theme");
exports.UxCheckboxTheme = ux_checkbox_theme_1.UxCheckboxTheme;
var ux_icon_theme_1 = require("./icons/ux-icon-theme");
exports.UxIconTheme = ux_icon_theme_1.UxIconTheme;
var ux_list_theme_1 = require("./list/ux-list-theme");
exports.UxListTheme = ux_list_theme_1.UxListTheme;
var ux_list_item_theme_1 = require("./list/ux-list-item-theme");
exports.UxListItemTheme = ux_list_item_theme_1.UxListItemTheme;
var ux_tab_theme_1 = require("./tabs/ux-tab-theme");
exports.UxTabTheme = ux_tab_theme_1.UxTabTheme;
var ux_tabs_theme_1 = require("./tabs/ux-tabs-theme");
exports.UxTabsTheme = ux_tabs_theme_1.UxTabsTheme;
var ux_calendar_theme_1 = require("./datepicker/ux-calendar-theme");
exports.UxCalendarTheme = ux_calendar_theme_1.UxCalendarTheme;
var ux_datepicker_theme_1 = require("./datepicker/ux-datepicker-theme");
exports.UxDatepickerTheme = ux_datepicker_theme_1.UxDatepickerTheme;
var ux_picker_dialog_theme_1 = require("./datepicker/ux-picker-dialog-theme");
exports.UxPickerDialogTheme = ux_picker_dialog_theme_1.UxPickerDialogTheme;
var ux_time_selector_theme_1 = require("./datepicker/ux-time-selector-theme");
exports.UxTimeSelectorTheme = ux_time_selector_theme_1.UxTimeSelectorTheme;
var ux_year_list_theme_1 = require("./datepicker/ux-year-list-theme");
exports.UxYearListTheme = ux_year_list_theme_1.UxYearListTheme;
var ux_button_1 = require("./button/ux-button");
exports.UxButton = ux_button_1.UxButton;
var ux_input_1 = require("./input/ux-input");
exports.UxInput = ux_input_1.UxInput;
var ux_input_info_1 = require("./input-info/ux-input-info");
exports.UxInputInfo = ux_input_info_1.UxInputInfo;
var ux_textarea_1 = require("./textarea/ux-textarea");
exports.UxTextarea = ux_textarea_1.UxTextarea;
var ux_form_1 = require("./form/ux-form");
exports.UxForm = ux_form_1.UxForm;
var ux_field_1 = require("./form/ux-field");
exports.UxField = ux_field_1.UxField;
var ux_chip_input_1 = require("./chip-input/ux-chip-input");
exports.UxChipInput = ux_chip_input_1.UxChipInput;
var ux_tag_1 = require("./chip-input/ux-tag");
exports.UxTag = ux_tag_1.UxTag;
var ux_chip_1 = require("./chip-input/ux-chip");
exports.UxChip = ux_chip_1.UxChip;
var ux_checkbox_1 = require("./checkbox/ux-checkbox");
exports.UxCheckbox = ux_checkbox_1.UxCheckbox;
var ux_icon_1 = require("./icons/ux-icon");
exports.UxIcon = ux_icon_1.UxIcon;
var ux_submit_attribute_1 = require("./form/ux-submit-attribute");
exports.UxSubmitCustomAttribute = ux_submit_attribute_1.UxSubmitCustomAttribute;
var ux_list_1 = require("./list/ux-list");
exports.UxList = ux_list_1.UxList;
var ux_list_item_1 = require("./list/ux-list-item");
exports.UxListItem = ux_list_item_1.UxListItem;
var ux_tab_1 = require("./tabs/ux-tab");
exports.UxTab = ux_tab_1.UxTab;
var ux_tabs_1 = require("./tabs/ux-tabs");
exports.UxTabs = ux_tabs_1.UxTabs;
var ux_calendar_1 = require("./datepicker/ux-calendar");
exports.UxCalendar = ux_calendar_1.UxCalendar;
var ux_datepicker_1 = require("./datepicker/ux-datepicker");
exports.UxDatepicker = ux_datepicker_1.UxDatepicker;
var ux_picker_dialog_1 = require("./datepicker/ux-picker-dialog");
exports.UxPickerDialog = ux_picker_dialog_1.UxPickerDialog;
var ux_time_selector_1 = require("./datepicker/ux-time-selector");
exports.UxTimeSelector = ux_time_selector_1.UxTimeSelector;
var ux_year_list_1 = require("./datepicker/ux-year-list");
exports.UxYearList = ux_year_list_1.UxYearList;
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./button/ux-button'),
        aurelia_framework_1.PLATFORM.moduleName('./input/ux-input'),
        aurelia_framework_1.PLATFORM.moduleName('./input-info/ux-input-info'),
        aurelia_framework_1.PLATFORM.moduleName('./textarea/ux-textarea'),
        aurelia_framework_1.PLATFORM.moduleName('./form/ux-form'),
        aurelia_framework_1.PLATFORM.moduleName('./form/ux-field'),
        aurelia_framework_1.PLATFORM.moduleName('./form/ux-submit-attribute'),
        aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-chip-input'),
        aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-chip'),
        aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-tag'),
        aurelia_framework_1.PLATFORM.moduleName('./checkbox/ux-checkbox'),
        aurelia_framework_1.PLATFORM.moduleName('./icons/ux-icon'),
        aurelia_framework_1.PLATFORM.moduleName('./list/ux-list'),
        aurelia_framework_1.PLATFORM.moduleName('./list/ux-list-item'),
        aurelia_framework_1.PLATFORM.moduleName('./tabs/ux-tab'),
        aurelia_framework_1.PLATFORM.moduleName('./tabs/ux-tabs'),
        aurelia_framework_1.PLATFORM.moduleName('./datepicker/ux-calendar'),
        aurelia_framework_1.PLATFORM.moduleName('./datepicker/ux-datepicker'),
        aurelia_framework_1.PLATFORM.moduleName('./datepicker/ux-picker-dialog'),
        aurelia_framework_1.PLATFORM.moduleName('./datepicker/ux-time-selector'),
        aurelia_framework_1.PLATFORM.moduleName('./datepicker/ux-year-list')
    ]);
}
exports.configure = configure;
