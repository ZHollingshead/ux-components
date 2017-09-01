System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var autoSelectionStrategies;
    return {
        setters: [],
        execute: function () {
            exports_1("autoSelectionStrategies", autoSelectionStrategies = {
                first: function (tabs) {
                    for (var i = 0; i < tabs.length; ++i) {
                        if (!tabs[i].disabled) {
                            return i;
                        }
                    }
                    return -1;
                },
                nearest: function (tabs, selectedTabIndex) {
                    var startAt = selectedTabIndex >= 0 ? selectedTabIndex : 0;
                    for (var i = startAt; i < tabs.length; ++i) {
                        if (!tabs[i].disabled) {
                            return i;
                        }
                    }
                    for (var i = startAt - 1; i >= 0; i--) {
                        if (!tabs[i].disabled) {
                            return i;
                        }
                    }
                    return -1;
                }
            });
        }
    };
});
