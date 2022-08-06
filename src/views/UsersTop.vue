<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div
        class="col-3"
        v-for="user in users"
        :key="user.id"
      >
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHESYBfnGDai5emb3esXS6G5GgWQuS8c-hTy3yJ4eitbH88el42zEYbZpKnS2sOSZo8So&usqp=CAU"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="toggleBtn(user)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="toggleBtn(user)"
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

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$dqB8VhS8o0e13.snx4PlXevbiLTd8YAkNr8fGelgYkuXGlIV9qPAu",
      isAdmin: true,
      image: null,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      Followers: [],
      FollowerCount: 10,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$s2TPzQYbM0wFasPcqlYWjep/Ye8DQ1hMFeQVcIo1zfg8UbtnXDan2",
      isAdmin: false,
      image: null,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      Followers: [],
      FollowerCount: 3,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$y/5joF4kT3BOUIe5/T8zauGKAcCdSzqr5wvfEp4rKwdXj0wgpcgua",
      isAdmin: false,
      image: null,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      Followers: [],
      FollowerCount: 8,
      isFollowed: false,
    },
  ],
};
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
    fetchData() {
      this.users = dummyData.users;
    },
    toggleBtn(user) {
      //使用者按下BTN就會執行此程式，讓user的isFollower的布林值與剛開始相反
      user.isFollowed = !user.isFollowed;

      //追蹤(true)，數量+1 ; 取消脧中(false)，數量-1
      if (user.isFollowed === true) user.FollowerCount++;
      else user.FollowerCount--;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>