System.register(["aurelia-framework", "./button/ux-button-theme", "./input/ux-input-theme", "./input-info/ux-input-info-theme", "./textarea/ux-textarea-theme", "./form/ux-form-theme", "./form/ux-field-theme", "./chip-input/ux-chip-input-theme", "./chip-input/ux-tag-theme", "./chip-input/ux-chip-theme", "./checkbox/ux-checkbox-theme", "./icons/ux-icon-theme", "./list/ux-list-theme", "./list/ux-list-item-theme", "./tabs/ux-tab-theme", "./tabs/ux-tabs-theme", "./datepicker/ux-calendar-theme", "./datepicker/ux-datepicker-theme", "./datepicker/ux-picker-dialog-theme", "./datepicker/ux-time-selector-theme", "./datepicker/ux-year-list-theme", "./button/ux-button", "./input/ux-input", "./input-info/ux-input-info", "./textarea/ux-textarea", "./form/ux-form", "./form/ux-field", "./chip-input/ux-chip-input", "./chip-input/ux-tag", "./chip-input/ux-chip", "./checkbox/ux-checkbox", "./icons/ux-icon", "./form/ux-submit-attribute", "./list/ux-list", "./list/ux-list-item", "./tabs/ux-tab", "./tabs/ux-tabs", "./datepicker/ux-calendar", "./datepicker/ux-datepicker", "./datepicker/ux-picker-dialog", "./datepicker/ux-time-selector", "./datepicker/ux-year-list"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (ux_button_theme_1_1) {
                exports_1({
                    "UxButtonTheme": ux_button_theme_1_1["UxButtonTheme"]
                });
            },
            function (ux_input_theme_1_1) {
                exports_1({
                    "UxInputTheme": ux_input_theme_1_1["UxInputTheme"]
                });
            },
            function (ux_input_info_theme_1_1) {
                exports_1({
                    "UxInputInfoTheme": ux_input_info_theme_1_1["UxInputInfoTheme"]
                });
            },
            function (ux_textarea_theme_1_1) {
                exports_1({
                    "UxTextareaTheme": ux_textarea_theme_1_1["UxTextareaTheme"]
                });
            },
            function (ux_form_theme_1_1) {
                exports_1({
                    "UxFormTheme": ux_form_theme_1_1["UxFormTheme"]
                });
            },
            function (ux_field_theme_1_1) {
                exports_1({
                    "UxFieldTheme": ux_field_theme_1_1["UxFieldTheme"]
                });
            },
            function (ux_chip_input_theme_1_1) {
                exports_1({
                    "UxChipInputTheme": ux_chip_input_theme_1_1["UxChipInputTheme"]
                });
            },
            function (ux_tag_theme_1_1) {
                exports_1({
                    "UxTagTheme": ux_tag_theme_1_1["UxTagTheme"]
                });
            },
            function (ux_chip_theme_1_1) {
                exports_1({
                    "UxChipTheme": ux_chip_theme_1_1["UxChipTheme"]
                });
            },
            function (ux_checkbox_theme_1_1) {
                exports_1({
                    "UxCheckboxTheme": ux_checkbox_theme_1_1["UxCheckboxTheme"]
                });
            },
            function (ux_icon_theme_1_1) {
                exports_1({
                    "UxIconTheme": ux_icon_theme_1_1["UxIconTheme"]
                });
            },
            function (ux_list_theme_1_1) {
                exports_1({
                    "UxListTheme": ux_list_theme_1_1["UxListTheme"]
                });
            },
            function (ux_list_item_theme_1_1) {
                exports_1({
                    "UxListItemTheme": ux_list_item_theme_1_1["UxListItemTheme"]
                });
            },
            function (ux_tab_theme_1_1) {
                exports_1({
                    "UxTabTheme": ux_tab_theme_1_1["UxTabTheme"]
                });
            },
            function (ux_tabs_theme_1_1) {
                exports_1({
                    "UxTabsTheme": ux_tabs_theme_1_1["UxTabsTheme"]
                });
            },
            function (ux_calendar_theme_1_1) {
                exports_1({
                    "UxCalendarTheme": ux_calendar_theme_1_1["UxCalendarTheme"]
                });
            },
            function (ux_datepicker_theme_1_1) {
                exports_1({
                    "UxDatepickerTheme": ux_datepicker_theme_1_1["UxDatepickerTheme"]
                });
            },
            function (ux_picker_dialog_theme_1_1) {
                exports_1({
                    "UxPickerDialogTheme": ux_picker_dialog_theme_1_1["UxPickerDialogTheme"]
                });
            },
            function (ux_time_selector_theme_1_1) {
                exports_1({
                    "UxTimeSelectorTheme": ux_time_selector_theme_1_1["UxTimeSelectorTheme"]
                });
            },
            function (ux_year_list_theme_1_1) {
                exports_1({
                    "UxYearListTheme": ux_year_list_theme_1_1["UxYearListTheme"]
                });
            },
            function (ux_button_1_1) {
                exports_1({
                    "UxButton": ux_button_1_1["UxButton"]
                });
            },
            function (ux_input_1_1) {
                exports_1({
                    "UxInput": ux_input_1_1["UxInput"]
                });
            },
            function (ux_input_info_1_1) {
                exports_1({
                    "UxInputInfo": ux_input_info_1_1["UxInputInfo"]
                });
            },
            function (ux_textarea_1_1) {
                exports_1({
                    "UxTextarea": ux_textarea_1_1["UxTextarea"]
                });
            },
            function (ux_form_1_1) {
                exports_1({
                    "UxForm": ux_form_1_1["UxForm"]
                });
            },
            function (ux_field_1_1) {
                exports_1({
                    "UxField": ux_field_1_1["UxField"]
                });
            },
            function (ux_chip_input_1_1) {
                exports_1({
                    "UxChipInput": ux_chip_input_1_1["UxChipInput"]
                });
            },
            function (ux_tag_1_1) {
                exports_1({
                    "UxTag": ux_tag_1_1["UxTag"]
                });
            },
            function (ux_chip_1_1) {
                exports_1({
                    "UxChip": ux_chip_1_1["UxChip"]
                });
            },
            function (ux_checkbox_1_1) {
                exports_1({
                    "UxCheckbox": ux_checkbox_1_1["UxCheckbox"]
                });
            },
            function (ux_icon_1_1) {
                exports_1({
                    "UxIcon": ux_icon_1_1["UxIcon"]
                });
            },
            function (ux_submit_attribute_1_1) {
                exports_1({
                    "UxSubmitCustomAttribute": ux_submit_attribute_1_1["UxSubmitCustomAttribute"]
                });
            },
            function (ux_list_1_1) {
                exports_1({
                    "UxList": ux_list_1_1["UxList"]
                });
            },
            function (ux_list_item_1_1) {
                exports_1({
                    "UxListItem": ux_list_item_1_1["UxListItem"]
                });
            },
            function (ux_tab_1_1) {
                exports_1({
                    "UxTab": ux_tab_1_1["UxTab"]
                });
            },
            function (ux_tabs_1_1) {
                exports_1({
                    "UxTabs": ux_tabs_1_1["UxTabs"]
                });
            },
            function (ux_calendar_1_1) {
                exports_1({
                    "UxCalendar": ux_calendar_1_1["UxCalendar"]
                });
            },
            function (ux_datepicker_1_1) {
                exports_1({
                    "UxDatepicker": ux_datepicker_1_1["UxDatepicker"]
                });
            },
            function (ux_picker_dialog_1_1) {
                exports_1({
                    "UxPickerDialog": ux_picker_dialog_1_1["UxPickerDialog"]
                });
            },
            function (ux_time_selector_1_1) {
                exports_1({
                    "UxTimeSelector": ux_time_selector_1_1["UxTimeSelector"]
                });
            },
            function (ux_year_list_1_1) {
                exports_1({
                    "UxYearList": ux_year_list_1_1["UxYearList"]
                });
            }
        ],
        execute: function () {
        }
    };
});
