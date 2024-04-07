<template>
  <div>
    <VCard
      :to="to ? to : null"
      variant="outlined"
      color="grey-lighten-2"
      rounded="xl"
      class="pa-5"
    >
      <VCardText class="d-flex flex-column">
        <div class="my-4">
          <VIcon :icon="icon" to size="50" color="accent"></VIcon>
        </div>

        <div class="text-accent text-body-2 text-md-body-1">
          {{ text }}
          <p class="">{{ length }}</p>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  length: {
    default: 0,
  },
  to: {
    type: String,
    default: null,
  },
});
</script>
<style></style>
