<template>
  <div id="restaurant-forum">
    <Navbar />
    <main
      role="main"
      class="mt-5 bg-white"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
