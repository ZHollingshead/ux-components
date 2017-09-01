System.register(["./auto-selection-strategy", "./selectables-observer"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var auto_selection_strategy_1, selectables_observer_1, SelectionManager;
    return {
        setters: [
            function (auto_selection_strategy_1_1) {
                auto_selection_strategy_1 = auto_selection_strategy_1_1;
            },
            function (selectables_observer_1_1) {
                selectables_observer_1 = selectables_observer_1_1;
            }
        ],
        execute: function () {
            SelectionManager = /** @class */ (function () {
                function SelectionManager(bindingEngine, selectedTabChanged) {
                    var _this = this;
                    this.bindingEngine = bindingEngine;
                    this.selectedTabChanged = selectedTabChanged;
                    this.selectedTab = null;
                    this.selectedIndex = -1;
                    this.selectedTabDisabledDisposable = null;
                    this.isUpdatingSelected = false;
                    this.tabsSelectionObserver = new selectables_observer_1.SelectablesObserver(this.bindingEngine, function (tab) { return _this.tabSelectedChanged(tab); });
                    this.autoSelectionStrategy = auto_selection_strategy_1.autoSelectionStrategies.first;
                }
                SelectionManager.prototype.setTabs = function (tabs) {
                    var _this = this;
                    this.tabs = tabs;
                    this.tabsSelectionObserver.update(this.tabs);
                    this.tabs.filter(function (t) { return t.selected && t.disabled; }).forEach(function (t) { _this.setSelected(t, false); });
                    if (!this.selectedTab || !this.tabs.includes(this.selectedTab)) {
                        var selected = this.tabs.filter(function (t) { return t.selected; });
                        while (selected.length > 1) {
                            this.setSelected(selected.shift(), false);
                        }
                        if (selected.length === 1) {
                            this.select(this.tabs.indexOf(selected[0]));
                        }
                        else {
                            this.autoSelect();
                        }
                    }
                    else {
                        var newSelected = this.tabs.filter(function (t) { return t.selected && t !== _this.selectedTab; });
                        while (newSelected.length > 1) {
                            this.setSelected(newSelected.shift(), false);
                        }
                        if (newSelected.length === 1) {
                            this.select(this.tabs.indexOf(newSelected[0]));
                        }
                    }
                };
                SelectionManager.prototype.setSelected = function (tab, value) {
                    this.isUpdatingSelected = true;
                    tab.selected = value;
                    this.isUpdatingSelected = false;
                };
                SelectionManager.prototype.selectedTabDisabledChanged = function () {
                    if (this.selectedTab && this.selectedTab.disabled) {
                        this.autoSelect();
                    }
                };
                SelectionManager.prototype.tabSelectedChanged = function (tab) {
                    if (this.isUpdatingSelected) {
                        return;
                    }
                    if (tab === this.selectedTab && !tab.selected) {
                        this.autoSelect(auto_selection_strategy_1.autoSelectionStrategies.first);
                    }
                    else if (tab !== this.selectedTab && tab.selected) {
                        if (!this.trySelect(tab)) {
                            tab.selected = false;
                        }
                    }
                };
                SelectionManager.prototype.autoSelect = function (strategy) {
                    var indexOfTabToSelect = (strategy || this.autoSelectionStrategy)(this.tabs, this.selectedIndex);
                    this.select(indexOfTabToSelect);
                };
                SelectionManager.prototype.trySelect = function (tab) {
                    if (tab.disabled) {
                        return false;
                    }
                    if (this.selectedTab === tab) {
                        return true;
                    }
                    var index = this.tabs.indexOf(tab);
                    if (index < 0) {
                        return false;
                    }
                    this.select(index);
                    return true;
                };
                SelectionManager.prototype.unselect = function () {
                    if (this.selectedTab) {
                        this.setSelected(this.selectedTab, false);
                        this.selectedTab = null;
                        this.selectedIndex = -1;
                        if (this.selectedTabDisabledDisposable) {
                            this.selectedTabDisabledDisposable.dispose();
                            this.selectedTabDisabledDisposable = null;
                        }
                    }
                };
                SelectionManager.prototype.select = function (index) {
                    var _this = this;
                    var oldTab = this.selectedTab;
                    this.unselect();
                    var tab = null;
                    if (index >= 0 && index < this.tabs.length) {
                        tab = this.tabs[index];
                        this.selectedTab = tab;
                        this.selectedIndex = index;
                        this.selectedTabDisabledDisposable = this.bindingEngine
                            .propertyObserver(tab, 'disabled')
                            .subscribe(function () { return _this.selectedTabDisabledChanged(); });
                        this.setSelected(tab, true);
                    }
                    if (this.selectedTabChanged && (oldTab || tab) && (oldTab !== tab)) {
                        this.selectedTabChanged(oldTab, tab);
                    }
                };
                SelectionManager.prototype.dispose = function () {
                    this.unselect();
                    this.tabsSelectionObserver.clear();
                };
                return SelectionManager;
            }());
            exports_1("SelectionManager", SelectionManager);
        }
    };
});
