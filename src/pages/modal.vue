<template>
<article class="page">
  <header>
    <h1>Modal <code>&lt;pf-modal&gt;</code></h1>
  </header>

  <section>
    <p>This component implements a toolbar with controls for filters, sorting, searching and custom actions to interact with a data view.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/forms-and-controls/modal-overlay/" target="_blank">Pattern Library > Modal Overlay</a></li>
    </ol>

    <pf-modal v-if="modal.show" @close="modal.show = false" :title="modal.title" :outside-close="modal.outsideClose">
      <div v-html="modal.slotDefault"></div>

      <div slot="button" v-html="modal.slotButton"></div>
    </pf-modal>

    <button @click="modal.show = true">Open Modal</button>

    <props-table :component-props="modalProps">
      <props-row name="title" description="Modal title" v-model="modal.title"></props-row>
      <props-row name="outsideClose" description="Modal title" v-model="modal.outsideClose"></props-row>
    </props-table>

    <slots-table>
      <slots-row name="default" description="Modal content" v-model="modal.slotDefault"></slots-row>
      <slots-row name="button" description="Action buttons and dropdowns can be placed here" v-model="modal.slotButton"></slots-row>
    </slots-table>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';

export default {
  name: 'modals-page',

  data() {
    return {
      modalProps: VuePatternfly.Modal.props,
      modal: {
        show: false,
        title: 'Modal Title',
        outsideClose: true,
        slotDefault: `<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-3 control-label" for="textInput">Field One</label>
    <div class="col-sm-9">
      <input type="text" id="textInput" class="form-control"></div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="textInput2">Field Two</label>
    <div class="col-sm-9">
      <input type="text" id="textInput2" class="form-control"></div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="textInput3">Field Three</label>
    <div class="col-sm-9">
      <input type="text" id="textInput3" class="form-control">
    </div>
  </div>
</form>`,
        slotButton: `<button class="btn btn-default" type="button" title="Title 1">
  Action 1
</button>
<button class="btn btn-default" type="button" title="Title 2">
  Action 2
</button>
<button class="btn btn-danger" type="button" title="Title 3">
  Action 3
</button>`,
      },
    };
  },

  methods: {
    addFilter(filter, value) {
      const f = {};
      f[filter.title] = value;
      this.toolbar.filters.push(f);
    },
  },
};
</script>
