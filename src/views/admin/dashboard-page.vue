<template>
  <div>
    <v-row class="bg-accent pa-4 mx-0 px-0" align="center">
      <VCol cols="6">
        <p class="text-white text-left py-4 px-2">Welcome, Super Admin</p>
      </VCol>
      <VCol cols="6">
        <VTextField
          v-model="search"
          variant="underlined"
          color="primary"
          class="text-white"
          density="comfortable"
          label="Search"
        />
      </VCol>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from "vue";

// import { useStore } from "vuex";

// const store = useStore();
// console.log(store.getters.getCount);

const search = ref("");
</script>
<style></style>
