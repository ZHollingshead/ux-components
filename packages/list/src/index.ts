import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./list/ux-list'),
    PLATFORM.moduleName('./list/ux-list-item')
  ]);
}
