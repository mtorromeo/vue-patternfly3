<template>
  <article class="page">
    <header>
      <h1>RadioButton <code>&lt;pf-radio-button&gt;</code></h1>
    </header>

    <section>
      <p>This button can be used for radio or checkbox form inputs that have to be represented by a clickable button. Place multiple buttons bound to the same variable to have them synchronize their status. If you set the <code>input</code>prop to <code>checkbox</code> the value is treated as an array that contains the values of all the checked buttons.</p>

      <div class="demo-container">
        <pf-radio-button
          v-model="btn.value"
          :name="btn.name"
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
          v-model="btn.value"
          :name="btn.name"
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
          v-model="btn.value"
          :name="btn.name"
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
        <props-row v-model="btn.name" name="name" description="Input name." />
        <props-row v-model="btn.input" name="input" description="Type of input." :options="['radio', 'checkbox', 'none']" />
        <props-row v-model="btn.value" name="value" description="Actual value." />
        <props-row v-model="btn.checkedValue" name="checkedValue" description="Value to match to consider the radio/checkbox as checked." />
        <props-row v-model="btn.activeClass" name="activeClass" description="Button class for active state." />
        <props-row v-model="btn.inactiveClass" name="inactiveClass" description="Button class for inactive state." />
        <props-row v-model="btn.disabled" name="disabled" description="Disabled state." />
        <props-row v-model="btn.loose" name="loose" description="Use loose value matching." />
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
            v-model="toggle.value"
            :name="toggle.name"
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
            v-model="toggle.value"
            :name="toggle.name"
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
            v-model="toggle.value"
            :name="toggle.name"
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
        <props-row v-model="toggle.name" name="name" description="Input name." />
        <props-row v-model="toggle.value" name="value" description="Actual value." />
        <props-row v-model="toggle.onText" name="onText" description="Label for the ON button." />
        <props-row v-model="toggle.onValue" name="onValue" description="Value to use when the toggle is turned to ON." />
        <props-row v-model="toggle.onClass" name="onClass" description="Class for the ON button." />
        <props-row v-model="toggle.offText" name="offText" description="Label for the OFF button." />
        <props-row v-model="toggle.offValue" name="offValue" description="Value to use when the toggle is turned to OFF." />
        <props-row v-model="toggle.offClass" name="offClass" description="Class for the OFF button." />
        <props-row v-model="toggle.disabled" name="disabled" description="Disabled state." />
        <props-row v-model="toggle.loading" name="loading" description="Loading state. Useful to apply while asynchronously submitting the change of state." />
        <props-row v-model="toggle.loose" name="loose" description="Use loose value matching." />
        <props-row v-model="toggle.noOff" name="noOff" description="Do not assign any value when the toggle is OFF. By using multiple <code>pf-toggle</code>s the binded value is an Array of all the toggles set to ON." />
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

    <header>
      <h1>ComboBox <code>&lt;pf-combo-box&gt;</code></h1>
    </header>

    <section>
      <p>This is a two-state button with hidden form controls.</p>

      <div class="demo-container">
        <p>
          <pf-combobox
            v-model="combobox.value"
            :name="combobox.name"
            :options="combobox.options"
            :placeholder="combobox.placeholder"
            :disabled="combobox.disabled"
            :required="combobox.required"
            :tabindex="combobox.tabindex"
            :label-field="combobox.labelField"
            :value-field="combobox.valueField"
            :with-checkbox="combobox.withCheckbox"
          />
        </p>
      </div>

      <props-table :component-props="comboboxProps">
        <props-row v-model="combobox.name" name="name" description="Input name." />
        <props-row v-model="combobox.value" name="value" description="Actual value." />
        <props-row v-model="combobox.options" name="options" description="Array of Strings or Objects representing the available options to pick from." code />
        <props-row v-model="combobox.placeholder" name="placeholder" description="Text placeholder for the combobox input element." />
        <props-row v-model="combobox.disabled" name="disabled" description="Disabled state." />
        <props-row v-model="combobox.required" name="required" description="Required state." />
        <props-row v-model="combobox.tabindex" name="tabindex" description="Tabindex of the input element." />
        <props-row v-model="combobox.labelField" name="labelField" description="If the options' items are Objects, use this field for the label." />
        <props-row v-model="combobox.valueField" name="valueField" description="If the options' items are Objects, use this field for the value." />
        <props-row name="match" description="Custom function to match the combobox filter to the options." />
        <props-row name="highlight" description="Custom function to highlight the part of the options that matches the filter." />
        <props-row v-model="combobox.withCheckbox" name="withCheckbox" description="Add a checkbox to enable/disable the combobox. If it's a string, the checkbox will have a name that can be submitted with a form." />
      </props-table>

      <h3>Slots</h3>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Scope properties</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>Option template</td>
            <td><code>option</code>: the option to render</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script>
