<template>
  <VApp>
    <div>
      <user-layout v-if="route.meta.layout == 'user'">
        <router-view />
      </user-layout>

      <admin-layout v-if="route.meta.layout == 'admin'">
        <!-- <nav>
        <router-link to="/">Home Admin</router-link> |
        <router-link to="/about">About Admin</router-link>
      </nav> -->
        <router-view />
      </admin-layout>

      <auth-layout v-if="route.meta.layout == 'auth'">
        <router-view />
      </auth-layout>
    </div>
  </VApp>
</template>

<script setup>
import { useRoute } from "vue-router";
import userLayout from "./layouts/userLayout.vue";
import adminLayout from "./layouts/adminLayout.vue";
import authLayout from "./layouts/authLayout.vue";

const route = useRoute();
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
