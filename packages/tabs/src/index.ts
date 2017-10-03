import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./tabs/ux-tab'),
    PLATFORM.moduleName('./tabs/ux-tabs')
  ]);
}