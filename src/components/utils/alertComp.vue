<template>
  <div>
    <VSnackbar
      fixed
      :location="$vuetify.display.mdAndDown ? 'top center' : 'top right'"
      multi-line
      color="transparent"
      :transition="alert.is ? 'dialog-transition' : 'slide-x-transition'"
      :timeout="-1"
      variant="flat"
      v-model="alert.is"
    >
      <v-alert
        class="pa-0 ma-0 rounded-shaped"
        v-model="alert.is"
        border="end"
        :color="colors[alert.type]"
        variant="flat"
      >
        <v-card-text class="">
          <div class="d-flex justify-space-between align-center">
            <p class="text-body-1 text-left text-white">
              {{ alert.message }}
            </p>
            <p v-if="alert.close">
              <VBtn
                color="white"
                size="x-small"
                variant="text"
                class="rounded-circle"
                @click="closeAlert"
                icon
                ><VIcon size="small" color="white" icon="fa-times"></VIcon
              ></VBtn>
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
