import { BindingEngine } from 'aurelia-framework';
export interface Selectable {
    element: Element;
    selected: boolean;
}
export declare class SelectablesObserver<T extends Selectable> {
    private readonly bindingEngine;
    private readonly selectedChanged;
    constructor(bindingEngine: BindingEngine, selectedChanged: (item: T) => void);
    private readonly subscriptions;
    update(items: T[]): void;
    private registerSelectWhenClicked(item);
    private observeSelected(item);
    clear(): void;
}
