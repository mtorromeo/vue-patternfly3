<template>
<article class="page">
  <header>
    <h1>Notifications <code>&lt;pf-notifications&gt;</code></h1>
  </header>

  <section>
    <p>This component is a container for other <code>&lt;pf-notification&gt;</code> components. Notifications can be placed inside its default slot or added programmatically by calling the <code>add()</code> method.</p>
    <p>Notification dismissals will be handled automatically for the notifications added programmatically. For <code>&lt;pf-notification&gt;</code> components placed inside the default slot or without using the <code>&lt;pf-notifications&gt;</code> container you will have to listen to the <code>@dismiss</code> event.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/communication/toast-notifications/#/api" target="_blank">Pattern Library > Toast Notifications</a></li>
      <li><a href="http://www.patternfly.org/pattern-library/communication/inline-notifications/#/api" target="_blank">Pattern Library > Inline Notifications</a></li>
    </ol>

    <pf-notifications ref="notifications" :toast="notificationsToast"></pf-notifications>

    <h3>Props</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>toast</td>
          <td>Defines this as a container for toast notifications. The property is propagated to every <code>&lt;pf-notification&gt;</code> added programmatically. You are responsible to keep the property in sync for <code>&lt;pf-notification&gt;</code>s inserted manually.</td>
          <td>Boolean</td>
          <td>{{notificationsProps.toast.default}}</td>
          <td>
            <input type="checkbox" v-model="notificationsToast">
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Methods</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Argument</th>
          <th>Description</th>
          <th colspan="2">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">add()</td>
          <td>notification</td>
          <td>The notification message string or an <code>Object</code> with every <code>&lt;pf-notification&gt;</code> property to use.</td>
          <td>
            <input type="text" class="form-control" v-model="notificationsMessage">
          </td>
          <td rowspan="2">
            <button class="btn btn-default" @click="notify">
              <span class="fa fa-play-circle"></span>
              Run
            </button>
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>&lt;pf-notification&gt;</code>'s type</td>
          <td>
            <select class="form-control" v-model="notificationsType">
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </section>


  <header>
    <h1>Notification <code>&lt;pf-notification&gt;</code></h1>
  </header>

  <section>
    <pf-notification :delay="notificationDelay" :type="notificationType" :toast="notificationToast" :persistent="notificationPersistent" :action="notificationAction">
      <div v-html="notificationMessage"></div>
    </pf-notification>

    <h3>Props</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>delay</td>
          <td>The delay in milliseconds after which the notification is automatically dismissed.</td>
          <td>Number</td>
          <td>{{notificationProps.delay.default}}</td>
          <td>
            <input class="form-control" type="text" v-model="notificationDelay">
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td>The type of notification. Can be on of: info, success, warning, danger.</td>
          <td>String</td>
          <td>{{notificationProps.type.default}}</td>
          <td>
            <select class="form-control" v-model="notificationType">
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>toast</td>
          <td>Make this a toast notification. These need to be placed inside a container with the <code>toast-notifications-list-pf</code> CSS class or inside a <code>&lt;pf-notifications&gt;</code> component.</td>
          <td>Boolean</td>
          <td>{{notificationProps.toast.default}}</td>
          <td>
            <input type="checkbox" v-model="notificationToast">
          </td>
        </tr>
        <tr>
          <td>persistent</td>
          <td>Disables the controls to dismiss the notification.</td>
          <td>Boolean</td>
          <td>{{notificationProps.persistent.default}}</td>
          <td>
            <input type="checkbox" v-model="notificationPersistent">
          </td>
        </tr>
        <tr>
          <td>action.name</td>
          <td>The text of an action button to add to the notification. This is mandatory to enable the action.</td>
          <td>String</td>
          <td></td>
          <td>
            <input class="form-control" type="text" v-model="notificationAction.name">
          </td>
        </tr>
        <tr>
          <td>action.title</td>
          <td>The title for the action button.</td>
          <td>String</td>
          <td></td>
          <td>
            <input class="form-control" type="text" v-model="notificationAction.title">
          </td>
        </tr>
        <tr>
          <td>action.button</td>
          <td>Controls the type of button to use for the action.</td>
          <td>String</td>
          <td>link</td>
          <td>
            <select class="form-control" v-model="notificationAction.button">
              <option value="link">link</option>
              <option value="default">default</option>
              <option value="primary">primary</option>
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>action.emit</td>
          <td>The name of an event that should be emitted when the action is triggered.</td>
          <td>String</td>
          <td>action</td>
          <td>
            <input class="form-control" type="text" v-model="notificationAction.emit">
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Slots</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>HTML</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>The notification message</td>
          <td>
            <input type="text" class="form-control" v-model="notificationMessage">
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';
const Notification = VuePatternfly.Notification;
const Notifications = VuePatternfly.Notifications;

export default {
  name: 'notifications-page',

  components: {
    'pf-notification': Notification,
  },

  data() {
    return {
      notificationProps: Notification.props,
      notificationDelay: Notification.props.delay.default,
      notificationType: Notification.props.type.default,
      notificationToast: Notification.props.toast.default,
      notificationPersistent: Notification.props.persistent.default,
      notificationMessage: '<strong>Test</strong> notification',
      notificationsProps: Notifications.props,
      notificationsMessage: '<strong>Test</strong> notification',
      notificationsType: 'info',
      notificationsToast: Notifications.props.toast.default,
      notificationAction: {
        name: '',
        title: '',
        button: 'link',
        emit: '',
      },
    };
  },

  methods: {
    notify() {
      this.$refs.notifications.add(this.notificationsMessage, this.notificationsType);
    },
  },
};
</script>
