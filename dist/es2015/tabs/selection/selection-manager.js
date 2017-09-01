import { autoSelectionStrategies } from './auto-selection-strategy';
import { SelectablesObserver } from './selectables-observer';
export class SelectionManager {
    constructor(bindingEngine, selectedTabChanged) {
        this.bindingEngine = bindingEngine;
        this.selectedTabChanged = selectedTabChanged;
        this.selectedTab = null;
        this.selectedIndex = -1;
        this.selectedTabDisabledDisposable = null;
        this.isUpdatingSelected = false;
        this.tabsSelectionObserver = new SelectablesObserver(this.bindingEngine, tab => this.tabSelectedChanged(tab));
        this.autoSelectionStrategy = autoSelectionStrategies.first;
    }
    setTabs(tabs) {
        this.tabs = tabs;
        this.tabsSelectionObserver.update(this.tabs);
        this.tabs.filter(t => t.selected && t.disabled).forEach(t => { this.setSelected(t, false); });
        if (!this.selectedTab || !this.tabs.includes(this.selectedTab)) {
            const selected = this.tabs.filter(t => t.selected);
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
            const newSelected = this.tabs.filter(t => t.selected && t !== this.selectedTab);
            while (newSelected.length > 1) {
                this.setSelected(newSelected.shift(), false);
            }
            if (newSelected.length === 1) {
                this.select(this.tabs.indexOf(newSelected[0]));
            }
        }
    }
    setSelected(tab, value) {
        this.isUpdatingSelected = true;
        tab.selected = value;
        this.isUpdatingSelected = false;
    }
    selectedTabDisabledChanged() {
        if (this.selectedTab && this.selectedTab.disabled) {
            this.autoSelect();
        }
    }
    tabSelectedChanged(tab) {
        if (this.isUpdatingSelected) {
            return;
        }
        if (tab === this.selectedTab && !tab.selected) {
            this.autoSelect(autoSelectionStrategies.first);
        }
        else if (tab !== this.selectedTab && tab.selected) {
            if (!this.trySelect(tab)) {
                tab.selected = false;
            }
        }
    }
    autoSelect(strategy) {
        const indexOfTabToSelect = (strategy || this.autoSelectionStrategy)(this.tabs, this.selectedIndex);
        this.select(indexOfTabToSelect);
    }
    trySelect(tab) {
        if (tab.disabled) {
            return false;
        }
        if (this.selectedTab === tab) {
            return true;
        }
        const index = this.tabs.indexOf(tab);
        if (index < 0) {
            return false;
        }
        this.select(index);
        return true;
    }
    unselect() {
        if (this.selectedTab) {
            this.setSelected(this.selectedTab, false);
            this.selectedTab = null;
            this.selectedIndex = -1;
            if (this.selectedTabDisabledDisposable) {
                this.selectedTabDisabledDisposable.dispose();
                this.selectedTabDisabledDisposable = null;
            }
        }
    }
    select(index) {
        const oldTab = this.selectedTab;
        this.unselect();
        let tab = null;
        if (index >= 0 && index < this.tabs.length) {
            tab = this.tabs[index];
            this.selectedTab = tab;
            this.selectedIndex = index;
            this.selectedTabDisabledDisposable = this.bindingEngine
                .propertyObserver(tab, 'disabled')
                .subscribe(() => this.selectedTabDisabledChanged());
            this.setSelected(tab, true);
        }
        if (this.selectedTabChanged && (oldTab || tab) && (oldTab !== tab)) {
            this.selectedTabChanged(oldTab, tab);
        }
    }
    dispose() {
        this.unselect();
        this.tabsSelectionObserver.clear();
    }
}
