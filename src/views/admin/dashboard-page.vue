<template>
  <div class="bg-white">
    <v-row class="bg-accent pa-4 mx-0 px-0" align="center">
      <VCol cols="6">
        <p class="text-white text-left py-4 px-2">Welcome, Super Admin</p>
      </VCol>
      <VCol cols="6">
        <VTextField
          v-model="search"
          variant="underlined"
          color="primary"
          class="text-white"
          density="comfortable"
          label="Search"
        />
      </VCol>
    </v-row>

    <vContainer>
      <div>
        <VCol cols="12">
          <VCard
            rounded="xl"
            class="pa-4 mt-n10"
            style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px"
          >
            <VRow justify="center">
              <VCol cols="12" md="4" v-for="dash in dashCards" :key="dash.icon">
                <AdminCard
                  :icon="dash.icon"
                  :length="dash.length"
                  :text="dash.text"
                  :to="dash.to"
                />
              </VCol>
            </VRow>
          </VCard>
        </VCol>
      </div>
    </vContainer>
  </div>
</template>
<script setup>
import AdminCard from "@/components/adminUtils/admin-card.vue";
import { ref, computed } from "vue";

//state management
// import adminflow from "@/store/adminflow";
import adminflow from "@/store/adminflow";

// using composables to get the state of...seems not to be changing at real time
// import { getState } from "@/composables/getState";
// const { state: users } = getState("adminflow", "users");
// const { state: shipments } =  getState("adminflow", "shipments");

const dashCards = computed(() => {
  return [
    {
      icon: "fa-user-circle",
      text: "Admin(s)",
      length: adminflow.getters.getState("users").length,
      to: "",
    },
    {
      icon: "fa-box",
      text: "Shipments",
      length: adminflow.state.shipments.length,
      to: "/admin/shipments",
    },
  ].filter((dash) => {
    return (
      dash.text.includes(search.value) ||
      dash.text.toLowerCase().includes(search.value)
    );
  });
});

const search = ref("");
</script>
<style></style>
