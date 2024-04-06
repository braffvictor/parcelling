<template>
  <div class="">
    <v-app-bar
      color="accent"
      class="align-baseline"
      :height="$vuetify.display.mdAndDown ? '50' : '65'"
      flat
    >
      <div class="d-block d-md-none mx-4">
        <VIcon icon="fa-bars" size="small" @click="drawer = !drawer"></VIcon>
      </div>
      <div class="d-none d-md-block mx-4">
        <VIcon icon="fa-bars" size="small" @click="rail = !rail"></VIcon>
      </div>
      <div class="text-white mt-2 ml-5 font-weight-light text-left justify-end">
        Admin Dashboard
      </div>

      <VSpacer />
      <div class="mr-4">
        <VIcon icon="fa-user-circle" size="small"></VIcon>
      </div>
    </v-app-bar>

    <!-- navigation drawer -->
    <VNavigationDrawer
      :permanent="$vuetify.display.mdAndDown ? false : true"
      :temporary="$vuetify.display.mdAndDown ? true : false"
      v-model="drawer"
      color="accent"
      tile
      touchless
      floating
      class="pa-0 px-2 py-5"
      location="left"
      @click="rail = !rail"
      :rail="$vuetify.display.mdAndDown ? false : rail"
    >
      <VCard
        variant="flat"
        tile
        to=""
        height="45"
        class="d-flex purple mr-1 rounded-lg pa-3 w-100 align-center text-shades-white"
        color="deep-purple-lighten-5"
        theme="light"
        @click="() => {}"
      >
        <div class="mr-5">
          <VIcon icon="fa-home" size="x-small" color="accent"></VIcon>
        </div>
        <div class="text-accent mt-1 font-weight-light">
          <p>Home</p>
        </div>
        <!-- <div class="mx-3">
          <v-img :src="link.img" min-width="30"></v-img>
          <VSpacer />
       </div>
       <div
         class="font-weight-medium"
         :class="route.path == link.to ? 'text-white' : 'text-accent'"
       >
         {{ link.name }}
       </div> -->
      </VCard>
    </VNavigationDrawer>

    <v-main>
      <router-view />
    </v-main>
  </div>

  <!-- app bar -->
</template>

<script setup>
import vuetify from "@/plugins/vuetify";
import { onBeforeMount, ref } from "vue";

const rail = ref(true);
const drawer = ref(false);

const size = ref(vuetify.display.mdAndDown);

onBeforeMount(() => {
  if (size.value) {
    drawer.value = false;
  } else {
    drawer.value = true;
    console.log("drawing");
  }
});
</script>

<style></style>
