<template>
  <div>
    <b-jumbotron
      id="foot"
      header-tag="h3"
      header-level="5"
      header="Join us for exclusive deals & rates — it’s free."
      lead="Be the first to know about breaking news and exclusive deals from
        JUST-GO."
    >
      <div style="display:inline-flex; width:40%">
        <b-input-group>
          <b-form-input
            type="email"
            placeholder="Enter your email"
          ></b-form-input>
          <b-button variant="info">Sign up</b-button>
        </b-input-group>
      </div>
      <br />
      <br />
      <hr width="80%" color="#f0f3bd" size="3" />
      <div style="display:inline-block; width:40%">
        <b-row>
          <b-col v-for="item in outLinks" :key="item.id">
            <b-link v-bind:href="item.src">
              <font-awesome-icon v-bind:icon="['fab', item.name]" size="2x" />
            </b-link>
          </b-col>
        </b-row>
      </div>
      <hr width="80%" color="#f0f3bd" size="3" />
      <div style="display:inline-block; width:70%">
        <b-row>
          <b-col v-for="item in inLinks" :key="item.id">
            <b-link v-bind:href="item.src">
              <p>{{ item.name }}</p>
            </b-link>
          </b-col>
        </b-row>
      </div>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      outLinks: [
        {
          id: "1",
          name: "github",
          src: "https://github.com/SylvanWang/info6150-spring2020"
        },
        {
          id: "2",
          name: "facebook"
        },
        {
          id: "3",
          name: "twitter"
        },
        {
          id: "4",
          name: "linkedin"
        },
        {
          id: "5",
          name: "vimeo"
        },
        {
          id: "6",
          name: "youtube"
        },
        {
          id: "7",
          name: "instagram"
        }
      ],
      inLinks: [
        {
          id: "1",
          name: "About us"
        },
        {
          id: "2",
          name: "Career"
        },
        {
          id: "3",
          name: "Blog"
        },
        {
          id: "4",
          name: "Terms"
        },
        {
          id: "5",
          name: "Support"
        },
        {
          id: "6",
          name: "Sitemap"
        }
      ]
    };
  }
};
</script>
<style>
#foot {
  color: #f0f3bd;
  background-color: #05668d;
}
a {
  color: white;
}
a :hover {
  color: #f0f3bd;
}
</style>
