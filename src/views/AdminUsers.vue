<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>

        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>

          <td v-show="user.isAdmin">admin</td>
          <td v-show="!user.isAdmin">user</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-show="user.isAdmin"
              @click.stop.prevent="handleAction(user.id)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-show="!user.isAdmin"
              @click.stop.prevent="handleAction(user.id)"
            >
              set as admin
            </button>
          </td>

        </tr>

      </tbody>
    </table>
  </div>
</template>


<script>
import AdminNav from "../components/AdminNav.vue";

const dummyUser = {
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
    AdminNav,
  },
  methods: {
    fetchUser() {
      this.users = dummyUser.users;
    },
    handleAction(userId) {
      //switch isAdmin
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>