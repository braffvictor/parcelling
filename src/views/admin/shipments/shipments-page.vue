<template>
  <div class="bg-accent" style="min-height: 100vh">
    <v-row class="bg-accent pt-4 mx-0 px-0" align="center">
      <VCol cols="12">
        <p class="text-white text-left ml-8">Shipments Management</p>
      </VCol>
      <!-- <VCol cols="6">
        <VTextField
          v-model="search"
          variant="underlined"
          color="primary"
          class="text-white"
          density="comfortable"
          label="Search"
        />
      </VCol> -->
    </v-row>
    <vContainer>
      <vContainer>
        <VRow class="mx-0 px-0">
          <VCol
            cols="12"
            md="4"
            v-for="shipment in shipments"
            :key="shipment.text"
          >
            <AdminCard
              :font-and-icon-color="shipment.fontAndIconColor"
              icon="fa-truck"
              :length="shipment.length"
              :text="shipment.text"
              :to="shipment.to"
            />
          </VCol>
        </VRow>
      </vContainer>
    </vContainer>
  </div>
</template>

<script setup>
import AdminCard from "@/components/adminUtils/admin-card.vue";
import adminflow from "@/store/adminflow";
import { computed } from "vue";

const shipments = computed(() => {
  return [
    {
      color: "",
      text: "All Shipments",
      length: adminflow.state.shipments.length,
      fontAndIconColor: "accent",
      to: "/admin/shipments/all",
    },
    {
      color: "",
      text: "All Completed Shipments",
      length: completedShipment.value.length,
      fontAndIconColor: "green",
      to: "/admin/shipments/completed",
    },
    {
      color: "",
      text: "All Ongoing Shipments",
      length: ongoingShipment.value.length,
      fontAndIconColor: "orange",
      to: "/admin/shipments/ongoing",
    },
    {
      color: "",
      text: "All Closed Shipments",
      length: closedShipment.value.length,
      fontAndIconColor: "red",
      to: "/admin/shipments/closed",
    },
  ];
});

const completedShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return shipment.status == "completed";
  });
});
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
