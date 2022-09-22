<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in comments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
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
      <hr />
    </div>
  </div>
</template>

<script>
import restaurantCommentsAPI from "../apis/restaurantComments";
import { Toast } from "../utils/helpers";
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
    async handleDeleteBtnClick(commentId) {
      try {
        await restaurantCommentsAPI.delete(commentId);

        this.$emit("delete-comment-event", commentId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "刪除失敗提示",
        });
      }
    },
  },
};
</script>
