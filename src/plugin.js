import components from './main';

export default function install(Vue) {
  for (const name of Object.keys(components)) {
    const component = components[name];
    Vue.component(component.name || name, component);
  }
}
