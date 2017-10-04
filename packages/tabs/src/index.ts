import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./ux-tab'),
    PLATFORM.moduleName('./ux-tabs')
  ]);
}
