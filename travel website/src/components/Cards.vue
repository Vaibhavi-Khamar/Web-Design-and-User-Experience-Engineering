<template>
  <div>
    <div>
      <b-card
        v-bind:title="title"
        v-bind:img-src="url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        bg-variant="light"
      >
        <b-list-group v-for="(item, index) in description" :key="index">
          <b-list-group-item variant="success" href="#">{{
            item.text
          }}</b-list-group-item></b-list-group
        ><br />

        <b-button class="border-0" href="#">{{ buttonText }}</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cards",
  props: {
    url: String,
    title: String,
    description: Array,
    buttonText: String
  }
};
</script>
<style>
.card-body {
  background-color: #028090;
}
.card-title {
  color: #f0f3bd;
}
.list-group a {
  color: #f0f3bd;
  background-color: rgba(240, 243, 189, 0.6) !important;
}

.list-group a:hover {
  color: rgba(68, 68, 57, 0.6) !important;
}

.card a {
  color: white;
  background-color: rgba(240, 243, 189, 0.6);
}
</style>
