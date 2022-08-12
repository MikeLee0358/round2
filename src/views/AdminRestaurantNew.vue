<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="afterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";

export default {
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
  },
};
</script>