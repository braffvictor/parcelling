<template>
  <main
    class="bgTruck pa-7 pa-md-15"
    :style="`
      background: url(${bgImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `"
  >
    <v-row class="mx-0 px-0" align="center">
      <VCol cols="12" md="8">
        <p
          class="text-h4 text-md-h3 text-primary text-md-left font-weight-bold"
        >
          <slot name="title"></slot>
        </p>
        <p class="text-h6 text-md-h5 text-white font-weight-bold text-md-left">
          <slot name="text"></slot>
        </p>
      </VCol>
      <VCol cols="12" md="4">
        <VBtn color="primary" size="large" class="text-white" variant="flat"
          >Contact Us</VBtn
        >
      </VCol>
    </v-row>
  </main>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  bgImage: {
    type: String,
    default:
      "https://images.ctfassets.net/s384oqk42kco/3UWqbw0n4sJoo95IoIaOjA/31fd2e9379a7f843da3ed2e7c8147a37/New_book_a_demo_banner_proposal.webp?w=1440&fm=png",
  },
});
</script>
<style></style>
