<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="profile.name"
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="profile.image"
          v-if="profile.image"
          width="200"
          height="200"
          class="d-block img-thumbnail mb-3"
        >
        <input
          id="image"
          accept="image/*"
          class="form-control-file"
          name="image"
          type="file"
          @change="fileToURL"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>



<script>
const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$dqB8VhS8o0e13.snx4PlXevbiLTd8YAkNr8fGelgYkuXGlIV9qPAu",
    isAdmin: true,
    image: null,
    createdAt: "2022-08-05T16:45:23.000Z",
    updatedAt: "2022-08-05T16:45:23.000Z",
    Comments: [
      {
        id: 2,
        text: "Officia architecto quia esse.",
        UserId: 1,
        RestaurantId: 2,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 5,
        text: "Quod sint maxime nemo totam hic.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 6,
        text: "Perferendis modi aut asperiores et harum ut et.",
        UserId: 1,
        RestaurantId: 6,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 7,
        text: "Sunt quis aut velit earum debitis sit autem.",
        UserId: 1,
        RestaurantId: 7,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 8,
        text: "Sunt molestiae repudiandae natus optio.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 9,
        text: "Dolores recusandae labore est iusto voluptatum veritatis officiis.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 10,
        text: "Error odio impedit atque voluptate voluptatem voluptatum.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 13,
        text: "Consectetur ducimus sunt laborum quo.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 13,
          name: "Fermin McDermott",
          tel: "1-586-684-4238 x893",
          address: "77869 Maritza Crossing",
          opening_hours: "08:00",
          description:
            "Debitis hic ab quod minima facilis atque exercitationem ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=3.825862235508626",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 16,
        text: "Magni voluptatibus quis magni placeat eos rerum laboriosam.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 16,
          name: "Miss Tito Davis",
          tel: "778-513-0719",
          address: "14878 Homenick Road",
          opening_hours: "08:00",
          description: "Omnis amet ea ut inventore ipsum aut dolorem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=82.9743666414812",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 18,
        text: "Quo non et quasi quia qui eligendi eos autem occaecati.",
        UserId: 1,
        RestaurantId: 18,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 18,
          name: "Katharina Durgan PhD",
          tel: "686-647-9512 x0597",
          address: "156 Casper Dale",
          opening_hours: "08:00",
          description:
            "Distinctio enim saepe unde quo. Quia ut accusamus dolor deserunt est placeat. Esse sapiente molestiae et est ad qui ullam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=62.39220914735941",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 19,
        text: "Labore et sed vel unde et et voluptas.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 20,
        text: "Quia dolores temporibus omnis id ipsa deserunt dolorum.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 20,
          name: "Dasia Kassulke",
          tel: "1-041-738-2045 x2598",
          address: "76631 Abernathy Summit",
          opening_hours: "08:00",
          description:
            "Blanditiis laborum possimus modi. Et dolores natus velit eos est. Voluptatibus ut occaecati quam repudiandae nulla aliquid autem atque quae. Labore animi soluta animi mollitia optio sapiente inventore et consequatur. Eveniet recusandae voluptas placeat commodi. Aut neque fuga.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.492894616330464",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 21,
        text: "Vel quisquam voluptatum optio.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 23,
        text: "Cumque quos quisquam laboriosam et qui vero ratione omnis.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 23,
          name: "Rory Crona",
          tel: "1-405-801-3839 x030",
          address: "905 Franco Point",
          opening_hours: "08:00",
          description: "enim et at",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.33314983549562",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 38,
        text: "Cum harum consequuntur rem.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 38,
          name: "Dahlia Jakubowski",
          tel: "(285) 556-8116 x0988",
          address: "3536 Mosciski Highway",
          opening_hours: "08:00",
          description:
            "Odio impedit error fuga saepe sit consequuntur. Suscipit voluptatibus quibusdam eaque sit. Ut quia dicta. Error libero deleniti itaque. Consectetur odio minus voluptatem voluptatem est.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.10564848329606",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 51,
        text: "Enim ducimus eum suscipit qui qui maxime beatae.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 53,
        text: "Exercitationem voluptates corrupti exercitationem vitae et.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 54,
        text: "Perferendis nulla molestiae est minima voluptas et voluptatem nisi.",
        UserId: 1,
        RestaurantId: 4,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 60,
        text: "Repellat dolorem beatae molestias doloremque.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 61,
        text: "Aperiam rerum maxime.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 11,
          name: "Victoria Larkin",
          tel: "(501) 147-5784",
          address: "45491 Schmitt Avenue",
          opening_hours: "08:00",
          description:
            "Sit eum et consectetur cum nihil.\nOdit laudantium facilis dolores amet quod.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=41.58332464042487",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 62,
        text: "Nisi velit non est pariatur.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 12,
          name: "Althea Gerlach",
          tel: "952.708.3653 x2328",
          address: "065 Rosemary Spring",
          opening_hours: "08:00",
          description:
            "Voluptate provident est reiciendis veritatis.\nUt et et et.\nDeleniti asperiores quaerat sint fugit placeat voluptas voluptatum sunt.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=51.93224764579683",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 65,
        text: "Dolorem ut quaerat labore itaque quis est fuga.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 15,
          name: "Cassidy O'Keefe",
          tel: "(029) 292-5858 x043",
          address: "764 Cordelia Stravenue",
          opening_hours: "08:00",
          description:
            "Ex rerum et ut pariatur dolorum.\nVoluptatum corrupti excepturi.\nNon exercitationem veritatis molestiae eaque.\nOmnis sint nihil.\nQuisquam tenetur voluptatem et explicabo rerum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=47.018413339700246",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 66,
        text: "Ut reprehenderit fuga quo dolore autem vel sunt.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 16,
          name: "Miss Tito Davis",
          tel: "778-513-0719",
          address: "14878 Homenick Road",
          opening_hours: "08:00",
          description: "Omnis amet ea ut inventore ipsum aut dolorem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=82.9743666414812",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 72,
        text: "Beatae vitae ducimus adipisci est non debitis tempora eum sit.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 73,
        text: "Harum consequatur qui dicta reprehenderit laboriosam est occaecati.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 23,
          name: "Rory Crona",
          tel: "1-405-801-3839 x030",
          address: "905 Franco Point",
          opening_hours: "08:00",
          description: "enim et at",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.33314983549562",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 75,
        text: "Deserunt in labore voluptatem et.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 25,
          name: "Tommie Hoppe",
          tel: "624-934-7125 x576",
          address: "365 Krystina Crescent",
          opening_hours: "08:00",
          description:
            "Ea non assumenda in laborum explicabo est id.\nEt repudiandae ut cum fugit dignissimos.\nVoluptates ut nobis est.\nQuaerat iure laudantium beatae deserunt minus occaecati magnam placeat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=64.88353046955689",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 76,
        text: "Alias sed ut aut dignissimos commodi at aut.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 82,
        text: "Possimus eligendi nobis.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 32,
          name: "Amelia Kohler",
          tel: "895.240.9668 x052",
          address: "318 Payton Valley",
          opening_hours: "08:00",
          description:
            "Consectetur ut molestiae voluptas esse. Vel voluptatibus possimus. Quibusdam necessitatibus magnam possimus alias non minima. Voluptate nemo magnam unde molestias. Quos nihil et rerum voluptas non soluta fuga quos doloribus. Ea accusamus quidem tempora dolores hic animi officiis quas.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=37.75693182119144",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 85,
        text: "Fugiat tempora exercitationem minima.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 35,
          name: "Brody Auer",
          tel: "773.944.1008 x1216",
          address: "754 Tromp Springs",
          opening_hours: "08:00",
          description:
            "Saepe mollitia expedita hic. Repellat placeat et aspernatur inventore doloribus omnis. Cumque architecto consequatur corporis dolor totam et iste doloremque. Aliquid quia modi voluptate officiis distinctio recusandae aut. Rerum debitis nobis itaque impedit quae itaque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.29887561934923",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 92,
        text: "Dolor delectus maxime facere eum autem ipsum autem.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 42,
          name: "Bettye Kessler",
          tel: "1-000-263-6264",
          address: "4723 Florence Creek",
          opening_hours: "08:00",
          description: "Omnis et quia non recusandae.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=17.17011127646526",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 98,
        text: "Rerum est et.",
        UserId: 1,
        RestaurantId: 48,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 48,
          name: "Melody Fadel",
          tel: "(135) 617-3740",
          address: "8565 Oleta Canyon",
          opening_hours: "08:00",
          description:
            "Consequatur recusandae iure et officia iusto consectetur provident aspernatur.\nUt veritatis laudantium.\nIure ipsum ullam architecto temporibus.\nEveniet fuga id atque id voluptatibus qui in ducimus et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.964105722698484",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 100,
        text: "Ipsam accusantium omnis eum.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 50,
          name: "Jolie Pacocha",
          tel: "289-485-9821 x593",
          address: "642 Rebekah Prairie",
          opening_hours: "08:00",
          description:
            "Sint quod voluptatem explicabo sint architecto odit.\nEst corporis a ipsa in fugit odio assumenda.\nAssumenda minima molestiae incidunt commodi et.\nDignissimos voluptates sunt et voluptatem fugiat deserunt minima.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=94.5163210207606",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 101,
        text: "Cum quam commodi.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 105,
        text: "Tempora voluptas mollitia.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 109,
        text: "Sed deleniti optio occaecati quidem quaerat ea natus.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 111,
        text: "Debitis qui et accusamus ut enim quia ipsa.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 11,
          name: "Victoria Larkin",
          tel: "(501) 147-5784",
          address: "45491 Schmitt Avenue",
          opening_hours: "08:00",
          description:
            "Sit eum et consectetur cum nihil.\nOdit laudantium facilis dolores amet quod.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=41.58332464042487",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 113,
        text: "Odio id ut sunt omnis magni facere.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 13,
          name: "Fermin McDermott",
          tel: "1-586-684-4238 x893",
          address: "77869 Maritza Crossing",
          opening_hours: "08:00",
          description:
            "Debitis hic ab quod minima facilis atque exercitationem ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=3.825862235508626",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 114,
        text: "Iusto quis ducimus.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 14,
          name: "Jammie Gibson",
          tel: "1-578-516-1695 x9989",
          address: "9660 Shields Unions",
          opening_hours: "08:00",
          description:
            "Est deserunt doloribus sed in nemo ut nulla tempora vitae. Dolorum provident commodi laboriosam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=63.48783674570433",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 119,
        text: "Saepe adipisci rerum natus incidunt quis dolorem qui dolorem.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 125,
        text: "Vel sunt fuga dolorem velit.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 25,
          name: "Tommie Hoppe",
          tel: "624-934-7125 x576",
          address: "365 Krystina Crescent",
          opening_hours: "08:00",
          description:
            "Ea non assumenda in laborum explicabo est id.\nEt repudiandae ut cum fugit dignissimos.\nVoluptates ut nobis est.\nQuaerat iure laudantium beatae deserunt minus occaecati magnam placeat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=64.88353046955689",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 138,
        text: "Sit velit et in optio ratione necessitatibus totam numquam dolorem.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 38,
          name: "Dahlia Jakubowski",
          tel: "(285) 556-8116 x0988",
          address: "3536 Mosciski Highway",
          opening_hours: "08:00",
          description:
            "Odio impedit error fuga saepe sit consequuntur. Suscipit voluptatibus quibusdam eaque sit. Ut quia dicta. Error libero deleniti itaque. Consectetur odio minus voluptatem voluptatem est.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.10564848329606",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 139,
        text: "Soluta aut velit vel voluptate.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 143,
        text: "Sed fugit voluptatem ipsam non voluptatem laboriosam ducimus laborum eius.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
        id: 144,
        text: "Sequi ad maiores veritatis temporibus natus natus quasi.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 44,
          name: "Krystina Heaney",
          tel: "051-851-4362 x0062",
          address: "7928 Smith Gateway",
          opening_hours: "08:00",
          description:
            "Ut molestias quia aut dolore. Aperiam eum nihil non inventore. Non ea modi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=5.690463258470668",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 147,
        text: "Debitis ratione repudiandae ea optio aut sunt rerum.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
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
      {
        id: 150,
        text: "Cupiditate repudiandae et.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
        Restaurant: {
          id: 50,
          name: "Jolie Pacocha",
          tel: "289-485-9821 x593",
          address: "642 Rebekah Prairie",
          opening_hours: "08:00",
          description:
            "Sint quod voluptatem explicabo sint architecto odit.\nEst corporis a ipsa in fugit odio assumenda.\nAssumenda minima molestiae incidunt commodi et.\nDignissimos voluptates sunt et voluptatem fugiat deserunt minima.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=94.5163210207606",
          viewCounts: 0,
          createdAt: "2022-08-05T16:45:23.000Z",
          updatedAt: "2022-08-05T16:45:23.000Z",
          CategoryId: 4,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  data() {
    return {
      profile: {
        name: "",
        image: "",
      },
    };
  },
  methods: {
    fetchUser(id) {
      console.log(id);
      this.profile = {
        ...this.profile,
        ...dummyUser.profile,
      };
    },
    fileToURL(e) {
      const { files } = e.target;
      const imageURL = window.URL.createObjectURL(files[0]);

      files.length === 0
        ? (this.profile.image = "")
        : (this.profile.image = imageURL);
    },
    handleSubmit(e) {
      const { form } = e.target;
      const formData = new FormData(form);
      console.log(formData);
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>