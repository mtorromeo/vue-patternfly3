import './index.css';
import {version} from '../package.json';

import * as components from './components';
import * as directives from './directives';

import * as uiv from 'uiv';

const VuePatternfly = {
  version,
  ...components,
  ...directives,

  install(Vue) {
    for (const [name, component] of Object.entries(components)) {
      Vue.component(component.name || name, component);
    }
    for (const [name, directive] of Object.entries(directives)) {
      Vue.directive(directive.name || name, directive);
    }
    uiv.install(Vue);
  },
};

export default VuePatternfly;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePatternfly);
}
