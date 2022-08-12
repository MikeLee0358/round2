<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id} }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{ name:'admin-restaurant-edit', params: {id: restaurant.id} }"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
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
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 17,
      name: "Gerhard Leuschke",
      tel: "(046) 168-5816",
      address: "55782 Karine Plaza",
      opening_hours: "08:00",
      description: "Qui sint voluptatum cum quo corporis veniam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.83548981371294",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 24,
      name: "Francisca Gleichner",
      tel: "1-277-829-4683 x857",
      address: "491 Hahn Knoll",
      opening_hours: "08:00",
      description:
        "Et eum dolorem et. Doloribus et numquam sed quia. Sequi adipisci voluptas qui. Ipsum similique natus nesciunt autem. Provident voluptatum dolorem voluptatem labore temporibus cumque neque. Itaque vitae modi.\n \rIste eos veritatis et et aut quae omnis. Sed non deserunt ut accusantium optio assumenda dicta eveniet ullam. Fugiat quisquam eos rem. Et maxime dolor laboriosam ad velit qui temporibus. Voluptas voluptatem velit quo. Et sed dolore a accusantium inventore nulla.\n \rEos iste consequatur velit dolorum expedita fugit nihil consequatur. Nisi eligendi ipsam non ex ea qui ut neque non. Facilis voluptatem fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.742186388889756",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 27,
      name: "Minerva Baumbach",
      tel: "350.530.5015 x72806",
      address: "1277 Joanny Road",
      opening_hours: "08:00",
      description:
        "Quo itaque voluptatem consequatur ex aut. Qui ducimus vel atque excepturi nam repellendus. Perspiciatis ipsam dolorem. Voluptatem deserunt eligendi et eaque qui ea magnam ut.\n \rExpedita corrupti ad aut repellat voluptatem tenetur tempore. Voluptas ut sit aut sit quis voluptas porro dolorem assumenda. Quidem repellendus repellat quidem porro voluptatibus culpa ipsum est.\n \rQuod quia voluptas. Inventore sequi pariatur itaque. Corporis quae natus nesciunt. Fuga repudiandae expedita totam dolore quod et. Veniam corrupti occaecati distinctio dolor.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.42667941373233",
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
      id: 28,
      name: "Briana Brakus",
      tel: "927.824.4457",
      address: "0632 Saul Well",
      opening_hours: "08:00",
      description:
        "Reiciendis quibusdam inventore dicta maiores et omnis qui iste. Iste molestiae reprehenderit unde. Vero ad et nihil reiciendis. Dolor iure deserunt.\n \rQui dolorum delectus est dolorum delectus temporibus aut. Nemo eum nihil dolore quas dolorum nesciunt sed. Et at sit officia est nisi corrupti error non.\n \rSimilique itaque rerum dicta doloremque doloremque aut labore est. Laboriosam soluta qui omnis ut officia beatae est ut. Vitae sed qui a provident. Quam distinctio blanditiis. Unde repellendus dolorum rerum minima soluta corporis ea aut. Amet nesciunt iure dolor officiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.664510090924587",
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
      id: 29,
      name: "Ally Halvorson",
      tel: "(322) 238-4844",
      address: "58288 Destini Lights",
      opening_hours: "08:00",
      description: "esse",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.90788329547371",
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
      id: 30,
      name: "Lillie Langosh",
      tel: "(441) 371-1787 x2776",
      address: "740 Hoeger Mission",
      opening_hours: "08:00",
      description:
        "Quam eos dolorum et ullam quia.\nEt deserunt qui.\nOccaecati atque et recusandae.\nAut vel quae porro iure dignissimos aut dicta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.50657730336786",
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
      id: 31,
      name: "Una Erdman",
      tel: "1-231-366-6983",
      address: "1017 Bode Estates",
      opening_hours: "08:00",
      description: "aut et velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.390000331092656",
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 33,
      name: "Lance Monahan",
      tel: "476.089.4588 x1141",
      address: "4320 Durward Track",
      opening_hours: "08:00",
      description:
        "Sed dolorum magni est ad inventore natus. Et ex atque totam et. Repudiandae est amet eos. Aut doloremque enim eos fugit similique aut quae et debitis. Suscipit quis totam nihil iure sit alias incidunt.\n \rEa facilis illum quam cupiditate eum temporibus. Quia est beatae corporis error magni ipsam ullam. Consequatur facere laborum optio omnis odit. Et dolorem enim sapiente amet molestias maxime in nulla mollitia.\n \rFuga sapiente ad totam repudiandae. Quis laudantium consequatur veniam. Doloremque hic architecto. Velit dolorem reprehenderit numquam. Ex est quam ex placeat ab.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.743392259196945",
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
      id: 34,
      name: "Leopold Durgan I",
      tel: "672.640.3092 x2049",
      address: "692 Ofelia Green",
      opening_hours: "08:00",
      description:
        "Facilis quos dolor qui inventore pariatur. Inventore dignissimos sapiente sed est provident. Sunt quo quasi assumenda neque asperiores voluptatibus sit modi. Omnis quae non commodi earum ut repudiandae ipsum aliquid. Nobis repellendus voluptas ut. Sit voluptas sed cupiditate nulla animi quia eum ipsa maiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.49099957468453",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 36,
      name: "Estella Boyle",
      tel: "1-152-657-3426",
      address: "6832 Fadel Prairie",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.43434458989215",
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
      id: 37,
      name: "Oswald Reichel",
      tel: "1-272-107-5463 x6697",
      address: "6569 Jenkins Harbor",
      opening_hours: "08:00",
      description: "Earum dolores pariatur assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.58579822804565",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 40,
      name: "Lennie Treutel",
      tel: "559.319.4249",
      address: "808 Magali Run",
      opening_hours: "08:00",
      description: "vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.099028360669914",
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
      id: 41,
      name: "Emmitt Witting",
      tel: "666-958-3477",
      address: "58743 Schinner Shore",
      opening_hours: "08:00",
      description: "quia molestiae nihil",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.19903377100732",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 45,
      name: "Santino Abbott II",
      tel: "(572) 689-5486",
      address: "713 Micah Village",
      opening_hours: "08:00",
      description:
        "Magnam nisi harum aut facilis unde facilis esse optio ex. Laudantium quod quia sint odio veritatis veritatis corporis rerum. Quisquam et illo. Et natus ducimus officiis ipsam sint.\n \rSed nihil quae officiis omnis consequatur inventore. Incidunt blanditiis nostrum quidem consectetur omnis. Incidunt ut cumque. Aspernatur odio recusandae.\n \rUt ea sit. Labore itaque et praesentium est quasi ducimus aut et. Nisi tempore a est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.6027032997051",
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
      id: 46,
      name: "Julius Harris",
      tel: "390-125-8305 x07452",
      address: "55818 Eunice Cape",
      opening_hours: "08:00",
      description: "ipsum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.45792999430952",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
    {
      id: 49,
      name: "Mrs. Aubree Hettinger",
      tel: "(378) 580-0572",
      address: "93929 Renner Locks",
      opening_hours: "08:00",
      description: "Minima illum ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.9905877702045585",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-08-05T16:45:23.000Z",
        updatedAt: "2022-08-05T16:45:23.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>


