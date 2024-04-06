<template>
  <div>
    <VSnackbar
      fixed
      :location="$vuetify.display.mdAndDown ? 'top center' : 'top right'"
      multi-line
      color="transparent"
      transition="slide-x-transition"
      :timeout="-1"
      variant="flat"
      v-model="alert.is"
    >
      <v-alert
        class="pa-0 ma-0 rounded-shaped"
        v-model="alert.is"
        border="bottom"
        :color="colors[alert.type]"
        variant="flat"
      >
        <v-card-text class="">
          <div class="d-flex align-start">
            <p class="mx-2">
              <VIcon :icon="icons[alert.type]" size="small"></VIcon>
            </p>
            <p class="text-md-body-1 text-body-2 text-left text-white">
              {{ alert.message }}
            </p>
            <VSpacer />
            <p v-if="alert.close" class="align-self-">
              <VIcon
                @click="closeAlert"
                size="x-small"
                color="white"
                icon="fa-times"
              ></VIcon>
            </p>
          </div>
        </v-card-text>
      </v-alert>
    </VSnackbar>
  </div>
</template>
<script setup>
import { computed, reactive } from "vue";

import userflow from "@/store/userflow";

const colors = reactive({
  success: "primary",
  error: "red",
});

const icons = reactive({
  success: "fa-check-circle",
  error: "fa-exclamation-triangle",
});

const alert = computed(() => {
  return userflow.getters.getAlert;
});

function closeAlert() {
  userflow.commit("setAlert", {
    type: alert.value.type,
    is: false,
    message: alert.value.message,
    title: alert.value.title,
    close: alert.value.close,
  });
}
</script>
<style></style>
