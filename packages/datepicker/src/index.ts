import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

import { configure as buttonConfig } from '@aurelia-ux-components/button';

export { DatepickerSettings } from './datepicker/resources/datepicker-settings';

export function configure(config: FrameworkConfiguration) {
  buttonConfig(config);

  config.globalResources([
    PLATFORM.moduleName('./datepicker/ux-calendar'),
    PLATFORM.moduleName('./datepicker/ux-datepicker'),
    PLATFORM.moduleName('./datepicker/ux-picker-dialog'),
    PLATFORM.moduleName('./datepicker/ux-year-list')
  ]);
}
