<template>
  <div :is="isLi?'li':'div'" v-click-outside="blur"
    :class="[{open:show,disabled:disabled,dropdown:isLi,'input-group-btn':inInput,'btn-group':!isLi&&!inInput}]"
  >
    <slot name="before"></slot>
    <slot name="button">
      <a v-if="isLi" role="button" :class="['dropdown-toggle',buttonSize,{disabled:disabled}]" @keyup.esc="show = false">
        {{ text }}
        <span class="fa fa-ellipsis-v"></span>
      </a>
      <button v-else type="button" :class="['btn btn-' + type,buttonSize,'dropdown-toggle']" @keyup.esc="show = false" :disabled="disabled" aria-haspopup="true" aria-expanded="true">
        {{ text }}
        <span class="fa fa-ellipsis-v"></span>
      </button>
    </slot>
    <slot name="dropdown-menu">
      <ul class="dropdown-menu" aria-labelledby="dropdownKebab"><slot></slot></ul>
    </slot>
  </div>
</template>

<script>
import Dropdown from 'vue-strap/src/components/Dropdown.vue';

export default Dropdown;
</script>
