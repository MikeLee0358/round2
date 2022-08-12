<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="afterSubmit"
      :restaurant-initial="restaurant"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
const dummyData = {
  restaurant: {
    id: 1,
    name: "Marisa Strosin",
    tel: "(915) 693-2841 x2726",
    address: "84552 Abbott Plains",
    opening_hours: "08:00",
    description: "delectus",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=7.731113916946453",
    viewCounts: 2,
    createdAt: "2022-08-05T16:45:23.000Z",
    updatedAt: "2022-08-10T04:12:13.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
  },
};

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
    };
  },
  components: {
    AdminRestaurantForm,
  },
  methods: {
    afterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [key, value] of formData.entries()) {
        console.log(key + " : " + value);
      }
    },
    fetchData(restaurantId) {
      console.log("restaurantId", restaurantId);
      const { restaurant } = dummyData;
      const {
        id,
        name,
        CategoryId: categoryId,
        tel,
        address,
        description,
        image,
        opening_hours: openingHours,
      } = restaurant;
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
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchData(id);
  },
};
</script>