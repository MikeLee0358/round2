<template>
  <div class="container">
    <div class="card mb-3">
      <!-- profile -->
      <UserProfileCard
        :profile="profile"
        :current-user="currentUser.id === profile.id"
        :initialIsFollowed="isFollowed"
      />
    </div>
    <div class="row">
      <div class="col-md-4">
        <!-- 1 -->
        <UserFollowingsCard :followings="profile.Followings" />
        <br />
        <!-- 2 -->
        <UserFollowersCard :followers="profile.Followers" />
      </div>
      <div class="col-md-8">
        <!-- 1 -->
        <UserCommentsCard :comments="profile.Comments" />
        <br />
        <!-- 2 -->
        <UserFavoritedRestaurantsCard :favors="profile.FavoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
    };
  },
  methods: {
    async fetchData(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        this.profile = {
          ...this.profile,
          ...data.profile,
        };
        this.isFollowed = data.isFollowed;
        console.log(data.isFollowed);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "抓取user失敗",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchData(id);
  },
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchData(id);

    next();
  },
};
</script>
