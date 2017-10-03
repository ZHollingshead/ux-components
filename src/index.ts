import { FrameworkConfiguration } from 'aurelia-framework';

import { configure as buttonConfig } from '@aurelia-ux-components/button';
import { configure as checkboxConfig } from '@aurelia-ux-components/checkbox';
import { configure as chipConfig } from '@aurelia-ux-components/chip-input';
import { configure as datepickerConfig } from '@aurelia-ux-components/datepicker';
import { configure as formConfig } from '@aurelia-ux-components/form';
import { configure as iconsConfig } from '@aurelia-ux-components/icons';
import { configure as inputConfig } from '@aurelia-ux-components/input';
import { configure as inputInfoConfig } from '@aurelia-ux-components/input-info';
import { configure as listConfig } from '@aurelia-ux-components/list';
import { configure as tabsConfig } from '@aurelia-ux-components/tabs';
import { configure as textareaConfig } from '@aurelia-ux-components/textarea';

export function configure(config: FrameworkConfiguration) {
  buttonConfig(config);
  checkboxConfig(config);
  chipConfig(config);
  datepickerConfig(config);
  formConfig(config);
  iconsConfig(config);
  inputConfig(config);
  inputInfoConfig(config);
  listConfig(config);
  tabsConfig(config);
  textareaConfig(config);
}
