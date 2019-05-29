<template functional>
<div class="drawer-pf-action-link">
  <button v-bind="data.attrs" v-on="listeners" type="button" class="btn btn-link">
    <slot />
  </button>
</div>
</template>

<script>
export default {
  name: 'pf-drawer-group-action',
};
</script>
