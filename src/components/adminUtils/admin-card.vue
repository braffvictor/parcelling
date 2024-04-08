<template>
  <div>
    <VCard
      :to="to ? to : null"
      variant="outlined"
      :color="color ? color : 'grey-lighten-2'"
      rounded="xl"
      class="pa-5"
      :class="color ? color : 'bg-white'"
    >
      <VCardText class="d-flex flex-column">
        <div class="my-4">
          <VIcon :icon="icon" to size="50" :color="fontAndIconColor"></VIcon>
        </div>

        <div
          class="text-body-2 text-md-body-1"
          :class="`text-${fontAndIconColor}`"
        >
          {{ text }}
          <p class="" :class="`text-${fontAndIconColor}`">{{ length }}</p>
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
    type: [String, Number],
    default: 0,
  },
  to: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "",
  },
  fontAndIconColor: {
    type: String,
    default: "accent",
  },
});
</script>
<style></style>
