import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./form/ux-field'),
    PLATFORM.moduleName('./form/ux-form'),
    PLATFORM.moduleName('./form/ux-submit-attribute')
  ]);
}
