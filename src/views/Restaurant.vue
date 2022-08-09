<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :restaurantInitial="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :comments="comments"
      @delete-comment-event="deleteCommentEvent"
    />
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
    viewCounts: 1,
    createdAt: "2022-08-05T16:45:23.000Z",
    updatedAt: "2022-08-09T10:18:57.277Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 51,
        text: "Enim ducimus eum suscipit qui qui maxime beatae.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$dqB8VhS8o0e13.snx4PlXevbiLTd8YAkNr8fGelgYkuXGlIV9qPAu",
          isAdmin: true,
          image: null,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
        },
      },
      {
        id: 101,
        text: "Cum quam commodi.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$dqB8VhS8o0e13.snx4PlXevbiLTd8YAkNr8fGelgYkuXGlIV9qPAu",
          isAdmin: true,
          image: null,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
        },
      },
      {
        id: 1,
        text: "Eligendi quod nam ducimus.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$y/5joF4kT3BOUIe5/T8zauGKAcCdSzqr5wvfEp4rKwdXj0wgpcgua",
          isAdmin: false,
          image: null,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  id: 1,
  name: "root",
  email: "root@example.com",
  image: null,
  isAdmin: true,
};
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
      },
      comments: [],
      currentUser: dummyUser,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant ID: ", restaurantId);
      //只解構出dummyData的 isFavorited 和 isLiked來做使用
      const { isFavorited, isLiked } = dummyData;

      this.restaurant = {
        ...this.restaurant,
        ...dummyData.restaurant, //覆蓋 this.restaurant
        isFavorited, //覆蓋 this.isFavorited
        isLiked, //覆蓋 this.isLiked
      };
      this.comments = dummyData.restaurant.Comments;
    },
    deleteCommentEvent(commentId) {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterSubmitComment(payload) {
      //解構子元件透過＄emit送來的資料
      const { commentId, text, restaurantId } = payload;

      //製作一個評論的資料，推送新評論， 資料來自子元件
      this.comments.push({
        id: commentId,
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
};
</script>