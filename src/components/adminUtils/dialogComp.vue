<template>
  <div class="h-100 w-100">
    <VDialog
      @update:model-value="dialog"
      :model-value="dialog"
      persistent
      :overlay="true"
      :fullscreen="$vuetify.display.mdAndDown ? true : false"
      max-width="500px"
      transition="dialog-transition"
      scrollable
      style="z-index: 5000; overflow-y: auto"
    >
      <div>
        <!-- to add shipment -->
        <AddShipment
          @close-dialog="emits('closeDialog')"
          v-if="type == 'addShipment'"
        />

        <!-- to edit shipment
        <EditShipment v-if="type == 'editShipment'" :shipment="shipment" />

        to view the shipment
        <ViewShipment
          v-if="type == 'viewShipment'"
          :shipment="shipment"
          @close-dialog="emits('closeDialog')"
        /> -->
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

//form control
//submit function
</script>
<style></style>
