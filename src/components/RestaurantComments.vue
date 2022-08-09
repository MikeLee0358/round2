<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div
      v-for="comment in comments"
      :key="comment.id"
    >
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-show="comment.User.isAdmin"
          @click.stop.prevent="handleDeleteBtnClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
export default {
  mixins: [fromNowFilter],
  name: "restaurantComments",
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDeleteBtnClick(commentId) {
      //1. TODO 請求ＡＰＩ伺服器，刪除id為commentId的評論

      //2. 透過$emit 請求父頁面做某事件
      //由父元素統一修改data資料 然後重新渲染
      //如果在子元件操作，會更新畫面，但是資料不會同步。
      this.$emit("delete-comment-event", commentId);
    },
  },
};
</script>