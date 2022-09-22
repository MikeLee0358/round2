<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="afterSubmit"
      :restaurant-initial="restaurant"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false,
    };
  },
  components: {
    AdminRestaurantForm,
  },
  methods: {
    async afterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });
        if (data.status !== "success") throw new Error(data.message);

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "送出失敗",
        });
      }
    },
    async fetchData(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });
        const {
          id,
          name,
          CategoryId: categoryId,
          tel,
          address,
          description,
          image,
          opening_hours: openingHours,
        } = data.restaurant;
        this.restaurant = {
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
          openingHours,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "串接restaurants失敗",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchData(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchData(id);
  },
};
</script>
