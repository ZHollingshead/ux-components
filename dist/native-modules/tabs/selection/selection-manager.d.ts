import { BindingEngine, Disposable } from 'aurelia-framework';
import { AutoSelectionStrategy } from './auto-selection-strategy';
import { UxTab } from '../ux-tab';
export declare class SelectionManager implements Disposable {
    private readonly bindingEngine;
    private readonly selectedTabChanged;
    constructor(bindingEngine: BindingEngine, selectedTabChanged?: ((oldTab: UxTab | null, newTab: UxTab | null) => void) | undefined);
    private tabs;
    selectedTab: UxTab | null;
    private selectedIndex;
    private selectedTabDisabledDisposable;
    private isUpdatingSelected;
    private readonly tabsSelectionObserver;
    autoSelectionStrategy: AutoSelectionStrategy;
    setTabs(tabs: UxTab[]): void;
    private setSelected(tab, value);
    private selectedTabDisabledChanged();
    private tabSelectedChanged(tab);
    private autoSelect(strategy?);
    private trySelect(tab);
    private unselect();
    private select(index);
    dispose(): void;
}
