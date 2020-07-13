<template>
  <div id="Modal">
    <b-button v-b-modal.modal-1>Show Group Members</b-button>
    <b-modal id="modal-1" title="Group Member">
      <b-table :fields="fields" :items="members">
        <template v-slot:cell(badge)="data">
          <!-- <b class="text-info">{{ data.item.text }}</b> -->
          <b-badge v-bind:variant="data.item.type">{{
            data.item.text
          }}</b-badge>
        </template>
      </b-table>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      fields: ["nuid", "name", "badge"],
      members: [
        {
          nuid: "1492338",
          name: "Ziyu Zhou",
          type: "danger",
          text: "Danger"
        },
        {
          nuid: "1400149",
          name: "Vaibhavi Khamar",
          type: "success",
          text: "Danger"
        },
        {
          nuid: "1472783",
          name: "Mengqi Wang",
          type: "success",
          text: "Environmentally friendly"
        },
        {
          nuid: "1306506",
          name: "Devina Jaiswal",
          type: "success",
          text: "Danger"
        }
      ]
    };
  }
};
</script>
<style>
#Modal {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>
