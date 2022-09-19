<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
        <!-- 最新餐廳 NewestRestaurants -->
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import restaurantsFeedsAPI from "../apis/restaurantsFeeds";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  methods: {
    async fetchData() {
      try {
        const response = await restaurantsFeedsAPI.getRestaurantsFeeds();
        const { comments, restaurants } = response.data;
        this.restaurants = restaurants;
        this.comments = comments;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "錯誤，請稍後再試。",
        });
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
