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
        Every <span class="text-primary">Order</span> Counts.
        </p>
        <p
          class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
        >
        Connect with 1,045+ carriers instantly with Parcel Perform’s Data and Delivery Experience Platform. Get unprecedented visibility into your logistics network via one cohesive global data standard, comprising 155+ event types, and available in 36+ languages.
        </p>
      </VCol>
      <VCol cols="12" md="6">
        <VCard variant="flat" color="transparent" class="">
          <v-img
            src="https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F1UWC45sDKRxJrUMdovfgjq%2F62ef43e5cc83b2b80f3e96b792e9e971%2FFrame__2_.svg%3Fw%3D743&w=640&q=75"
            cover
          ></v-img>
        </VCard>
      </VCol>
    </VRow>

    <main class="bg-grey-lighten-3 pa-5 pa-md-14">
      <v-row class="mx-0 px-0" justify="center" align="center" no-gutters>
        <VCol cols="12" md="4"
        v-for="carrier in carriers" :key="carrier.title"
        >
        <VCard variant="flat" tile class="" :class="carrier.img ? 'bg-white' : 'bg-accent'" min-height="340" max-height="340">
          <div class="">
            <p class="my-13 my-md-15 text-white text-h5 text-md-h4 mx-2 font-weight-bold" v-if="carrier.title">
              {{ carrier.title }}
            </p>
            <p class="mx-4 text-white text-subtitle-1 " v-if="carrier.text">
             {{ carrier.text }}
            </p>

          </div>
          <div>
            <v-img v-if="carrier.img" :src="carrier.img"></v-img>
          </div>
        </VCard>
      </VCol>
      </v-row>
    </main>

    <main class="bg-accent">
      <div class="pa-7 pa-14">
        <p class="text-primary text-h4 text-md-h3 text-center">
          Join our Carrier Partnership program
        </p>
        <p class="text-white text-h6 my-4 text-h5 font-weight-medium text-center">
          Redefine tracking, efficiency, and trust with us.
        </p>
        <div class="mx-auto text-center">
          <VBtn color="primary" large rounded="lg" variant="flat">Contact Us</VBtn>
        </div>
      </div>
    </main>

    <main class="bg-grey-lighten-3 pa-5 pa-md-10">
      <v-row class="mx-0 px-0">
        <VCol
        cols="12"
        md="4"
        v-for="enterprise in enterprises"
        :key="enterprise.text"
      >
        <v-img
          :src="enterprise.img"
          min-width="40"
          max-width="50"
          class="mx-auto text-center text-md-left mx-md-0"
        ></v-img>
        <p
          class="my-3 text-accent font-weight-bold text-h5 text-center text-md-left"
        >
          {{ enterprise.title }}
        </p>
        <p
          class="text-subtitle-1 text-grey font-weight-regular text-center text-md-left"
        >
          {{ enterprise.text }}
        </p>
      </VCol>

      </v-row>
    </main>

    <ExpertComp/>

    </div>
</template>
<script setup>
import ExpertComp from '@/components/ExpertComp.vue';
import { computed, onBeforeMount } from 'vue';

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});

const carriers = computed(() => {
  return [
    {
      title : 'Connect to a global carrier network.',
        text : 'Access granular reports on carrier performance that enable benchmarking of carriers, markets, and shipping services against all logistics KPIs.'
    },
    {
      title : '',
      img : 'https://images.ctfassets.net/s384oqk42kco/1eT2E7Dx7UywG8IV1jkBV3/dad685bf0a13215d9b385769cc112c54/GIFs1_-_Carrier_page-V4.gif'
    },
    {
      title : 'End-to-end supply chain visibility',
      text : 'Gain 100% delivery visibility via 155+ events and triggers that cover all delivery scenarios in your supply chain.'
    },
  
  ]
})

const enterprises = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4720QDerdyC2BU6Wir4oxE/5e613181f0f4004be0c77768df0ae646/Group-1.svg",
      title: "Speed",
      text: "If speed is your priority, we offer air freight services for even faster deliveries. Our haulage and inland logistics are sure to get your products to your doorstep all within the supervision of industry experts with seasoned experience in the business of transportation.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/44Y2T1OXpTcsFwc82SQ8J2/9064e2e290d8cd5cc28dcbd2ecd841ff/Logistics_and_operations_teams.svg",
      title: "Excellent Storage Facilities",
      text: "Worthy to note is the fact that we offer storage facilities to our customers courtesy of our state of the art warehouse. This can be beneficial to customers who have bulk quantity goods but with no storage space. Our storage space leasing arrangement, just like every other service we render, can be uniquely tailored to your needs.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/eTO3gnzys6bNL90U97Bpm/f9c0e348194433196a3c312948d06f91/Robust_Data.svg",
      title: "Scalable & Secure Platform",
      text: "Globally scalable & available in 36+ languages. GDPR-compliant & ISO 27001 certified.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/161avZotdKfVAHw99rGMRI/74275b5b33e63abca4385eb14d26afcb/user_and_acc_management_icon.svg",
      title: "User & Account Management",
      text: "Unlimited free users, advanced access and UI rights management.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/3XfcNnDvPcjRxY9bRSb6hQ/c111d9efefad922a4f2fe2065b791b1a/wrench.svg",
      title: "Configurable & Customizable",
      text: "Built to match your business requirements and brand. Includes extensive configuration and customization options.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/51Tc0swtJP1Z8CcJ1IdEoN/bd90a5fc874245ed760220f1ddc0e406/Care_benefit_-_2.svg",
      title: "24h Customer Support",
      text: "Dedicated KAM for fast onboarding and continuous support. Resolve technical and UX questions via live chat.",
    },
  ];
});
</script>
<style>
</style>