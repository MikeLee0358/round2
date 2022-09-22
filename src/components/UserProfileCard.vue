<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ profile.name }}</h5>
        <p class="card-text">
          {{ profile.email }}
        </p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ profile.FavoritedRestaurants.length }}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{ profile.Followings.length }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
          </li>
        </ul>
        <p v-if="currentUser">
          <router-link :to="{ name: 'user-edit', params: { id: profile.id } }"
            ><button type="submit" class="btn btn-primary">edit</button></router-link
          >
        </p>
        <p v-else>
          <button
            type="button"
            class="btn btn-danger"
            v-if="isFollowed"
            @click.stop.prevent="deleteFollow(profile.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="addFollow(profile.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    currentUser: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    async addFollow(userId) {
      try {
        // post API
        const { data, statusText } = await usersAPI.addFollowing({
          userId,
        });

        // 有顯示出來，代表post成功
        console.log("data", data);
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        // 切換按鈕
        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollow(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({
          userId,
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
};
</script>
