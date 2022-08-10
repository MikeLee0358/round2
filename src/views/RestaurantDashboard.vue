<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name || '未分類' }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
    viewCounts: 2,
    createdAt: "2022-08-05T16:45:23.000Z",
    updatedAt: "2022-08-10T04:12:13.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
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
};
export default {
  data() {
    return {
      restaurant: {},
    };
  },
  methods: {
    fetchData() {
      this.restaurant = dummyData.restaurant;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>