<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
      <button type="submit" class="btn btn-primary mr-0" :disabled="isProcessing">
        {{ isProcessing ? "處理中" : "Submit" }}
      </button>
    </div>
  </form>
</template>

<script>
import restaurantCommentsAPI from "../apis/restaurantComments";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.text.trim()) return;
        this.isProcessing = true;
        //TODO 請求api伺服器，post資料
        console.log("api");
        const { data } = await restaurantCommentsAPI.create({
          text: this.text,
          restaurantId: this.restaurantId,
        });

        if (data.status !== "success") throw new Error(data.message);
        //$emit發送資料 讓父頁面去更新data 觸發渲染
        this.$emit("after-submit-comment", {
          text: this.text,
          restaurantId: this.restaurantId,
        });
        this.isProcessing = false;
        this.text = "";
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "提交失敗提示",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
