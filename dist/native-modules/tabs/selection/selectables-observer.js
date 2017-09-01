var SelectablesObserver = /** @class */ (function () {
    function SelectablesObserver(bindingEngine, selectedChanged) {
        this.bindingEngine = bindingEngine;
        this.selectedChanged = selectedChanged;
        this.subscriptions = new Map();
    }
    SelectablesObserver.prototype.update = function (items) {
        var _this = this;
        this.subscriptions.forEach(function (subscriptions, item) {
            if (!items.includes(item)) {
                subscriptions.forEach(function (s) { return s.dispose(); });
                _this.subscriptions.delete(item);
            }
        });
        items.forEach(function (item) {
            if (!_this.subscriptions.has(item)) {
                _this.subscriptions.set(item, [
                    _this.registerSelectWhenClicked(item),
                    _this.observeSelected(item)
                ]);
            }
        });
    };
    SelectablesObserver.prototype.registerSelectWhenClicked = function (item) {
        item.element.addEventListener('click', function () { item.selected = true; });
        return {
            dispose: function () {
                item.element.removeEventListener('click', function () { item.selected = true; });
            }
        };
    };
    SelectablesObserver.prototype.observeSelected = function (item) {
        var _this = this;
        return this.bindingEngine
            .propertyObserver(item, 'selected')
            .subscribe(function () { return _this.selectedChanged(item); });
    };
    SelectablesObserver.prototype.clear = function () {
        this.subscriptions.forEach(function (subscriptions, _) { return subscriptions.forEach(function (s) { return s.dispose(); }); });
        this.subscriptions.clear();
    };
    return SelectablesObserver;
}());
export { SelectablesObserver };
