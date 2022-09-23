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
          v-model="name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="image"
          v-if="image"
          width="200"
          height="200"
          class="d-block img-thumbnail mb-3"
        />
        <input
          id="image"
          accept="image/*"
          class="form-control-file"
          name="image"
          type="file"
          @change="fileToURL"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        {{ isProcessing ? "資料處理中．．．" : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      id: 0,
      image: "",
      name: "",
      email: "",
      isProcessing: false,
    };
  },
  methods: {
    fileToURL(e) {
      const { files } = e.target;
      const imageURL = window.URL.createObjectURL(files[0]);

      files.length === 0 ? (this.profile.image = "") : (this.profile.image = imageURL);
    },
    async handleSubmit(e) {
      if (!this.name) {
        Toast.fire({
          type: "warning",
          title: "請輸入名稱",
        });
        return;
      }
      const form = e.target;
      const formData = new FormData(form);
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.updated({ userId: this.id, formData });
        if (data.status !== "success") throw new Error(data.message);

        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "提交失敗",
        });
      }
    },
    setUser() {
      this.id = this.currentUser.id;
      this.image = this.currentUser.image;
      this.name = this.currentUser.name;
      this.email = this.currentUser.email;
    },
  },
  created() {
    const { id } = this.$route.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },

  watch: {
    currentUser() {
      this.setUser();
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
    next();
  },
};
</script>
