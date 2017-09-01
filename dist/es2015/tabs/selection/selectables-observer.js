export class SelectablesObserver {
    constructor(bindingEngine, selectedChanged) {
        this.bindingEngine = bindingEngine;
        this.selectedChanged = selectedChanged;
        this.subscriptions = new Map();
    }
    update(items) {
        this.subscriptions.forEach((subscriptions, item) => {
            if (!items.includes(item)) {
                subscriptions.forEach(s => s.dispose());
                this.subscriptions.delete(item);
            }
        });
        items.forEach(item => {
            if (!this.subscriptions.has(item)) {
                this.subscriptions.set(item, [
                    this.registerSelectWhenClicked(item),
                    this.observeSelected(item)
                ]);
            }
        });
    }
    registerSelectWhenClicked(item) {
        item.element.addEventListener('click', () => { item.selected = true; });
        return {
            dispose() {
                item.element.removeEventListener('click', () => { item.selected = true; });
            }
        };
    }
    observeSelected(item) {
        return this.bindingEngine
            .propertyObserver(item, 'selected')
            .subscribe(() => this.selectedChanged(item));
    }
    clear() {
        this.subscriptions.forEach((subscriptions, _) => subscriptions.forEach(s => s.dispose()));
        this.subscriptions.clear();
    }
}
