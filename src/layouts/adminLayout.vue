<template>
  <div class="" v-if="authentication.state.user">
    <VBtn
      color="primary"
      @click="dialog = true"
      icon
      class="mb-10 mr-10"
      size="large"
      :loading="loading.shipment"
      style="z-index: 100"
      position="fixed"
      location="bottom end"
      ><VIcon icon="fa-plus" color="white"></VIcon
    ></VBtn>
    <v-app-bar
      color="accent"
      class="align-center"
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
        <VBtn @click="signOut" color="red" size="small" variant="outlined"
          >Logout
          <VIcon
            icon="fa-sign-out"
            class="ml-2"
            color="red"
            size="small"
          ></VIcon>
        </VBtn>
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

    <v-main class="bg-white">
      <Transition name="slide-fade">
        <router-view />
      </Transition>
    </v-main>

    <DialogComp
      :dialog="dialog"
      @closeDialog="dialog = false"
      type="addShipment"
    />
  </div>

  <div v-else style="min-height: 100vh" class="bg-accent"></div>

  <!-- app bar -->
</template>

<script setup>
//components
import DialogComp from "@/components/adminUtils/dialogComp.vue";

//plugin
import vuetify from "@/plugins/vuetify";

//state management
import authentication from "@/store/authentication";
import adminflow from "@/store/adminflow";

//vue functions
import { onBeforeMount, ref, computed, onMounted } from "vue";

//for controlling the dialog component
const dialog = ref(false);
const loading = adminflow.state.loading;

//for Navigation drawer
const rail = ref(true);
const drawer = ref(false);

const size = ref(vuetify.display.mdAndDown);

onMounted(async () => {
  await authentication.dispatch("userWatch");
  const user = authentication.state.user;
  console.log(user);
});

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

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
}
</style>
