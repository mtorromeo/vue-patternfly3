const Tooltip = require('tether-tooltip');

const positions = [
  'top',
  'left',
  'right',
  'bottom',
  'top-left',
  'left-top',
  'left-middle',
  'left-bottom',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'right-bottom',
  'right-middle',
  'right-top',
  'top-right',
  'top-center',
];

function getPosition(el, modifiers) {
  let position = false;
  for (const pos of positions) {
    if (modifiers[pos]) {
      position = pos;
      break;
    }
  }

  if (!position) {
    if (el.dataset.placement) {
      position = el.dataset.placement;
    } else {
      position = 'top center';
    }
  }

  position = position.replace('-', ' ');

  if (position.indexOf(' ') < 0) {
    if (position === 'top' || position === 'bottom') {
      position = `${position} center`;
    } else {
      position = `${position} middle`;
    }
  }

  return position;
}

function createTooltip (el, value, modifiers) {
  const position = getPosition(el, modifiers);

  let classes = (/^(top|bottom|left|right)(?:$| )/).exec(position);
  console.log(position);
  classes = classes ? classes[1] : '';

  el._tooltip = new Tooltip({
    target: el,
    position,
    content: value,
    classes,
  });

  const arrow = document.createElement('DIV');
  arrow.className = 'tooltip-arrow';

  el._tooltip.drop.drop.insertBefore(arrow, el._tooltip.drop.content);
  el._tooltip.drop.content.className = 'tooltip-inner';
}

function destroyTooltip (el) {
  if (el._tooltip) {
    el._tooltip.destroy();
    Reflect.deleteProperty(el, '_tooltip');
  }
}

export default {
  name: 'tooltip',
  bind (el, {value, modifiers}) {
    destroyTooltip(el);
    if (value) {
      createTooltip(el, value, modifiers);
    }
  },
  update (el, {value, modifiers}) {
    if (!value) {
      destroyTooltip(el);
    } else if (el && el._tooltip) {
      const position = getPosition(el, modifiers);
      if (el._tooltip.options.position == position) {
        el._tooltip.drop.content.innerHTML = value;
      } else {
        destroyTooltip(el);
        createTooltip(el, value, modifiers);
      }
    } else {
      createTooltip(el, value, modifiers);
    }
  },
  unbind (el) {
    destroyTooltip(el);
  },
};
