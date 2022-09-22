<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :restaurantInitial="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :comments="comments" @delete-comment-event="deleteCommentEvent" />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-submit-comment="afterSubmitComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import { Toast } from "../utils/helpers";
import restaurantsAPI from "../apis/restaurants";
import { mapState } from "vuex";
export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        image: "",
        opening_hours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
        Category: {},
      },
      comments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        const { isFavorited, isLiked, restaurant } = data;

        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          ...restaurant, //覆蓋 this.restaurant
          isFavorited, //覆蓋 this.isFavorited
          isLiked, //覆蓋 this.isLiked
        };
        this.comments = restaurant.Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "串接餐廳失敗",
        });
      }
    },
    deleteCommentEvent(commentId) {
      console.log("del");
      console.log(" Click Btn", commentId);
      this.comments = this.comments.filter((comment) => {
        console.log(".id from Create", comment.id);
        return comment.id !== commentId;
      });
      console.log("delete restaurantComments", this.restaurantComments);
    },
    afterSubmitComment(payload) {
      //解構子元件透過＄emit送來的資料
      console.log("submit");
      const { text, restaurantId } = payload;

      //製作一個評論的資料，推送新評論， 資料來自子元件
      this.comments.push({
        text,
        RestaurantId: restaurantId,
        createdAt: new Date(),
        User: this.currentUser,
      });
    },
  },
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  // 從vuex取currentUser
  computed: {
    ...mapState(["currentUser"]),
  },
  // 元件的route改變，去重新抓取資料
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  watch: {
    comments(newValue) {
      this.comments = newValue;
    },
  },
};
</script>
