<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          autofocus
          v-model="name"
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          v-model="email"
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          v-model="password"
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          v-model="passwordCheck"
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "處理中" : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast, ToastOk } from "../utils/helpers";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const form = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        };
        if (!this.name || !this.email) {
          Toast.fire({
            icon: "warning",
            title: "請輸入資料",
          });
          return;
        } else if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "密碼錯誤",
          });
          return;
        }
        const { data } = await authorizationAPI.signUp(form);
        this.isProcessing = true;
        if (data.status !== "success") {
          Toast.fire({
            icon: "error",
            title: "信箱已被註冊",
          });
          setTimeout(() => (this.isProcessing = false), 1000);
          return;
        }

        setTimeout(() => this.$router.push({ name: "sign-in" }), 1500);
        ToastOk.fire({
          icon: "success",
          title: "註冊成功！跳轉中...",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "註冊失敗",
        });
      }
    },
  },
};
</script>
