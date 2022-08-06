<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Marisa Strosin",
      tel: "(915) 693-2841 x2726",
      address: "84552 Abbott Plains",
      opening_hours: "08:00",
      description: "delectus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.731113916946453",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Amani Frami",
      tel: "1-584-888-0949",
      address: "437 Georgianna Walk",
      opening_hours: "08:00",
      description: "facilis veniam dolores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.8225925647987",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Jamal Graham",
      tel: "(657) 037-2359 x761",
      address: "5758 Powlowski Track",
      opening_hours: "08:00",
      description: "Voluptatibus soluta aut rerum vel. Sunt et sed ape",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.472679464621734",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Ona Ward IV",
      tel: "1-573-649-5196 x86662",
      address: "350 Florine Extensions",
      opening_hours: "08:00",
      description: "dolorum nobis accusantium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.79523334718867",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Abelardo Gerhold",
      tel: "739-798-1060 x261",
      address: "793 Quigley Hills",
      opening_hours: "08:00",
      description: "nobis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.42900001000012",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Meredith Greenfelder",
      tel: "789-900-7807 x0816",
      address: "891 Jacobs Burg",
      opening_hours: "08:00",
      description: "voluptatem aperiam magnam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.75418935181337",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Louvenia Considine",
      tel: "(950) 791-8821",
      address: "77480 Dare Center",
      opening_hours: "08:00",
      description: "Qui velit sequi voluptas architecto asperiores rer",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.78862059959627",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Miss Eryn Hoeger",
      tel: "1-453-428-8056 x784",
      address: "516 Cruickshank Roads",
      opening_hours: "08:00",
      description: "Sunt id aut quibusdam sint et maiores doloremque s",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.737348204317904",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Mose Gorczany",
      tel: "1-469-407-6203",
      address: "05935 Streich Manor",
      opening_hours: "08:00",
      description: "Maiores dolor debitis. Odio molestias totam consec",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.632111102608468",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Maritza Johnston",
      tel: "1-772-871-3326",
      address: "2798 Jamal Glen",
      opening_hours: "08:00",
      description: "Et perspiciatis molestiae hic ut.\nCumque beatae na",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.25019605109115",
      viewCounts: 0,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
export default {
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
};
</script>