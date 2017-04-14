// Utils
import $ from 'vue-strap/src/utils/NodeList.js';
import {coerce} from 'vue-strap/src/utils/utils.js';
// Directives
import ClickOutside from 'vue-strap/src/directives/ClickOutside.js';
import Scroll from 'vue-strap/src/directives/Scroll.js';
// Components
import accordion from 'vue-strap/src/Accordion.vue';
import affix from 'vue-strap/src/Affix.vue';
import alert from 'vue-strap/src/Alert.vue';
import aside from 'vue-strap/src/Aside.vue';
import buttonGroup from 'vue-strap/src/buttonGroup.vue';
import carousel from 'vue-strap/src/Carousel.vue';
import checkbox from 'vue-strap/src/Checkbox.vue';
import datepicker from 'vue-strap/src/Datepicker.vue';
import dropdown from 'vue-strap/src/Dropdown.vue';
import formGroup from 'vue-strap/src/FormGroup.vue';
import formValidator from 'vue-strap/src/FormValidator.vue';
import input from 'vue-strap/src/Input.vue';
import modal from 'vue-strap/src/Modal.vue';
import navbar from 'vue-strap/src/Navbar.vue';
import option from 'vue-strap/src/Option.vue';
import panel from 'vue-strap/src/Panel.vue';
import popover from 'vue-strap/src/Popover.vue';
import progressbar from 'vue-strap/src/Progressbar.vue';
import radio from 'vue-strap/src/Radio.vue';
import select from 'vue-strap/src/Select.vue';
import slider from 'vue-strap/src/Slider.vue';
import spinner from 'vue-strap/src/Spinner.vue';
import tab from 'vue-strap/src/Tab.vue';
import tabGroup from 'vue-strap/src/TabGroup.vue';
import tabs from 'vue-strap/src/Tabs.vue';
import toggleButton from 'vue-strap/src/ToggleButton.vue';
import typeahead from 'vue-strap/src/Typeahead.vue';

const directives = {
  ClickOutside,
  Scroll,
};

dropdown.props.li = Boolean;

dropdown.computed.isLi = function() {
  return this.li || this.$parent._isTabs || this.$parent._navbar || this.$parent.menu;
};

const VueStrap = {
  directives,
  utils: {
    $,
    coerce,
  },
  accordion,
  affix,
  alert,
  aside,
  buttonGroup,
  carousel,
  checkbox,
  datepicker,
  dropdown,
  formGroup,
  formValidator,
  input,
  modal,
  navbar,
  option,
  panel,
  popover,
  progressbar,
  radio,
  select,
  slider,
  spinner,
  tab,
  tabGroup,
  tabs,
  toggleButton,
  typeahead,
};

VueStrap.install = function(Vue) {
  for (const name of Object.keys(directives)) {
    Vue.directive(name, directives[name]);
  }

  for (let name of Object.keys(VueStrap)) {
    if (typeof VueStrap[name] != 'object' ||
        name == 'directives' ||
        name == 'utils') {
      continue;
    }

    const component = VueStrap[name];
    name = name.split(/([A-Z][^A-Z]+)/g).
                filter(v => v).
                map(v => v.toLowerCase()).
                join('-');
    component.name = `bs-${name}`;
    Vue.component(component.name, component);
  }
};

export default VueStrap;
