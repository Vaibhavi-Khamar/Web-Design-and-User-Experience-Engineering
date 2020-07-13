<template>
  <div id="Carousel">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1920"
      img-height="1080"
      fade
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="item in items"
        caption-tag="h1"
        :key="item.id"
        :img-src="item.imgSrc"
      >
        <div class="slideContent">
          <div style="display:inline-flex">
            <h1>{{ item.caption }}</h1>
            <b-badge pill v-bind:variant="item.badgeVariant">{{
              item.badgeText
            }}</b-badge>
          </div>
          <p>{{ item.text }}</p>
        </div>
      </b-carousel-slide>
    </b-carousel>

    <br />
  </div>
</template>

<script>
export default {
  name: "Carousal",
  data() {
    return {
      items: [
        {
          id: "1",
          caption: "Argentina",
          imgSrc:
            "https://36aizl3w7551i7pmd42qlm93-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/Argentina-Iguazu-Falls-Walking-Tour1.jpg",
          text:
            "Whether you’re coming for the tango, the massive Iguazu Falls, the gauchos, the Buenos Aires nightlife, or all of the above, there’s no shortage of reasons to visit Argentina. Not only is it one of the largest countries on Earth, it also hosts one of the greatest ecosystem varieties on the planet and is home to 30 national parks.",
          badgeVariant: "primary",
          badgeText: "CLASSIC"
        },
        {
          id: "2",
          caption: "Peru",
          imgSrc:
            "https://media.architecturaldigest.com/photos/5d1b7bbc0a923f000805a428/16:9/w_2560%2Cc_limit/GettyImages-981368050.jpg",
          text:
            "Peru is undeniably one of Latin America’s most iconic destinations. The numerous civilizations that have called Peru home for thousands of years have left alluring remnants to delve into, while the seemingly endless fiestas, delightful handicrafts, and delectable cuisine make it one of the most well-rounded destinations on Earth.",
          badgeVariant: "info",
          badgeText: "CHEAP"
        },
        {
          id: "3",
          caption: "Brazil",
          imgSrc:
            "https://www.ciee.org/sites/default/files/content/program/main-image/hero-rio-534214670.jpg",
          text:
            "As the largest country in Latin America and the fifth largest country in the world, Brazil packs in everything from the legendary Amazon, to the mountains of Chapada Diamantina, to Iguazu Falls, and – of course – 4,600 miles of legendary beaches.",
          badgeVariant: "danger",
          badgeText: "HOT"
        },
        {
          id: "4",
          caption: "Costa Rica",
          imgSrc:
            "https://www.wendywutours.co.uk/resource/upload/1143/banner-colours-of-costa-rica.jpg.webp",
          text:
            "As the planet’s leading conservation nation, Costa Rica is a paradise for nature lovers and adventurers alike. Squeezing 5% of the planets total biodiversity into just 0.1% of the planet’s total land mass means Costa Rica’s first-rate wildlife refuges, rafting excursions, surfing hot spots and copious hiking trails always deliver on discovery.",
          badgeVariant: "success",
          badgeText: "NATURE"
        },
        {
          id: "5",
          caption: "Chile",
          imgSrc:
            "https://www.andbeyond.com/wp-content/uploads/sites/5/Torres-Del-Paine-Lake-and-the-Horns-in-Patagonia.jpg",
          text:
            "The 2,700-mile sliver of a country contains an eclectic array of landscapes with the Andes running its whole length. Though most travelers dream first of hiking Patagonia, we strongly encourage you to linger a little longer in Chile. Discover some of our most popular adventures in Chile, including The 'W' Hike, one of the most famous hikes through Patagonia, and the idyllic Lake District and Chiloe Island trip.",
          badgeVariant: "light",
          badgeText: "EXPLORE"
        }
      ]
    };
  }
};
</script>
<style>
.carousel-caption {
  color: white;
}
.badge {
  height: 60%;
}
.slideContent {
  color: #f0f3bd;
  background: rgba(2, 128, 144, 0.2);
}
</style>
