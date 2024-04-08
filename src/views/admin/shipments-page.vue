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
            />
          </VCol>
        </VRow>
      </vContainer>
    </vContainer>
  </div>
</template>

<script setup>
import AdminCard from "@/components/adminUtils/admin-card.vue";
import { computed } from "vue";

const shipments = computed(() => {
  return [
    {
      color: "",
      text: "All Shipments",
      length: 0,
      fontAndIconColor: "accent",
    },
    {
      color: "",
      text: "All Completed Shipments",
      length: 0,
      fontAndIconColor: "green",
    },
    {
      color: "",
      text: "All Ongoing Shipments",
      length: 0,
      fontAndIconColor: "orange",
    },
    {
      color: "",
      text: "All Closed Shipments",
      length: 0,
      fontAndIconColor: "red",
    },
  ];
});
</script>
<style></style>
