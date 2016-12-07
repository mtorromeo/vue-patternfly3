<template>
<article class="page">
  <header>
    <h1>Layout</h1>
  </header>

  <section>
    <p>The pf-layout component handles the application's navigation controls and is a perfect fit as the root element of the Vue.js application.</p>

    <h3>Live Controls</h3>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label">Direction</label>
        <div class="col-sm-10">
          <button-group v-model="$root.layout">
            <radio :value="$root.layout" checked-value="horizontal">Horizontal</radio>
            <radio :value="$root.layout" checked-value="vertical">Vertical</radio>
          </button-group>
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label" for="iconInput">Icons</label>
        <div class="col-sm-10">
          <input type="checkbox" id="iconInput" v-model="$root.layoutIcons"></div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label" for="collapseInput">Collapsable</label>
        <div class="col-sm-10">
          <input type="checkbox" id="collapseInput" v-model="$root.layoutCollapsable"></div>
      </div>
    </form>
  </section>
</article>
</template>

<script>
import ButtonGroup from 'vue-strap/src/buttonGroup.vue';
import Radio from 'vue-strap/src/Radio.vue';

export default {
  name: 'layout-page',

  components: {
    ButtonGroup,
    Radio,
  },
};
</script>