import { RadioButton, Toggle, Combobox } from 'vue-patternfly';

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
      comboboxProps: Combobox.props,
      combobox: {
        name: 'timezones',
        value: null,
        options: [
          'Australian Central Daylight Savings Time',
          'Australian Central Standard Time',
          'Acre Time',
          'ASEAN Common Time (unofficial)',
          'Australian Central Western Standard Time (unofficial)',
          'Atlantic Daylight Time',
          'Australian Eastern Daylight Savings Time',
          'Australian Eastern Standard Time',
          'Afghanistan Time',
          'Alaska Daylight Time',
          'Alaska Standard Time',
          'Alma-Ata Time[1]',
          'Amazon Summer Time (Brazil)[2]',
          'Amazon Time (Brazil)[3]',
          'Armenia Time',
          'Anadyr Time[4]',
          'Aqtobe Time[5]',
          'Argentina Time',
          'Arabia Standard Time',
          'Atlantic Standard Time',
          'Australian Western Standard Time',
          'Azores Summer Time',
          'Azores Standard Time',
          'Azerbaijan Time',
          'Brunei Time',
          'British Indian Ocean Time',
          'Baker Island Time',
          'Bolivia Time',
          'Brasília Summer Time',
          'Brasília Time',
          'Bangladesh Standard Time',
          'Bougainville Standard Time[6]',
          'British Summer Time (British Standard Time from Feb 1968 to Oct 1971)',
          'Bhutan Time',
          'Central Africa Time',
          'Cocos Islands Time',
          'Central Daylight Time (North America)',
          'Cuba Daylight Time[7]',
          'Central European Summer Time (Cf. HAEC)',
          'Central European Time',
          'Chatham Daylight Time',
          'Chatham Standard Time',
          'Choibalsan Standard Time',
          'Choibalsan Summer Time',
          'Chamorro Standard Time',
          'Chuuk Time',
          'Clipperton Island Standard Time',
          'Central Indonesia Time',
          'Cook Island Time',
          'Chile Summer Time',
          'Chile Standard Time',
          'Colombia Summer Time',
          'Colombia Time',
          'Central Standard Time (North America)',
          'China Standard Time',
          'Cuba Standard Time',
          'China Time',
          'Cape Verde Time',
          'Central Western Standard Time (Australia) unofficial',
          'Christmas Island Time',
          'Davis Time',
          'Dumont d\'Urville Time',
          'AIX-specific equivalent of Central European Time[NB 1]',
          'Easter Island Summer Time',
          'Easter Island Standard Time',
          'East Africa Time',
          'Eastern Caribbean Time (does not recognise DST)',
          'Ecuador Time',
          'Eastern Daylight Time (North America)',
          'Eastern European Summer Time',
          'Eastern European Time',
          'Eastern Greenland Summer Time',
          'Eastern Greenland Time',
          'Eastern Indonesian Time',
          'Eastern Standard Time (North America)',
          'Further-eastern European Time',
          'Fiji Time',
          'Falkland Islands Summer Time',
          'Falkland Islands Time',
          'Fernando de Noronha Time',
          'Galápagos Time',
          'Gambier Islands Time',
          'Georgia Standard Time',
          'French Guiana Time',
          'Gilbert Island Time',
          'Gambier Island Time',
          'Greenwich Mean Time',
          'South Georgia and the South Sandwich Islands Time',
          'Gulf Standard Time',
          'Guyana Time',
          'Hawaii–Aleutian Daylight Time',
          'Heure Avancée d\'Europe Centrale French-language name for CEST',
          'Hawaii–Aleutian Standard Time',
          'Hong Kong Time',
          'Heard and McDonald Islands Time',
          'Hovd Summer Time (not used from 2017-present)',
          'Hovd Time',
          'Indochina Time',
          'International Day Line West time zone',
          'Israel Daylight Time',
          'Indian Ocean Time',
          'Iran Daylight Time',
          'Irkutsk Time',
          'Iran Standard Time',
          'Indian Standard Time',
          'Irish Standard Time[8]',
          'Israel Standard Time',
          'Japan Standard Time',
          'Kaliningrad Time',
          'Kyrgyzstan Time',
          'Kosrae Time',
          'Krasnoyarsk Time',
          'Korea Standard Time',
          'Lord Howe Standard Time',
          'Lord Howe Summer Time',
          'Line Islands Time',
          'Magadan Time',
          'Marquesas Islands Time',
          'Mawson Station Time',
          'Mountain Daylight Time (North America)',
          'Middle European Time Same zone as CET',
          'Middle European Summer Time Same zone as CEST',
          'Marshall Islands Time',
          'Macquarie Island Station Time',
          'Marquesas Islands Time',
          'Myanmar Standard Time',
          'Moscow Time',
          'Malaysia Standard Time',
          'Mountain Standard Time (North America)',
          'Mauritius Time',
          'Maldives Time',
          'Malaysia Time',
          'New Caledonia Time',
          'Newfoundland Daylight Time',
          'Norfolk Island Time',
          'Novosibirsk Time [9]',
          'Nepal Time',
          'Newfoundland Standard Time',
          'Newfoundland Time',
          'Niue Time',
          'New Zealand Daylight Time',
          'New Zealand Standard Time',
          'Omsk Time',
          'Oral Time',
          'Pacific Daylight Time (North America)',
          'Peru Time',
          'Kamchatka Time',
          'Papua New Guinea Time',
          'Phoenix Island Time',
          'Philippine Time',
          'Pakistan Standard Time',
          'Saint Pierre and Miquelon Daylight Time',
          'Saint Pierre and Miquelon Standard Time',
          'Pohnpei Standard Time',
          'Pacific Standard Time (North America)',
          'Philippine Standard Time',
          'Paraguay Summer Time[10]',
          'Paraguay Time[11]',
          'Réunion Time',
          'Rothera Research Station Time',
          'Sakhalin Island Time',
          'Samara Time',
          'South African Standard Time',
          'Solomon Islands Time',
          'Seychelles Time',
          'Samoa Daylight Time',
          'Singapore Time',
          'Sri Lanka Standard Time',
          'Srednekolymsk Time',
          'Suriname Time',
          'Samoa Standard Time',
          'Singapore Standard Time',
          'Showa Station Time',
          'Tahiti Time',
          'Thailand Standard Time',
          'French Southern and Antarctic Time[12]',
          'Tajikistan Time',
          'Tokelau Time',
          'Timor Leste Time',
          'Turkmenistan Time',
          'Turkey Time',
          'Tonga Time',
          'Tuvalu Time',
          'Ulaanbaatar Summer Time',
          'Ulaanbaatar Standard Time',
          'Coordinated Universal Time',
          'Uruguay Summer Time',
          'Uruguay Standard Time',
          'Uzbekistan Time',
          'Venezuelan Standard Time',
          'Vladivostok Time',
          'Volgograd Time',
          'Vostok Station Time',
          'Vanuatu Time',
          'Wake Island Time',
          'West Africa Summer Time',
          'West Africa Time',
          'Western European Summer Time',
          'Western European Time',
          'Western Indonesian Time',
          'Western Standard Time',
          'Yakutsk Time',
          'Yekaterinburg Time',
        ],
        placeholder: 'Pick a timezone',
        disabled: false,
        required: false,
        tabindex: '0',
        labelField: 'label',
        valueField: 'id',
        withCheckbox: false,
      },
    };
  },
};
</script>
