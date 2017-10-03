import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { UxCheckboxTheme } from './checkbox/ux-checkbox-theme';

// export { UxCheckbox } from './checkbox/ux-checkbox';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./checkbox/ux-checkbox')
  ]);
}
