<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{name:'restaurant', params: { id: restaurant.id} }">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數： {{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{name:'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="toggleFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="toggleFavorite(restaurant)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Jolie Pacocha",
      tel: "289-485-9821 x593",
      address: "642 Rebekah Prairie",
      opening_hours: "08:00",
      description: "Sint quod voluptatem explicabo sint architecto odi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.5163210207606",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Mrs. Aubree Hettinger",
      tel: "(378) 580-0572",
      address: "93929 Renner Locks",
      opening_hours: "08:00",
      description: "Minima illum ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.9905877702045585",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Melody Fadel",
      tel: "(135) 617-3740",
      address: "8565 Oleta Canyon",
      opening_hours: "08:00",
      description: "Consequatur recusandae iure et officia iusto conse",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.964105722698484",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Chadrick Waters",
      tel: "1-115-212-4397 x867",
      address: "918 Toy Throughway",
      opening_hours: "08:00",
      description: "Voluptate eos architecto corrupti illo qui et exce",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.82293548618756",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Julius Harris",
      tel: "390-125-8305 x07452",
      address: "55818 Eunice Cape",
      opening_hours: "08:00",
      description: "ipsum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.45792999430952",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Santino Abbott II",
      tel: "(572) 689-5486",
      address: "713 Micah Village",
      opening_hours: "08:00",
      description: "Magnam nisi harum aut facilis unde facilis esse op",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.6027032997051",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Krystina Heaney",
      tel: "051-851-4362 x0062",
      address: "7928 Smith Gateway",
      opening_hours: "08:00",
      description: "Ut molestias quia aut dolore. Aperiam eum nihil no",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.690463258470668",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Shanna Lueilwitz",
      tel: "1-010-899-2109 x37610",
      address: "142 Erdman Prairie",
      opening_hours: "08:00",
      description: "Qui ea iste ipsa sed aut nobis voluptatem.\nSed nec",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.423983269292144",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Bettye Kessler",
      tel: "1-000-263-6264",
      address: "4723 Florence Creek",
      opening_hours: "08:00",
      description: "Omnis et quia non recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.17011127646526",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Emmitt Witting",
      tel: "666-958-3477",
      address: "58743 Schinner Shore",
      opening_hours: "08:00",
      description: "quia molestiae nihil",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.19903377100732",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  components: {
    NavTabs,
  },
  methods: {
    fetchData() {
      this.restaurants = dummyData.restaurants;
    },
    toggleFavorite(restaurant) {
      restaurant.isFavorited = !restaurant.isFavorited;

      //isFavorited is True ?  yes: count++  no: count--
      restaurant.isFavorited
        ? restaurant.FavoriteCount++
        : restaurant.FavoriteCount--;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>