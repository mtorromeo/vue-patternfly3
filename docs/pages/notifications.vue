<template>
<article>
  <h1>Notifications</h1>

  <pf-notifications ref="notifications" :toast="notificationToast"></pf-notifications>

  <form class="form-horizontal" @submit.prevent="notify">
    <div class="form-group">
      <label class="col-sm-2 control-label">Message</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="notificationMessage">
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-2 control-label">Type</label>
      <div class="col-sm-2">
        <select class="form-control" v-model="notificationType">
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-2 control-label" for="notification-toast">Toast</label>
      <div class="col-sm-2">
        <input id="notification-toast" type="checkbox" v-model="notificationToast">
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
        <button type="submit" class="btn btn-default">Notify</button>
      </div>
    </div>
  </form>
</article>
</template>

<script>
export default {
  name: 'notifications-page',

  data() {
    return {
      notificationMessage: 'Test notification',
      notificationType: 'info',
      notificationToast: false,
    };
  },

  methods: {
    notify() {
      this.$refs.notifications.add(`<strong>${this.notificationType}!</strong> ${this.notificationMessage}`, this.notificationType);
    },
  },
};
</script>
