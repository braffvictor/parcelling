<template>
  <div class="mt-5">
    <v-row class="mx-0 px-0" justify="center">
      <VCol cols="12" md="4">
        <AdminCard
          color="bg-accent"
          :font-and-icon-color="dynamiCard[$route.params.id].fontAndIconColor"
          :length="dynamiCard[$route.params.id].length"
          icon="fa-truck"
          :text="dynamiCard[$route.params.id].text"
        />
      </VCol>
    </v-row>

    <v-row class="mx-0 px-0" justify="center">
      <VCol cols="12" md="6">
        <VTextField
          v-model="search"
          label="Search Shipment"
          color="primary"
          class="text-accent"
          variant="underlined"
        />
      </VCol>
    </v-row>
  </div>
</template>

<script setup>
//components
import AdminCard from "@/components/adminUtils/admin-card.vue";
//state management
import adminflow from "@/store/adminflow";

import { computed, ref } from "vue";

const search = ref("");

const dynamiCard = computed(() => {
  return {
    all: {
      fontAndIconColor: "white",
      length: adminflow.state.shipments.length,
      text: "All Shipments",
    },
    completed: {
      fontAndIconColor: "green",
      length: completedShipment.value.length,
      text: "Completed Shipments",
    },
    ongoing: {
      fontAndIconColor: "orange",
      length: ongoingShipment.value.length,
      text: "Ongoing Shipments",
    },
    closed: {
      fontAndIconColor: "red",
      length: closedShipment.value.length,
      text: "Closed Shipments",
    },
  };
});

const completedShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return shipment.status == "completed";
  });
});
console.log(completedShipment.value);
const ongoingShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return shipment.status == "ongoing";
  });
});
const closedShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return shipment.status == "closed";
  });
});
</script>

<style></style>
