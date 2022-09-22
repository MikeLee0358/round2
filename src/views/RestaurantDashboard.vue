<template>
  <div class="container py-5" v-show="isProcessing">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name || "未分類" }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurant: {
        Category: {},
        Comments: [],
      },
      isProcessing: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        const { id } = this.$route.params;
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId: id });
        this.restaurant = data.restaurant;
        this.isProcessing = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "dash board串接失敗",
        });
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
