import './index.css';
import * as components from './components';
import VTooltip from './directives/tooltip';

// Declare install function executed by Vue.use()
export function install(app) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  for (const [name, component] of Object.entries(components)) {
    app.component(component.name || name, component);
  }
  // also register old name for backward compatibility
  app.component('PfToastNotification', components.Notification);
  app.directive('tooltip', VTooltip);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

export { version } from '../package.json';

// To allow use as module (npm/webpack/etc.) export components
export * from './components';
export { default as VTooltip } from './directives/tooltip';

export default plugin;
