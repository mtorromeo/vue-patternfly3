const Tooltip = require('tether-tooltip');

const tooltips = new WeakMap();

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

function createTooltip(el, value, modifiers) {
  const position = getPosition(el, modifiers);

  let classes = (/^(top|bottom|left|right)(?:$| )/).exec(position);
  classes = classes ? classes[1] : '';

  const tooltip = new Tooltip({
    target: el,
    position,
    content: value,
    classes,
  });
  tooltips.set(el, tooltip);

  const arrow = document.createElement('DIV');
  arrow.className = 'tooltip-arrow';

  tooltip.drop.drop.insertBefore(arrow, tooltip.drop.content);
  tooltip.drop.content.className = 'tooltip-inner';
}

function destroyTooltip(el) {
  if (tooltips.has(el)) {
    tooltips.get(el).destroy();
    tooltips.delete(el);
  }
}

export default {
  name: 'tooltip',

  bind(el, {value, modifiers}) {
    destroyTooltip(el);
    if (value) {
      createTooltip(el, value, modifiers);
    }
  },

  update(el, {value, modifiers}) {
    if (!value) {
      destroyTooltip(el);
    } else if (el && tooltips.has(el)) {
      const tooltip = tooltips.get(el);
      const position = getPosition(el, modifiers);
      if (tooltip.options.position == position) {
        tooltip.drop.content.innerHTML = value;
      } else {
        destroyTooltip(el);
        createTooltip(el, value, modifiers);
      }
    } else {
      createTooltip(el, value, modifiers);
    }
  },

  unbind(el) {
    destroyTooltip(el);
  },
};
