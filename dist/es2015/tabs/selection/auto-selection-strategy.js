export const autoSelectionStrategies = {
    first(tabs) {
        for (let i = 0; i < tabs.length; ++i) {
            if (!tabs[i].disabled) {
                return i;
            }
        }
        return -1;
    },
    nearest(tabs, selectedTabIndex) {
        const startAt = selectedTabIndex >= 0 ? selectedTabIndex : 0;
        for (let i = startAt; i < tabs.length; ++i) {
            if (!tabs[i].disabled) {
                return i;
            }
        }
        for (let i = startAt - 1; i >= 0; i--) {
            if (!tabs[i].disabled) {
                return i;
            }
        }
        return -1;
    }
};
