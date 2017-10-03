import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { UxChipInputTheme } from './chip-input/ux-chip-input-theme';
export { UxTagTheme } from './chip-input/ux-tag-theme';
export { UxChipTheme } from './chip-input/ux-chip-theme';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./chip-input/ux-chip-input'),
    PLATFORM.moduleName('./chip-input/ux-chip'),
    PLATFORM.moduleName('./chip-input/ux-tag')
  ]);
}
