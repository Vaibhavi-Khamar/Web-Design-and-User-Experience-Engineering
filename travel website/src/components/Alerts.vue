<template>
  <div>
    <b-alert show>
      <font-awesome-icon icon="phone" />
      Call a JUST-GO travel specialist 24/7 on 1 000 222 3333
      <font-awesome-icon icon="phone" />
    </b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      🐂🍺
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "Alerts",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  }
};
</script>
