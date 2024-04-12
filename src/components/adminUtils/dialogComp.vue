<template>
  <div class="" style="height: auto">
    <VDialog
      @update:model-value="dialog"
      :model-value="dialog"
      persistent
      :overlay="true"
      :fullscreen="$vuetify.display.mdAndDown ? true : false"
      max-width="500px"
      height="auto"
      transition="dialog-transition"
      scrollable
      scroll-strategy="none"
      style="height: auto; overflow-y: visible"
    >
      <div>
        <!-- to add shipment -->
        <AddShipment
          @closeDialog="emits('closeDialog')"
          v-if="type == 'addShipment'"
        />

        <!-- to edit shipment -->
        <EditShipment
          v-if="type == 'editShipment'"
          :shipmentData="shipment"
          @closeDialog="emits('closeDialog')"
        />

        <!-- to view the shipment -->
        <ViewShipment
          v-if="type == 'viewShipment'"
          :shipment="shipment"
          @closeDialog="emits('closeDialog')"
        />
      </div>
    </VDialog>
  </div>
</template>
<script setup>
/* eslint-disable */
import { defineProps, defineEmits } from "vue";
import AddShipment from "./addShipment.vue";
import EditShipment from "./editShipment.vue";
import ViewShipment from "./viewShipment.vue";
const emits = defineEmits(["closeDialog"]);

const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "",
  },
  shipment: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const test = () => {
  console.log("view emitted");
};

//form control
//submit function
</script>
<style></style>
