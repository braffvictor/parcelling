<template>
  <div>
    <VRow
      class="mx-0 bg-accent"
      align="center"
      :style="`padding: ${
        $vuetify.display.mdAndDown ? '3.3em 1em' : '5em 2em'
      }`"
      justify="center"
    >
      <VCol cols="12" md="6">
        <p
          class="text-h4 text-md-h2 text-white font-weight-bold text-center text-md-left"
        >
          About <span class="text-primary"> Parcel Perform</span>
        </p>
        <p
          class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
        >
          We are an international team of over 400,000 shipping professionals,
          united by a passion for logistics. And we work in a unique
          environment. Swift Dispatch is as innovative as a start-up, with the
          power of an international organization. Our solutions are powered by
          trade, logistics and the drive and passion of all our employees. In
          every country, across all divisions at Swift Dispatch, we each have
          the potential to make a global difference.
        </p>
      </VCol>
      <VCol cols="12" md="6">
        <VCard variant="flat" color="transparent" class="">
          <v-img
            src="https://images.ctfassets.net/s384oqk42kco/XiQha6fhy7gp7yrvbLCjp/0345f7529f9e0dde02d5f936de7c2ead/dv1.webp?w=870"
            cover
          ></v-img>
        </VCard>
      </VCol>
    </VRow>

    <v-row
      class="mx-0 px-0 bg-white py-5 py-md-10 px-5 px-md-10"
      justify="center"
    >
      <VCol cols="12">
        <p class="text-center text-h5 text-md-h3 font-weight-bold text-primary">
          A strong, global team of Parcel Performers
        </p>
      </VCol>
      <VCol
        cols="6"
        md="3"
        class="my-5 my-md-8"
        v-for="speck in specks"
        :key="speck.number"
      >
        <p class="font-weight-bold text-accent text-h4 text-md-h3">
          {{ speck.number }}
        </p>
        <p class="text-grey text-subtitle-1">{{ speck.text }}</p>
      </VCol>
    </v-row>

    <vContainer>
      <VRow
        class="mx-0"
        align="center"
        :style="`padding: ${
          $vuetify.display.mdAndDown ? '3em 1em' : '2em 2em'
        }`"
        justify="center"
      >
        <VCol cols="12" md="6">
          <VCard variant="flat" color="transparent" class="">
            <v-img
              src="https://images.ctfassets.net/s384oqk42kco/frShgV3IK3L5YsdqGOX7u/470f1c18dd3723b09e8e6c3dc4b46c5f/Logistics_Leaders.png"
              cover
            ></v-img>
          </VCard>
        </VCol>
        <VCol cols="12" md="6">
          <p
            class="text-h4 text-md-h2 text-accent font-weight-bold text-center text-md-left"
          >
            We Are <span class="text-primary">Growth Frontiers</span>
          </p>
          <p
            class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
          >
            You'll thrive on the beneficial implications of your role - you'll
            play an integral part in creating connections that deliver
            opportunity and prosperity all over the world. Our concerns go far
            beyond the people who work for us. Which is why we support
            initiatives impacting the environment and our society. We provide
            plenty of opportunities to develop your role and gain knowledge and
            experience. We'll also ensure we reward your hard work at a
            competitive rate.
          </p>
        </VCol>
      </VRow>
    </vContainer>

    <vContainer>
      <VRow
        class="mx-0"
        align="center"
        :style="`padding: ${
          $vuetify.display.mdAndDown ? '3em 4em' : '2em 6em'
        }`"
      >
        <VCol cols="12" class="my-3 my-md-6">
          <p class="text-h4 text-md-h3 font-weight-bold">
            <span class="text-primary">Perks</span> of Working With Us
          </p>
        </VCol>
        <VCol cols="12" md="4">
          <div
            class="d-flex my-5 my-md-10"
            style="gap: 7px"
            v-for="perk in perks"
            :key="perk.icon"
          >
            <VIcon :icon="perk.icon" size="x-small"></VIcon>
            <div>{{ perk.text }}</div>
          </div>
        </VCol>
        <VCol cols="12" md="4">
          <VCard variant="flat">
            <v-img
              class="text-center mx-auto"
              src="https://www.parcelpending.com/wp-content/uploads/2021/07/Group-720-2.png"
            >
            </v-img>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <div
            class="d-flex my-5 my-md-10"
            style="gap: 7px"
            v-for="perk in perks"
            :key="perk.icon"
          >
            <VIcon :icon="perk.icon" size="x-small"></VIcon>
            <div>{{ perk.text }}</div>
          </div>
        </VCol>
      </VRow>
    </vContainer>
  </div>
</template>
<script setup>
import { computed } from "vue";

const specks = computed(() => {
  return [
    {
      number: "200",
      text: "Parcel Performers",
    },
    {
      number: "1:1",
      text: "Females to males ratio",
    },
    {
      number: "16",
      text: "Nationalities",
    },
    {
      number: "5",
      text: "offices globally",
    },
  ];
});

const perks = computed(() => {
  return [
    {
      icon: "fa-medkit",
      text: "Healthcare Coverage",
    },
    {
      icon: "fa-calendar",
      text: "Paid Time Off/Time Away",
    },
    {
      icon: "fa-headphones",
      text: "Employee Assistance Plan",
    },
  ];
});
</script>
<style></style>
