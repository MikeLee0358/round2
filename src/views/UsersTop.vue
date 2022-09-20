<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHESYBfnGDai5emb3esXS6G5GgWQuS8c-hTy3yJ4eitbH88el42zEYbZpKnS2sOSZo8So&usqp=CAU"
            width="140px"
            height="140px"
          />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteBtn(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="addBtn(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    NavTabs,
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await usersAPI.getTopUsers();
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "錯誤，請稍後再試。",
        });
      }
    },
    async addBtn(userId) {
      try {
        //使用者按下BTN就會執行此程式，讓user的isFollower的布林值與剛開始相反
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "輸入追蹤失敗",
        });
      }
    },
    async deleteBtn(userId) {
      try {
        //使用者按下BTN就會執行此程式，讓user的isFollower的布林值與剛開始相反
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "輸入追蹤失敗",
        });
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
