<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
        <!-- 最新餐廳 NewestRestaurants -->
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
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
    },
    {
      id: 3,
      name: "Jamal Graham",
      tel: "(657) 037-2359 x761",
      address: "5758 Powlowski Track",
      opening_hours: "08:00",
      description:
        "Voluptatibus soluta aut rerum vel. Sunt et sed aperiam occaecati illum repudiandae. Non ut voluptatem provident nisi est iure velit vitae necessitatibus. Maiores quam ad qui delectus nisi totam tempore. Ex pariatur odio animi ab minima molestiae et optio sed.",
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
    },
    {
      id: 7,
      name: "Louvenia Considine",
      tel: "(950) 791-8821",
      address: "77480 Dare Center",
      opening_hours: "08:00",
      description:
        "Qui velit sequi voluptas architecto asperiores rerum. Nihil eos aut. Autem et ab quae autem est et ea enim.",
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
    },
    {
      id: 8,
      name: "Miss Eryn Hoeger",
      tel: "1-453-428-8056 x784",
      address: "516 Cruickshank Roads",
      opening_hours: "08:00",
      description:
        "Sunt id aut quibusdam sint et maiores doloremque sed.\nConsequatur minus molestias.",
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
    },
    {
      id: 9,
      name: "Mose Gorczany",
      tel: "1-469-407-6203",
      address: "05935 Streich Manor",
      opening_hours: "08:00",
      description:
        "Maiores dolor debitis. Odio molestias totam consectetur repudiandae molestiae. Aut sapiente nemo facilis. Vel exercitationem et. Hic iure est labore eum debitis voluptatem.",
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
    },
    {
      id: 10,
      name: "Maritza Johnston",
      tel: "1-772-871-3326",
      address: "2798 Jamal Glen",
      opening_hours: "08:00",
      description:
        "Et perspiciatis molestiae hic ut.\nCumque beatae natus accusamus eos deserunt et.\nQuis deserunt quod.\nDoloremque temporibus sit ut non ipsa quibusdam.",
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
    },
  ],
  comments: [
    {
      id: 6,
      text: "Perferendis modi aut asperiores et harum ut et.",
      UserId: 1,
      RestaurantId: 6,
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
      Restaurant: {
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
      },
    },
    {
      id: 19,
      text: "Labore et sed vel unde et et voluptas.",
      UserId: 1,
      RestaurantId: 19,
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
      Restaurant: {
        id: 19,
        name: "Leilani Durgan",
        tel: "(977) 791-4226",
        address: "3853 Orpha Flats",
        opening_hours: "08:00",
        description: "non",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=40.72163599797551",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 60,
      text: "Repellat dolorem beatae molestias doloremque.",
      UserId: 1,
      RestaurantId: 10,
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
      Restaurant: {
        id: 10,
        name: "Maritza Johnston",
        tel: "1-772-871-3326",
        address: "2798 Jamal Glen",
        opening_hours: "08:00",
        description:
          "Et perspiciatis molestiae hic ut.\nCumque beatae natus accusamus eos deserunt et.\nQuis deserunt quod.\nDoloremque temporibus sit ut non ipsa quibusdam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=88.25019605109115",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 76,
      text: "Alias sed ut aut dignissimos commodi at aut.",
      UserId: 1,
      RestaurantId: 26,
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
      Restaurant: {
        id: 26,
        name: "Citlalli Jerde",
        tel: "(653) 368-2016 x91307",
        address: "24305 Aniya Vista",
        opening_hours: "08:00",
        description: "ratione et dolores",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=33.14898229294867",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 109,
      text: "Sed deleniti optio occaecati quidem quaerat ea natus.",
      UserId: 1,
      RestaurantId: 9,
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
      Restaurant: {
        id: 9,
        name: "Mose Gorczany",
        tel: "1-469-407-6203",
        address: "05935 Streich Manor",
        opening_hours: "08:00",
        description:
          "Maiores dolor debitis. Odio molestias totam consectetur repudiandae molestiae. Aut sapiente nemo facilis. Vel exercitationem et. Hic iure est labore eum debitis voluptatem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=12.632111102608468",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 143,
      text: "Sed fugit voluptatem ipsam non voluptatem laboriosam ducimus laborum eius.",
      UserId: 1,
      RestaurantId: 43,
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
      Restaurant: {
        id: 43,
        name: "Shanna Lueilwitz",
        tel: "1-010-899-2109 x37610",
        address: "142 Erdman Prairie",
        opening_hours: "08:00",
        description:
          "Qui ea iste ipsa sed aut nobis voluptatem.\nSed necessitatibus et tempora.\nVel dolorem temporibus qui ea laudantium dolorem.\nVoluptatem aut beatae voluptatem sint vel impedit animi quia.\nEt in asperiores impedit.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=31.423983269292144",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 22,
      text: "Ea aliquid enim facilis modi architecto.",
      UserId: 2,
      RestaurantId: 22,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$s2TPzQYbM0wFasPcqlYWjep/Ye8DQ1hMFeQVcIo1zfg8UbtnXDan2",
        isAdmin: false,
        image: null,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      Restaurant: {
        id: 22,
        name: "Nakia Hermiston",
        tel: "1-103-144-6086 x10204",
        address: "785 Dorothy Mount",
        opening_hours: "08:00",
        description:
          "Velit perspiciatis cupiditate rerum reiciendis aperiam. Veritatis voluptate molestiae consequuntur magnam labore et facere officiis. Aut voluptatum nobis ut autem corrupti quos animi. Ullam atque accusantium alias delectus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=98.75100358880115",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 39,
      text: "Ad unde qui a accusamus autem fuga omnis enim maxime.",
      UserId: 2,
      RestaurantId: 39,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$s2TPzQYbM0wFasPcqlYWjep/Ye8DQ1hMFeQVcIo1zfg8UbtnXDan2",
        isAdmin: false,
        image: null,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      Restaurant: {
        id: 39,
        name: "Ashton Streich",
        tel: "857.107.7009 x7147",
        address: "1520 Feest Mall",
        opening_hours: "08:00",
        description:
          "Consequuntur dolores illum dolorum perferendis nesciunt. Rerum velit exercitationem ut aut autem. Voluptas assumenda aut ratione sunt qui non nihil. Adipisci vitae quisquam et esse facere asperiores ratione. Quo error perspiciatis harum consequatur atque excepturi sed. Voluptas illum voluptatem aperiam quia.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=45.98964946937307",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 71,
      text: "Magni qui ex a dolorem adipisci velit minima.",
      UserId: 2,
      RestaurantId: 21,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$s2TPzQYbM0wFasPcqlYWjep/Ye8DQ1hMFeQVcIo1zfg8UbtnXDan2",
        isAdmin: false,
        image: null,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      Restaurant: {
        id: 21,
        name: "Mr. Bernice Welch",
        tel: "214.095.9848",
        address: "0916 Boehm Common",
        opening_hours: "08:00",
        description:
          "Facere aliquid neque omnis vel. Perspiciatis adipisci perspiciatis iste repudiandae veritatis voluptatibus ullam autem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=32.67970054302343",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 97,
      text: "Esse quia tempore saepe dolorum assumenda tempora.",
      UserId: 2,
      RestaurantId: 47,
      createdAt: "2022-08-05T16:45:23.000Z",
      updatedAt: "2022-08-05T16:45:23.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$s2TPzQYbM0wFasPcqlYWjep/Ye8DQ1hMFeQVcIo1zfg8UbtnXDan2",
        isAdmin: false,
        image: null,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
      Restaurant: {
        id: 47,
        name: "Chadrick Waters",
        tel: "1-115-212-4397 x867",
        address: "918 Toy Throughway",
        opening_hours: "08:00",
        description:
          "Voluptate eos architecto corrupti illo qui et excepturi hic ut.\nConsequatur consequuntur eos repudiandae dolores suscipit fuga cum ut ipsa.\nVoluptate ipsum est.\nPossimus laboriosam et quas sunt ducimus.\nLaboriosam sit incidunt molestiae nobis blanditiis omnis voluptatem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=83.82293548618756",
        viewCounts: 0,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        CategoryId: 4,
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  methods: {
    fetchData() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>