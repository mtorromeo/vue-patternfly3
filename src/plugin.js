import components from './main';

export default function install(Vue) {
  for (const name of Object.keys(components)) {
    const component = components[name];
    if (component.bind) {
      Vue.directive(component.name || name, component);
    } else {
      Vue.component(component.name || name, component);
    }
  }
}
