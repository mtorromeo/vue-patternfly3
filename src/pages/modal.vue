<template>
<article class="page">
  <header>
    <h1>Modal <code>&lt;pf-modal&gt;</code></h1>
  </header>

  <section>
    <p>This component implements a toolbar with controls for filters, sorting, searching and custom actions to interact with a data view.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/forms-and-controls/modal-overlay/" target="_blank">Pattern Library > Form and Controls > Modal Overlay</a></li>
    </ol>

    <pf-modal
      v-if="modal.show"
      @close="modal.show = false"
      :title="modal.title"
      :outside-close="modal.outsideClose"
      :confirm-button="modal.confirmButton"
      :cancel-button="modal.cancelButton"
    >
      <div v-if="modal.slotDefault.enabled" v-html="modal.slotDefault.content"></div>

      <div slot="footer" v-if="modal.slotFooter.enabled" v-html="modal.slotFooter.content"></div>
    </pf-modal>

    <button class="btn btn-primary" @click="modal.show = true">Open Modal</button>

    <props-table :component-props="modalProps">
      <props-row name="title" description="Modal title or empty/undefined to disable it" v-model="modal.title"/>
      <props-row name="outsideClose" description="Allow clicking outside of the modal to close it" v-model="modal.outsideClose"/>
      <props-row name="confirmButton" description="Text for the confirmation button or empty/undefined to disable it" v-model="modal.confirmButton"/>
      <props-row name="cancelButton" description="Text for the cancellation button or empty/undefined to disable it" v-model="modal.cancelButton"/>
    </props-table>

    <slots-table toggle>
      <slots-row name="default" description="Modal content" :enabled.sync="modal.slotDefault.enabled" v-model="modal.slotDefault.content"/>
      <slots-row name="footer" description="Custom footer content can be placed here (overrides default buttons)" :enabled.sync="modal.slotFooter.enabled" v-model="modal.slotFooter.content"/>
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
        confirmButton: 'OK',
        cancelButton: 'Cancel',
        slotDefault: {
          enabled: true,
          content: `<form class="form-horizontal">
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
        },
        slotFooter: {
          enabled: false,
          content: `<button class="btn btn-default" type="button" title="Title 1">
  Action 1
</button>
<button class="btn btn-default" type="button" title="Title 2">
  Action 2
</button>
<button class="btn btn-danger" type="button" title="Title 3">
  Action 3
</button>`,
        },
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
