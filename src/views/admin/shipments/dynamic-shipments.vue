<template>
  <div class="mt-5">
    <v-row class="mx-0 px-0" justify="center">
      <VCol cols="11" md="4">
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
      <VCol cols="11" md="6">
        <VTextField
          v-model="search"
          label="Search Shipment"
          color="primary"
          class="text-accent"
          variant="underlined"
        />
      </VCol>
    </v-row>

    <v-row
      class="mx-0 px-0"
      justify="center"
      v-if="dynamiCard[$route.params.id].array.length > 0"
    >
      <VCol cols="12" class="ma-0 pa-0">
        <TransitionGroup name="list">
          <VCol
            class="mx-auto text-center"
            cols="11"
            md="7"
            v-for="shipment in dynamiCard[$route.params.id].array"
            :key="shipment.id"
          >
            <AdminPropCard :actions="actions" :data="shipment" />
          </VCol>
        </TransitionGroup>
      </VCol>
    </v-row>

    <v-row class="mx-0 px-0" justify="center" v-else>
      <VCol cols="11" md="7">
        <VIcon color="primary" size="60" icon="fa-database"></VIcon>
        <p class="text-center text-accent mt-5">No Shipment Available</p>
      </VCol>
    </v-row>

    <DialogComp
      :dialog="dialog"
      :type="type"
      :shipment="shipment"
      @closeDialog="dialog = false"
    />
  </div>
</template>

<script setup>
//components
import AdminCard from "@/components/adminUtils/admin-card.vue";
import AdminPropCard from "@/components/adminUtils/adminPropCard.vue";
import DialogComp from "@/components/adminUtils/dialogComp.vue";

//state management
import adminflow from "@/store/adminflow";

import { computed, ref } from "vue";

const search = ref("");

//for dialog
const dialog = ref(false);
const type = ref("");
const shipment = ref(null);

const actions = computed(() => {
  return [
    {
      text: "View",
      color: "primary",
      action: (event, data) => {
        shipment.value = data;
        dialog.value = true;
        type.value = "viewShipment";
      },
    },
    {
      text: "Edit",
      color: "accent",
      action: (event, data) => {
        shipment.value = data;
        dialog.value = true;
        type.value = "editShipment";
      },
    },
  ];
});

const dynamiCard = computed(() => {
  return {
    all: {
      fontAndIconColor: "white",
      length: adminflow.state.shipments.length,
      array: allShipment.value,
      text: "All Shipments",
    },
    completed: {
      fontAndIconColor: "green",
      length: completedShipment.value.length,
      array: completedShipment.value,
      text: "Completed Shipments",
    },
    ongoing: {
      fontAndIconColor: "orange",
      length: ongoingShipment.value.length,
      array: ongoingShipment.value,
      text: "Ongoing Shipments",
    },
    closed: {
      fontAndIconColor: "red",
      length: closedShipment.value.length,
      array: closedShipment.value,
      text: "Closed Shipments",
    },
  };
});

const allShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return (
      shipment.status.includes(search.value) ||
      shipment.fullName.includes(search.value) ||
      shipment.fullName.toLowerCase().includes(search.value) ||
      shipment.email.includes(search.value) ||
      shipment.shipment.includes(search.value) ||
      shipment.shipment.toLowerCase().includes(search.value)
    );
  });
});

const completedShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return (
      shipment.status == "Completed" &&
      (shipment.status.includes(search.value) ||
        shipment.fullName.includes(search.value) ||
        shipment.fullName.toLowerCase().includes(search.value) ||
        shipment.email.includes(search.value) ||
        shipment.shipment.includes(search.value) ||
        shipment.shipment.toLowerCase().includes(search.value))
    );
  });
});
const ongoingShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return (
      shipment.status == "Ongoing" &&
      (shipment.status.includes(search.value) ||
        shipment.fullName.includes(search.value) ||
        shipment.fullName.toLowerCase().includes(search.value) ||
        shipment.email.includes(search.value) ||
        shipment.shipment.includes(search.value) ||
        shipment.shipment.toLowerCase().includes(search.value))
    );
  });
});
const closedShipment = computed(() => {
  return adminflow.state.shipments.filter((shipment) => {
    return (
      shipment.status == "Closed" &&
      (shipment.status.includes(search.value) ||
        shipment.fullName.includes(search.value) ||
        shipment.fullName.toLowerCase().includes(search.value) ||
        shipment.email.includes(search.value) ||
        shipment.shipment.includes(search.value) ||
        shipment.shipment.toLowerCase().includes(search.value))
    );
  });
});
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
