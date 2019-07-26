<template>
<article class="page">
  <header>
    <h1>RadioButton <code>&lt;pf-radio-button&gt;</code></h1>
  </header>

  <section>
    <p>This button can be used for radio or checkbox form inputs that have to be represented by a clickable button. Place multiple buttons bound to the same variable to have them synchronize their status. If you set the <code>input</code>prop to <code>checkbox</code> the value is treated as an array that contains the values of all the checked buttons.</p>

    <div class="demo-container">
      <pf-radio-button
        :name="btn.name"
        v-model="btn.value"
        :checked-value="btn.checkedValue"
        :active-class="btn.activeClass"
        :inactive-class="btn.inactiveClass"
        :input="btn.input"
        :disabled="btn.disabled"
        :loose="btn.loose"
      >
        Click me for {{ btn.checkedValue }}!
      </pf-radio-button>

      <pf-radio-button
        :name="btn.name"
        v-model="btn.value"
        checked-value="baz"
        :active-class="btn.activeClass"
        :inactive-class="btn.inactiveClass"
        :input="btn.input"
        :disabled="btn.disabled"
        :loose="btn.loose"
      >
        Click me for baz!
      </pf-radio-button>

      <pf-radio-button
        :name="btn.name"
        v-model="btn.value"
        checked-value="bar"
        :active-class="btn.activeClass"
        :inactive-class="btn.inactiveClass"
        :input="btn.input"
        :disabled="btn.disabled"
        :loose="btn.loose"
      >
        Click me for bar!
      </pf-radio-button>
    </div>

    <props-table :component-props="btnProps">
      <props-row name="name" description="Input name." v-model="btn.name"/>
      <props-row name="input" description="Type of input." v-model="btn.input" :options="['radio', 'checkbox', 'none']" />
      <props-row name="value" description="Actual value." v-model="btn.value" />
      <props-row name="checkedValue" description="Value to match to consider the radio/checkbox as checked." v-model="btn.checkedValue" />
      <props-row name="activeClass" description="Button class for active state." v-model="btn.activeClass" />
      <props-row name="inactiveClass" description="Button class for inactive state." v-model="btn.inactiveClass" />
      <props-row name="disabled" description="Disabled state." v-model="btn.disabled" />
      <props-row name="loose" description="Use loose value matching." v-model="btn.loose" />
    </props-table>


    <h3>Slots</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>Button label</td>
        </tr>
      </tbody>
    </table>
  </section>


  <header>
    <h1>Toggle <code>&lt;pf-toggle&gt;</code></h1>
  </header>

  <section>
    <p>This is a two-state button with hidden form controls.</p>

    <div class="demo-container">
      <p>
        <pf-toggle
          :name="toggle.name"
          v-model="toggle.value"
          :on-value="toggle.onValue"
          :off-value="toggle.offValue"
          :on-text="toggle.onText"
          :on-class="toggle.onClass"
          :off-text="toggle.offText"
          :off-class="toggle.offClass"
          :disabled="toggle.disabled"
          :loading="toggle.loading"
          :loose="toggle.loose"
          :no-off="toggle.noOff"
        >
          Toggle me!
        </pf-toggle>
      </p>

      <p v-if="toggle.noOff">
        <pf-toggle
          :name="toggle.name"
          v-model="toggle.value"
          on-value="bar"
          :off-value="false"
          :on-text="toggle.onText"
          :on-class="toggle.onClass"
          :off-text="toggle.offText"
          :off-class="toggle.offClass"
          :disabled="toggle.disabled"
          :loading="toggle.loading"
          :loose="toggle.loose"
          :no-off="toggle.noOff"
        >
          Toggle me!
        </pf-toggle>
      </p>

      <p v-if="toggle.noOff">
        <pf-toggle
          :name="toggle.name"
          v-model="toggle.value"
          on-value="baz"
          :off-value="false"
          :on-text="toggle.onText"
          :on-class="toggle.onClass"
          :off-text="toggle.offText"
          :off-class="toggle.offClass"
          :disabled="toggle.disabled"
          :loading="toggle.loading"
          :loose="toggle.loose"
          :no-off="toggle.noOff"
        >
          Toggle me!
        </pf-toggle>
      </p>
    </div>

    <props-table :component-props="toggleProps">
      <props-row name="name" description="Input name." v-model="toggle.name"/>
      <props-row name="value" description="Actual value." v-model="toggle.value" />
      <props-row name="onText" description="Label for the ON button." v-model="toggle.onText" />
      <props-row name="onValue" description="Value to use when the toggle is turned to ON." v-model="toggle.onValue" />
      <props-row name="onClass" description="Class for the ON button." v-model="toggle.onClass" />
      <props-row name="offText" description="Label for the OFF button." v-model="toggle.offText" />
      <props-row name="offValue" description="Value to use when the toggle is turned to OFF." v-model="toggle.offValue" />
      <props-row name="offClass" description="Class for the OFF button." v-model="toggle.offClass" />
      <props-row name="disabled" description="Disabled state." v-model="toggle.disabled" />
      <props-row name="loading" description="Loading state. Useful to apply while asynchronously submitting the change of state." v-model="toggle.loading" />
      <props-row name="loose" description="Use loose value matching." v-model="toggle.loose" />
      <props-row name="noOff" description="Do not assign any value when the toggle is OFF. By using multiple <code>pf-toggle</code>s the binded value is an Array of all the toggles set to ON." v-model="toggle.noOff" />
    </props-table>


    <h3>Slots</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>Toggle label</td>
        </tr>
      </tbody>
    </table>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';
const RadioButton = VuePatternfly.RadioButton;
const Toggle = VuePatternfly.Toggle;

export default {
  name: 'form-controls-page',

  data() {
    return {
      btnProps: RadioButton.props,
      btn: {
        name: 'test',
        input: 'radio',
        value: 'foo',
        checkedValue: 'foo',
        activeClass: 'active',
        inactiveClass: '',
        disabled: false,
        loose: false,
      },
      toggleProps: Toggle.props,
      toggle: {
        name: 'test',
        value: 'foo',
        onText: 'ON',
        onValue: 'foo',
        onClass: 'btn-success',
        offText: 'OFF',
        offValue: 'off',
        offClass: 'btn-danger',
        disabled: false,
        loading: false,
        loose: false,
        noOff: false,
      },
    };
  },
};
</script>
