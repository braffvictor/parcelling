<template>
  <div>
    <VCard variant="outlined" class="pa-3" rounded="xl" color="accent">
      <VCardText
        class="d-flex justify-center justify-md-start align-center"
        style="gap: 12px"
      >
        <div>
          <v-img
            :src="data.passportPhoto"
            width="100"
            height="100"
            cover
            class="rounded-circle"
          ></v-img>
        </div>
        <div>
          <p class="text-accent text-left text-h6">
            {{
              data.fullName.length > 16 && $vuetify.display.mdAndDown
                ? data.fullName.slice(0, 15) + "..."
                : data.fullName
            }}
          </p>
          <p class="text-accent text-left">
            {{
              data.email.length > 16 && $vuetify.display.mdAndDown
                ? data.email.slice(0, 15) + "..."
                : data.email
            }}
          </p>
          <p
            class="text-primary font-weight-bold text-left"
            @click="contentCopy(data)"
          >
            {{ data.trackingCode }}
            <VIcon
              size="x-small"
              icon="fa-clone"
              @click="contentCopy(data)"
            ></VIcon>
          </p>
          <p class="text-accent text-left">{{ data.shipment }}</p>
          <p class="text-accent text-left">{{ data.dueDate }}</p>
          <p class="text-accent text-left">
            Status :
            <VChip
              :color="colors[data.status.toLowerCase()]"
              class="text-capitalize"
              size="x-small"
              >{{ data.status }}</VChip
            >
          </p>
        </div>
      </VCardText>
      <VCardText>
        <VBtn
          class="mb-2"
          :color="action.color"
          block
          @click="action.action($event, data)"
          variant="flat"
          v-for="action in props.actions"
          :key="action.color"
          >{{ action.text }}</VBtn
        >
        <VBtn
          color="red"
          block
          :loading="loading.delete"
          variant="flat"
          @click="deleteShipment(data)"
          >Delete</VBtn
        >
      </VCardText>
    </VCard>
  </div>
</template>

<script setup>
//imported picture
// import youth from "@/assets/youth.jpg";

import adminflow from "@/store/adminflow";
import userflow from "@/store/userflow";
import { reactive } from "vue";

//vue functions
import { defineProps } from "vue";

const loading = adminflow.state.loading;

const colors = reactive({
  completed: "green",
  ongoing: "orange",
  closed: "red",
});

const deleteShipment = (data) => {
  adminflow.dispatch("deleteShipment", data);
};

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {};
    },
  },
  actions: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const contentCopy = (data) => {
  navigator.clipboard.writeText(data.trackingCode);

  userflow.dispatch("initAlert", {
    type: "success",
    message: `Tracking ID for ${data.fullName} Copied Successfully`,
    is: true,
    close: true,
    timer: 5000,
  });
};
</script>

<style></style>
