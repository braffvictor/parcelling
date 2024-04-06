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
        <VIcon @click="signOut" icon="fa-user-circle" size="small"></VIcon>
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
      @click.self="rail = !rail"
      :rail="$vuetify.display.mdAndDown ? false : rail"
    >
      <VCard
        variant="flat"
        tile
        :to="link.to"
        height="50"
        class="my-2 mr-1 rounded-lg pa-3 w-100 align-center text-shades-white"
        :color="link.to == $route.path ? 'deep-purple-lighten-5' : 'accent'"
        v-for="link in links"
        :key="link.icon"
        @click="() => {}"
      >
        <div class="d-flex align-center">
          <div class="mr-5">
            <VIcon
              :icon="link.icon"
              size="x-small"
              :color="
                link.to == $route.path ? 'accent' : 'deep-purple-lighten-5'
              "
            ></VIcon>
          </div>
          <div
            class="mt-1 font-weight-light text-dep"
            :class="
              link.to == $route.path
                ? 'text-accent'
                : 'text-deep-purple-lighten-5'
            "
          >
            <p>{{ link.name }}</p>
          </div>
        </div>
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
import authentication from "@/store/authentication";
import { onBeforeMount, ref, computed } from "vue";

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

function signOut() {
  authentication.dispatch("signOut");
}

const links = computed(() => {
  return [
    {
      icon: "fa-home",
      name: "Dashboard",
      to: "/admin/dashboard",
    },
    {
      icon: "fa-truck",
      name: "Shipments",
      to: "/admin/shipments",
    },
  ];
});
</script>

<style></style>
