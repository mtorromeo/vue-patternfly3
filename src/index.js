import './index.css';
import {version} from '../package.json';

import * as components from './components';

const VuePatternfly = {
  version,
  ...components,

  install(Vue) {
    for (const [name, component] of Object.entries(components)) {
      Vue.component(component.name || name, component);
    }
  },
};

export default VuePatternfly;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePatternfly);
}
