<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favors.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favor in favors"
        :key="favor.id"
        :to="{ name:'restaurant', params: {id: favor.id} }"
      >
        <img
          :src="favor.image"
          width="60"
          height="60"
          class="avatar px-1"
        >
      </router-link>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    favors: {
      type: Array,
      required: true,
    },
  },
};
</script>