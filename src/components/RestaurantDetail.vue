<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name || "未分類" }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.opening_hours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'dash-board', params: { id: restaurant.id } }"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        @click.stop.prevent="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLiked(restaurant.id)"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        @click.stop.prevent="addLiked(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
export default {
  name: "RestaurantDetail",
  props: {
    restaurantInitial: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.restaurantInitial,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") throw new Error(data.message);

        this.restaurant = {
          ...this.restaurant,
          isFavorited: !this.restaurant.isFavorited,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "add favorite串接失敗",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") throw new Error(data.message);

        this.restaurant = {
          ...this.restaurant,
          isFavorited: !this.restaurant.isFavorited,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "delete favorite串接失敗",
        });
      }
    },
    async addLiked(restaurantId) {
      try {
        const { data } = await usersAPI.addLiked({ restaurantId });
        if (data.status !== "success") throw new Error(data.message);

        this.restaurant = {
          ...this.restaurant,
          isLiked: !this.restaurant.isLiked,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "add like串接失敗",
        });
      }
    },
    async deleteLiked(restaurantId) {
      try {
        const { data } = await usersAPI.deleteLiked({ restaurantId });
        if (data.status !== "success") throw new Error(data.message);

        this.restaurant = {
          ...this.restaurant,
          isLiked: !this.restaurant.isLiked,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "delete like串接失敗",
        });
      }
    },
  },
  watch: {
    // 監測到新的值，去覆蓋原本的。
    restaurantInitial(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
};
</script>
