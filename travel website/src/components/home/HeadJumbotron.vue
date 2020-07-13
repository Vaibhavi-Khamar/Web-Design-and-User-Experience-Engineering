<template>
  <div id="jumbotron">
    <b-jumbotron id="head">
      <div style="display:inline-block; width:80%">
        <b-row>
          <b-col>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text
                  ><font-awesome-icon icon="search"
                /></b-input-group-text>
              </b-input-group-prepend>

              <b-form-input
                type="text"
                placeholder="e.g. Hotels, Restaurants"
              ></b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text
                  ><font-awesome-icon icon="map-marker-alt"
                /></b-input-group-text>
              </b-input-group-prepend>

              <b-form-input type="text" placeholder="Anywhere"></b-form-input>
            </b-input-group>
          </b-col>
          <b-button>Search</b-button>
        </b-row>
      </div>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "Jumbotron",
  components: {}
};
</script>
<style>
#jumbotron {
  padding-top: 0px;
}
#head {
  background-color: #00a896;
  color: white;
}
.input-group-text {
  background-color: #f0f3bd;
}

button {
  color: #05668d !important;
  background-color: #f0f3bd !important;
  border: none !important;
}
</style>
