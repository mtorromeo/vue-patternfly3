// import positioner from 'positioner';

let _popover = null;

function getPopover() {
  if (_popover) {
    return _popover;
  }

  _popover = document.createElement('DIV');
  _popover.className = 'tooltip';
  _popover.style.display = 'none';
  _popover.setAttribute('role', 'tooltip');

  const arrow = document.createElement('DIV');
  arrow.className = 'tooltip-arrow';

  const inner = document.createElement('DIV');
  inner.className = 'tooltip-inner';

  _popover.appendChild(arrow);
  _popover.appendChild(inner);

  document.body.appendChild(_popover);

  return _popover;
}

function _setContent(popover, content) {
  const inner = popover.querySelector('.tooltip-inner');
  inner.innerHTML = content;
}

function _show(e) {
  const content = e.target.getAttribute('data-tooltip');
  if (!content) {
    return;
  }

  const placement = e.target.getAttribute('data-tooltip-placement') || 'top';

  let variant = e.target.getAttribute('data-tooltip-variant') || '';
  if (variant) {
    variant = `tooltip-${variant}`;
  }

  const popover = getPopover();
  popover.className = `tooltip in ${placement} ${variant}`;

  _setContent(popover, content);

  const handlers = positioner(popover, e.target);

  switch (placement) {
    case 'bottom':
      handlers.below();
      break;
    case 'left':
      handlers.left();
      break;
    case 'right':
      handlers.right();
      break;
    default:
      handlers.above();
      break;
  }

  popover.style.display = 'block';
}

function _hide() {
  getPopover().style.display = 'none';
}

function _toggle(e) {
  if (getPopover().style.display == 'none') {
    _show(e);
  } else {
    _hide();
  }
}

function unbind(el) {
  el.removeEventListener('mouseenter', _show);
  el.removeEventListener('mouseleave', _hide);
  el.removeEventListener('focus', _show);
  el.removeEventListener('blur', _hide);
  el.removeEventListener('click', _toggle);
}

function bind(el, binding) {
  if (!binding.value) {
    return;
  }

  getPopover();

  const modifiers = Object.keys(binding.modifiers);
  const trigger = modifiers.find(v => ['hover', 'focus', 'click'].indexOf(v) > -1);
  const placement = modifiers.find(v => ['top', 'bottom', 'left', 'right'].indexOf(v) > -1);

  el.setAttribute('data-tooltip', binding.value);
  if (placement) {
    el.setAttribute('data-tooltip-placement', placement);
  }
  if (binding.arg) {
    el.setAttribute('data-tooltip-variant', binding.arg);
  }

  unbind(el);

  if (trigger == 'click') {
    el.addEventListener('click', _toggle);
  } else if (trigger == 'focus') {
    el.addEventListener('focus', _show);
    el.addEventListener('blur', _hide);
  } else {
    el.addEventListener('mouseenter', _show);
    el.addEventListener('mouseleave', _hide);
  }
}

export default {
  name: 'tooltip',
  bind,
  update: bind,
  unbind,
};
