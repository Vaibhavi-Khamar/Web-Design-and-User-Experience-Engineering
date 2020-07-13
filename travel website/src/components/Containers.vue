<template>
  <div>
    <b-container>
      <b-row>
        <b-col><Carousel /></b-col>
      </b-row>

      <b-row v-for="(items, index) in itemList" :key="index">
        <b-col v-for="(item, index) in items.items" :key="index">
          <Cards
            :title="item.title"
            :url="item.url"
            :description="item.dcrp"
            :buttonText="item.buttonText"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Cards from "./Cards.vue";
import Carousel from "./home/Carousel.vue";

export default {
  name: "Containers",
  data() {
    return {
      itemList: [
        {
          items: [
            {
              title: "Europe",
              url:
                "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "London"
                },
                {
                  text: "Amsterdam"
                },
                {
                  text: "Rome"
                },
                {
                  text: "Paris"
                },
                {
                  text: "Barcelona"
                }
              ],
              buttonText: "View all destinations in Europe"
            },
            {
              title: "Asia",
              url:
                "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Bangkok"
                },
                {
                  text: "Bali"
                },
                {
                  text: "Beijing"
                },
                {
                  text: "Tokyo"
                },
                {
                  text: "Mumbai"
                }
              ],
              buttonText: "View all destinations in Asia"
            },
            {
              title: "North America",
              url:
                "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Las Vegas"
                },
                {
                  text: "San Francisco"
                },
                {
                  text: "Miami"
                },
                {
                  text: "Toronto"
                },
                {
                  text: "New York"
                }
              ],
              buttonText: "View all destinations in America"
            }
          ]
        },
        {
          items: [
            {
              title: "Middle East",
              url:
                "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Dubai"
                },
                {
                  text: "Abu Dhabi"
                },
                {
                  text: "Doha"
                },
                {
                  text: "Muscat"
                },
                {
                  text: "Jerusalem"
                }
              ],
              buttonText: "View all destinations in Middle East"
            },
            {
              title: "Australia & South Pacific",
              url:
                "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Bora Bora"
                },
                {
                  text: "Sydney"
                },
                {
                  text: "Melbourne"
                },
                {
                  text: "Perth"
                },
                {
                  text: "Auckland"
                }
              ],
              buttonText: "View all destinations in Australia"
            },
            {
              title: "Africa",
              url:
                "https://images.pexels.com/photos/625414/pexels-photo-625414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Cape Town"
                },
                {
                  text: "Johannesburg"
                },
                {
                  text: "Nairobi"
                },
                {
                  text: "Mombasa"
                },
                {
                  text: "Cairo"
                }
              ],
              buttonText: "View all destinations in Africa"
            }
          ]
        }
      ]
    };
  },
  components: {
    Cards,
    Carousel
  }
};
</script>
