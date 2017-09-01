import { UxTab } from '../ux-tab';
export declare type AutoSelectionStrategy = (tabs: UxTab[], selectedTabIndex: number) => number;
export declare const autoSelectionStrategies: {
    [key: string]: AutoSelectionStrategy;
};
