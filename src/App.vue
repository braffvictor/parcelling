<template>
  <VApp>
    <alertComp />
    <div>
      <router-view />
    </div>
  </VApp>
</template>

<script setup>
import alertComp from "./components/utils/alertComp.vue";

// import { useRoute } from "vue-router";
// import userLayout from "./layouts/userLayout.vue";
// import adminLayout from "./layouts/adminLayout.vue";
// import authLayout from "./layouts/authLayout.vue";

// const route = useRoute();
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
