import { App } from 'vue';

import './index.css';
import * as components from './components';
import VTooltip from './directives/tooltip';

// Declare install function executed by Vue.use()
export function install(app: App) {
  const registered: string[] = [];
  for (const [name, component] of Object.entries(components)) {
    const componentName = component.name || name;
    if (!registered.includes(componentName)) {
      app.component(componentName, component);
      registered.push(componentName);
    }
  }
  // also register old name for backward compatibility
  app.component('PfToastNotification', components.PfNotification);
  app.directive('tooltip', VTooltip);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To allow use as module (npm/webpack/etc.) export components
export * from './components';
export { default as VTooltip } from './directives/tooltip';
export * as ouia from './ouia';

export default plugin;
