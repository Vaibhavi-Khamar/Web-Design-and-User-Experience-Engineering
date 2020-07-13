<template>
  <div class="home">
    <Alerts />
    <HeadJumbotron />
    <Containers />
    <FootJumbotron />
  </div>
</template>

<script>
// @ is an alias to /src
import Alerts from "../components/Alerts.vue";
import Containers from "../components/Containers.vue";
import HeadJumbotron from "../components/home/HeadJumbotron.vue";
import FootJumbotron from "../components/home/FootJumbotron.vue";

export default {
  name: "Home",
  components: {
    Alerts,
    Containers,
    HeadJumbotron,
    FootJumbotron
  }
};
</script>
