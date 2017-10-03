import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { UxButtonTheme } from './button/ux-button-theme';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./button/ux-button')
  ]);
}
