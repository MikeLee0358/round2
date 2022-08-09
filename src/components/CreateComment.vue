<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      text: "",
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      //TODO 請求api伺服器，post資料

      //$emit發送資料 讓父頁面去更新data 觸發渲染
      this.$emit("after-submit-comment", {
        commentId: uuidv4(),
        text: this.text,
        restaurantId: this.restaurantId,
      });
    },
  },
};
</script>